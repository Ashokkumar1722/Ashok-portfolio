// ALL portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'E ASHOK KUMAR',
  initials: 'EA',
  photo: 'profile.png', // file name inside src/assets/ (e.g. 'my-new-photo.jpg')
  headline: 'Entry-Level Developer | Python | SQL | Web Development | IoT',
  intro:
    'B.Tech Electronics and Communication Engineering student who enjoys building practical projects across web development, Python, databases and IoT systems.',
  about: [
    'I am completing my B.Tech in Electronics and Communication Engineering at Kalasalingam Academy of Research and Education (2022–2026). My work sits between software and hardware: Python, SQL and web development on one side, and IoT, embedded and digital design on the other.',
    'I have built projects such as a face recognition attendance system, a carpooling web platform, an STM32 health monitoring system and a Verilog decoder, and I led a 4-member team in a 24-hour hackathon. I am always learning and looking for an entry-level opportunity to grow.',
  ],
  email: 'eashokkumar017@gmail.com',
  phone: '+91 9347609372',
  phoneLink: '+919347609372',
  location: 'Sri Satya Sai, Andhra Pradesh, India',
};

// Replace these placeholder URLs with your real profiles.
export const socials = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/e-ashok-kumar-7a9210355', icon: 'linkedin' },
  { label: 'GitHub', url: 'https://github.com/your-username', icon: 'github' },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const skillCategories = [
  { title: 'Programming', skills: ['Python', 'SQL', 'Verilog'] },
  { title: 'Web Development', skills: ['HTML', 'CSS', 'JavaScript', 'PHP'] },
  { title: 'Database', skills: ['MySQL'] },
  { title: 'IoT & Embedded', skills: ['STM32', 'Arduino', 'Sensors', 'Embedded Systems'] },
  {
    title: 'Tools',
    skills: ['MATLAB', 'VS Code', 'Arduino IDE', 'Proteus', 'PyCharm', 'Microchip Studio', 'Synopsys VCS', 'Git', 'GitHub', 'Power BI'],
  },
  { title: 'Other', skills: ['Flask', 'OpenCV'] },
  { title: 'Soft Skills', skills: ['Adaptability', 'Team Management', 'Teamwork', 'Time Management', 'Leadership'] },
];

export const projectFilters = ['All', 'Web Development', 'Python', 'IoT', 'Embedded', 'Digital Design'];

// Add a project by adding one object. Leave github/demo as '' to hide that button.
export const projects = [
  {
    title: 'Web-Based Face Recognition Attendance System',
    type: 'Academic Project',
    categories: ['Web Development', 'Python'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'OpenCV', 'MySQL'],
    features: [
      'Developed a secure face-recognition attendance system using Flask.',
      'Implemented real-time face detection using OpenCV.',
      'Integrated a database for automated attendance storage.',
      'Enabled contactless attendance tracking.',
    ],
    github: 'https://github.com/your-username/face-recognition-attendance',
    demo: '',
  },
  {
    title: 'GoTogether – Carpooling Web Platform',
    type: 'Academic Project',
    categories: ['Web Development'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    features: [
      'Developed a web-based platform for real-time ride sharing and booking.',
      'Implemented backend functionality using PHP and MySQL for user and ride management.',
      'Integrated route optimization to promote fuel-efficient and eco-friendly transportation.',
    ],
    github: 'https://github.com/your-username/gotogether',
    demo: '',
  },
  {
    title: 'Patient Consistence Health Monitoring System using STM32',
    type: 'IoT Project',
    categories: ['IoT', 'Embedded'],
    technologies: ['STM32', 'MAX30100', 'LM35', 'ECG Module', 'Pulse Sensor', 'LCD Display'],
    features: [
      'Built an IoT-based system using STM32 to monitor SpO2, heart rate, temperature and ECG in real time.',
      'Implemented alert mechanisms to notify caregivers upon detecting abnormal health conditions.',
    ],
    github: '',
    demo: '',
  },
  {
    title: 'Binary to Octal, Decimal and Hexadecimal Decoder',
    type: 'Digital Design Project',
    categories: ['Digital Design'],
    technologies: ['Verilog HDL', 'Synopsys VCS'],
    features: [
      'Designed a digital decoder to convert binary inputs into octal, decimal and hexadecimal outputs.',
      'Implemented logic using Verilog HDL and combinational design principles.',
    ],
    github: '',
    demo: '',
  },
  {
    title: 'Smart Medicine Box',
    type: '24-Hour Hackathon Project',
    categories: ['IoT', 'Embedded'],
    technologies: ['Sensors', 'Embedded Systems'],
    features: [
      'Designed and developed a Smart Medicine Box using sensors to monitor temperature and scheduled medication reminders.',
      'Led a 4-member team during a 24-hour hackathon.',
      'Managed task allocation and successful project delivery.',
    ],
    github: '',
    demo: '',
  },
];

export const education = [
  { school: 'Kalasalingam Academy of Research and Education', degree: 'B.Tech in Electronics and Communication Engineering', period: '2022–2026', score: 'CGPA: 7.7' },
  { school: 'SLN Junior College', degree: 'Board of Intermediate Education, Andhra Pradesh', period: '2020–2022', score: '705/1000' },
  { school: 'Zilla Parishad High School', degree: 'SSC, Andhra Pradesh', period: '2019–2020', score: '558/600' },
];

export const achievements = [
  {
    title: 'IEEE Publication / Presentation',
    description: 'Designing of a SoC Bus Bridge IP AXI-Stream to APB Bridge',
    kind: 'Achievement',
  },
  { title: 'Build-A-Bot 24hrs Hackathon', description: 'Conducted by Coding Blocks KARE', kind: 'Hackathon' },
  { title: '24hrs Hackathon', description: 'Conducted by KARE ACM', kind: 'Hackathon' },
  { title: 'CODECRAFT 2024', description: '2-day coding challenge', kind: 'Coding Challenge' },
];

export const certifications = [
  { title: 'Python Programming Certification' },
  { title: 'SQL Certification' },
  { title: 'Data Structures and Algorithms using Python' },
];

// Contact form: paste your Formspree endpoint here (see README) so messages arrive in your inbox.
// Leave '' and the form will open the visitor's email app addressed to you instead.
export const contactForm = {
  endpoint: '',
};
