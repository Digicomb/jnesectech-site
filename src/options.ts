// Choices offered in the contact form.
// If you rename or add one, update the matching check constraint in
// supabase/migrations (jne_contact_customer_type_valid / jne_contact_service_valid) too.
export const customerTypes = [
  { value: 'Business', label: 'A business' },
  { value: 'Home', label: 'My home' },
];

export const serviceOptions = [
  { value: 'Security', label: 'Security system' },
  { value: 'Surveillance', label: 'Surveillance cameras' },
  { value: 'Access Control', label: 'Access control' },
  { value: 'Video Monitoring', label: 'Video monitoring' },
  { value: 'Technology & Networks', label: 'IT, networks or phones' },
  { value: 'Smart Home & A/V', label: 'Smart home or audio/visual' },
  { value: 'Service or Support', label: 'Service or support for an existing system' },
  { value: 'Other', label: 'Something else' },
];
