-- Label the "Sent" time in the alert email as Eastern time ("2026-11-25 10:16 ET").
-- Converting with AT TIME ZONE drops the zone, so the old 'TZ' format printed nothing.
-- Only the alert function changes; the table, permissions and trigger stay as they are.
-- Run once in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.

create or replace function public.notify_jne_contact_request()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
	api_key text;
	notify_to text;
	notify_from text;
	recipients jsonb;
	body_text text;
begin
	select decrypted_secret into api_key from vault.decrypted_secrets where name = 'resend_api_key';
	select decrypted_secret into notify_to from vault.decrypted_secrets where name = 'jne_contact_notify_to';
	select decrypted_secret into notify_from from vault.decrypted_secrets where name = 'jne_contact_notify_from';

	-- Not configured yet: keep the request, skip the email.
	if api_key is null or notify_to is null or notify_from is null then
		return new;
	end if;

	select coalesce(jsonb_agg(trim(addr)), '[]'::jsonb) into recipients
		from unnest(string_to_array(notify_to, ',')) as addr
		where trim(addr) <> '';

	-- Plain text only, so nothing a visitor types can inject HTML into the email.
	body_text := concat_ws(E'\n',
		'New message from jnesectech.com',
		'',
		'Service:  ' || new.service,
		'For:      ' || new.customer_type,
		'Name:     ' || new.name,
		'Email:    ' || new.email,
		'Phone:    ' || coalesce(new.phone, '(not given)'),
		'Sent:     ' || to_char(new.created_at at time zone 'America/New_York', 'YYYY-MM-DD HH24:MI') || ' ET',
		'',
		new.message,
		'',
		'-- Reply to this email to answer ' || new.name || ' directly.'
	);

	-- Asynchronous: the HTTP call runs after the insert commits and never blocks the visitor.
	perform net.http_post(
		url := 'https://api.resend.com/emails',
		headers := jsonb_build_object(
			'Authorization', 'Bearer ' || api_key,
			'Content-Type', 'application/json'
		),
		body := jsonb_build_object(
			'from', notify_from,
			'to', recipients,
			'reply_to', new.email,
			'subject', '[' || new.service || ' / ' || new.customer_type || '] ' || left(new.name, 80),
			'text', body_text
		)
	);

	return new;
end;
$$;

revoke all on function public.notify_jne_contact_request() from public, anon, authenticated;
