// All site copy lives here, adapted from the 2023 WordPress site (jnesectech.com).

export const company = {
  name: 'JNE Security and Technology',
  phone: '(502) 276-1858',
  phoneHref: 'tel:+15022761858',
  phoneIntl: '+1-502-276-1858',
  email: 'inquiries@jnesectech.com',
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
      'Video surveillance deters both outside and inside theft, and it gives you clear evidence against false claims such as slip-and-fall incidents. We provide continuous, automated digital recording with images that never degrade.',
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
        items: ['Identification-quality video', 'Superior resolution', 'The ability to zoom in on details'],
      },
      {
        heading: 'HD over coax cameras',
        items: ['Lower-cost solution', 'Great image quality', 'A great option for homes and small areas'],
      },
    ],
    note: 'Do you need identification-quality video or just video verification? We will help you decide.',
  },
  {
    id: 'access-control',
    title: 'Access Control',
    image: 'access-control',
    summary:
      'Choose cards, codes, key fobs or biometrics. Our systems are built for organizations with many doors, many employees or high turnover, and we install them professionally and train your team to use them.',
    groups: [
      {
        heading: 'Key benefits',
        items: [
          'Manage access from anywhere, any time',
          'Grant or revoke individual codes in real time',
          'Automate your alarm arming schedule',
          'No rekeying when someone leaves; just remove their code',
          'Run reports and produce badges',
          'One-time codes for contractors and temporary users',
          'Integration with video monitoring',
        ],
      },
    ],
  },
  {
    id: 'video-monitoring',
    title: 'Video Monitoring',
    image: 'video-monitoring',
    summary:
      'Cameras deter theft, vandalism and unauthorized access, and recorded footage gives law enforcement real evidence. When paired with analytics and AI, monitoring enables real-time threat detection and response.',
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
          'Loss prevention that can reduce the need for security staff',
        ],
      },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    image: 'security',
    summary:
      'We install intrusion, fire and life-safety systems with the latest equipment and capabilities, from glass-break sensors to real-time video on your phone, to protect your family, home or business.',
    groups: [
      {
        heading: 'Why choose our systems',
        items: [
          'Over 25 years of combined experience serving Kentuckiana',
          'FM-approved, UL-listed equipment from major manufacturers',
          'Interactive, Z-Wave and home automation technology',
          'Cellular backup, so a cut phone line does not interrupt service',
          'Installed by licensed technicians with years of field experience',
          'A service plan for as long as you are monitored',
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
      'We are your one-stop IT partner for business and home, handling network design and management, firewalls, telephony and audio/visual with equipment from Ubiquiti, Cisco, Netgear and Meraki.',
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
          'A swift assessment of your immediate needs',
          'A clear plan aligned with your goals',
          'Your approval before work begins',
          'Rapid implementation, with support long after setup',
        ],
      },
    ],
  },
];

export const smartHome = [
  {
    title: 'Smart home & automation',
    text: 'With smart locks, remote garage door openers and video doorbells, you can take charge of your home or business and stay connected from anywhere.',
  },
  {
    title: 'Home theater & audio',
    text: 'We install custom whole-home audio, wireless multi-room listening, 7.1.4 Dolby Atmos sound, projectors, screens and surround sound for cinema-quality movie nights.',
  },
  {
    title: 'Commercial audio/visual',
    text: 'We tailor audio and video systems to your space, from offices to sports bars, including integrated video conferencing and streamlined controls.',
  },
];

export const reasons = [
  {
    title: 'Monitored protection',
    text: 'A professionally monitored system protects you from burglary, fire, medical emergencies, flooding and carbon monoxide.',
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
    text: 'We start by walking through your home or business, then design a package that performs the way you expect, today and far into the future.',
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
  { title: 'Innovation', text: 'Staying at the forefront of technology to bring you the best.' },
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
