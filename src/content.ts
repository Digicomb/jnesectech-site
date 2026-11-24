// All site copy lives here, adapted from the 2023 WordPress site (jnesectech.com).

export const company = {
  name: 'JNE Security and Technology',
  phone: '(502) 713-8301',
  phoneHref: 'tel:+15027138301',
  email: 'questions@jnesecuritysystems.com',
  street: '11900 Plantside Drive, Suite 3',
  city: 'Louisville, KY 40299',
  mapUrl: 'https://maps.app.goo.gl/A5waAxXxytBVUwxW8',
  facebook: 'https://www.facebook.com/people/JNE-Security-Systems/100063616898575/',
  // ServiceM8 online booking / quote request (same link the old site used)
  bookingUrl:
    'https://book.servicem8.com/request_service_booking?strVendorUUID=16c848a4-987b-40eb-9603-1c052e423efb',
  founded: 2010,
};

export type Service = {
  id: string;
  title: string;
  image: string;
  summary: string;
  groups: { heading: string; items: string[] }[];
  note?: string;
};

export const services: Service[] = [
  {
    id: 'surveillance',
    title: 'Surveillance',
    image: 'surveillance',
    summary:
      'Video surveillance deters outside and inside theft and gives you clear evidence against false claims like slip-and-fall incidents. Continuous, automated digital recording with images that never degrade.',
    groups: [
      {
        heading: 'Digital recording solutions',
        items: [
          'View your cameras from anywhere over the internet',
          'HD coaxial, high-megapixel IP and wireless cameras',
          'Hybrid DVRs that mix IP and HD coaxial cameras',
          'Remote video monitoring and storage',
          'Up to 20 TB of storage and more',
        ],
      },
      {
        heading: 'IP cameras',
        items: ['Identification-quality video', 'Superior resolution', 'Zoom in on details'],
      },
      {
        heading: 'HD over coax cameras',
        items: ['Lower-cost solution', 'Great image quality', 'Ideal for homes and small areas'],
      },
    ],
    note: 'Need identification-quality video, or just video verification? We will help you decide.',
  },
  {
    id: 'access-control',
    title: 'Access Control',
    image: 'access-control',
    summary:
      'Cards, codes, key fobs or biometrics, built for organizations with many doors, many employees or high turnover. We install it professionally and train your team to use it.',
    groups: [
      {
        heading: 'Key benefits',
        items: [
          'Manage access from anywhere, any time',
          'Grant or revoke individual codes in real time',
          'Automate your alarm arming schedule',
          'No rekeying when someone leaves: just remove their code',
          'Run reports and produce badges',
          'One-time codes for contractors and temporary users',
          'Integrates with video monitoring',
        ],
      },
    ],
  },
  {
    id: 'video-monitoring',
    title: 'Video Monitoring',
    image: 'video-monitoring',
    summary:
      'Cameras deter theft, vandalism and unauthorized access, and recorded footage gives law enforcement real evidence. Paired with analytics and AI, monitoring enables real-time threat detection and response.',
    groups: [
      {
        heading: 'What it gives you',
        items: [
          'Real-time monitoring and immediate response',
          'Remote access to live feeds from anywhere',
          'Evidence for investigations, liability and compliance',
          'Workplace safety and faster response to accidents',
          'Visitor verification at access points',
          'Workflow and customer insights for business and retail',
          'Loss prevention that can reduce security staffing costs',
        ],
      },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    image: 'security',
    summary:
      'Intrusion, fire and life-safety systems with the latest equipment and capabilities, from glass-break sensors to real-time video on your phone, for your family, home or business.',
    groups: [
      {
        heading: 'Why our systems',
        items: [
          'Over 25 years of combined experience serving Kentuckiana',
          'FM-approved, UL-listed equipment from major manufacturers',
          'Interactive, Z-Wave and home automation technology',
          'Cellular communication backup, so cut phone lines do not cut service',
          'Installed by licensed technicians with years of field experience',
          'Service plan for the life of your monitoring',
          'Financing, flexible contracts and payment terms',
        ],
      },
    ],
  },
  {
    id: 'technology-networks',
    title: 'Technology & Networks',
    image: 'networks',
    summary:
      'Your one-stop IT partner for business and home: network design and management, firewalls, telephony and audio/visual, built on Ubiquiti, Cisco, Netgear and Meraki equipment.',
    groups: [
      {
        heading: 'IT services',
        items: [
          'Network creation and ongoing management',
          'Custom firewalls designed with your management team',
          'IT support and maintenance',
          'Telephony setup and optimization',
          'Commercial A/V and integrated video conferencing',
        ],
      },
      {
        heading: 'How we work',
        items: [
          'Swift assessment of your immediate needs',
          'A clear plan aligned with your goals',
          'Your approval before work begins',
          'Rapid implementation and support long after setup',
        ],
      },
    ],
  },
];

export const smartHome = [
  {
    title: 'Smart home & automation',
    text: 'Smart locks, remote garage door openers and video doorbells. Take charge of your home or business and stay connected from anywhere.',
  },
  {
    title: 'Home theater & audio',
    text: 'Custom whole-home audio, wireless multi-room listening, 7.1.4 Dolby Atmos sound, projectors, screens and surround sound for movie night.',
  },
  {
    title: 'Commercial audio/visual',
    text: 'Systems tailored to your space, from offices to sports bars, with integrated video conferencing and streamlined controls.',
  },
];

export const reasons = [
  {
    title: 'Monitored protection',
    text: 'Protection from burglary, fire, medical emergencies, flood and carbon monoxide with a professionally monitored system.',
  },
  {
    title: 'Someone standing watch',
    text: 'Every time you arm your system, it is like someone is watching over your home or business, every second of the day.',
  },
  {
    title: 'Peace of mind, 24/7',
    text: 'Whether you are out for the day or asleep for the night, we are guarding your home, family, business and possessions around the clock.',
  },
];

export const process = [
  {
    title: 'Full walkthrough',
    text: 'We walk your business or home first, then design a package that performs the way you expect today and far into the future.',
  },
  {
    title: 'No cookie-cutter systems',
    text: 'Security technology keeps getting better. We design around your needs, not a stock package.',
  },
  {
    title: 'People who care',
    text: 'We employ great people who genuinely care about doing an outstanding job for everyone who trusts us.',
  },
];

export const values = [
  { title: 'Excellence', text: 'High-quality solutions and service that exceed expectations.' },
  { title: 'Integrity', text: 'Honesty, transparency and ethical behavior in every interaction.' },
  { title: 'Innovation', text: 'Staying at the front of technology to bring you the best.' },
  { title: 'Customer focus', text: 'Personalized solutions and exceptional service.' },
  { title: 'Collaboration', text: 'Teamwork with our employees, partners and clients.' },
];

export const partners = [
  { file: 'alarm-com', name: 'Alarm.com' },
  { file: 'assa-abloy', name: 'ASSA ABLOY' },
  { file: 'cisco', name: 'Cisco' },
  { file: 'hanwha', name: 'Hanwha Vision' },
  { file: 'lts', name: 'LTS' },
  { file: 'altronix', name: 'Altronix' },
  { file: 'system-sensor', name: 'System Sensor' },
  { file: 'pdk', name: 'pdk' },
  { file: 'sonos', name: 'Sonos' },
  { file: 'lg', name: 'LG' },
];
