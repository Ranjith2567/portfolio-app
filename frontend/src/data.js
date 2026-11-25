// All portfolio content lives here, taken from the CV. Edit this file to update the site.

export const profile = {
  name: 'Senthamizhselvi J',
  title: 'Java Full Stack Developer',
  tagline: 'Associate Software Engineer with 2+ years of experience at Mphasis, building Java, Spring Boot and MySQL applications.',
  email: 'senthamizhselvi12112000@gmail.com',
  phone: '+91 89257 38098',
  phoneHref: 'tel:+918925738098',
  location: 'India',
  linkedin: 'https://www.linkedin.com/in/senthamizhselvi1211',
  github: 'https://github.com/Senthamizhselvij',
  resume: '/Senthamizhselvi-J-Resume.pdf',
  resumeFile: 'Senthamizhselvi-J-Resume.pdf',
};

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export const summary = [
  'I am a Java full stack developer with 2+ years of experience as an Associate Software Engineer at Mphasis, where I worked on a Life Insurance Management System using Java, Spring Boot, REST APIs and MySQL.',
  'Beyond my day job, I have built web applications with React, Node.js, Express.js and PHP. My day-to-day work covers backend development, CRUD operations, database integration and application maintenance. I am familiar with microservices concepts and focus on writing reliable, maintainable code.',
];

export const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Tamil', level: 'Native' },
  { name: 'Telugu', level: 'Intermediate' },
  { name: 'Hindi', level: 'Beginner' },
];

// Primary career skills, highlighted first
export const primarySkills = [
  {
    name: 'Java',
    desc: 'Core language for my professional work: OOP, Collections and JDBC.',
    related: ['OOP', 'Collections', 'JDBC'],
  },
  {
    name: 'Spring Boot',
    desc: 'REST APIs and backend services with Spring Data JPA and Hibernate.',
    related: ['REST APIs', 'Spring Data JPA', 'Hibernate'],
  },
];

export const skillGroups = [
  { title: 'Programming', items: ['Java', 'JavaScript', 'PHP', 'SQL'], primary: ['Java'] },
  {
    title: 'Backend',
    items: ['Spring Boot', 'Spring Data JPA', 'Hibernate', 'JDBC', 'Node.js', 'Express.js', 'REST APIs'],
    primary: ['Spring Boot'],
  },
  { title: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Bootstrap'] },
  { title: 'Database & Tools', items: ['MySQL', 'Git', 'GitHub', 'Eclipse', 'Spring Tool Suite', 'VS Code'] },
  {
    title: 'Concepts',
    items: ['OOP', 'MVC Architecture', 'CRUD Operations', 'Microservices Fundamentals'],
  },
];

export const experience = {
  role: 'Associate Software Engineer',
  company: 'Mphasis Pvt. Ltd.',
  period: 'Jun 2022 – Aug 2024',
  project: 'Life Insurance Management System',
  points: [
    'Developed and maintained a Life Insurance Management System using Java, Spring Boot, RESTful APIs and MySQL.',
    'Built backend components to manage insurance policies, customer information and policy-related business operations.',
    'Developed REST APIs for communication between application layers and implemented CRUD operations using MySQL, JDBC, Spring Data JPA and Hibernate.',
    'Applied object-oriented programming and MVC principles; performed debugging, testing, troubleshooting and application maintenance.',
  ],
  tech: ['Java', 'Spring Boot', 'REST APIs', 'Spring Data JPA', 'Hibernate', 'JDBC', 'MySQL'],
};

const PRIMARY = ['Java', 'Spring Boot'];
export const isPrimary = (tech) => PRIMARY.includes(tech);

export const projects = [
  {
    title: 'Life Insurance Management System',
    tag: 'Built at Mphasis',
    desc: 'Contributed to policy and customer data management through backend services, REST APIs and database operations.',
    points: [
      'Backend services for insurance policies and customer information',
      'REST APIs with CRUD operations on MySQL',
    ],
    tech: ['Java', 'Spring Boot', 'REST APIs', 'Spring Data JPA', 'Hibernate', 'MySQL'],
  },
  {
    title: 'Clinic Reception Management Website',
    desc: 'A clinic reception application to manage patient registration, department and treatment selection, and receipt generation.',
    points: [
      'Patient search, doctor attendance and report-related workflows',
      'Frontend-to-backend API integration',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
  },
  {
    title: 'Pathology Lab & Inventory Management System',
    desc: 'A web-based pathology lab application to manage patient details, test selection, test results and report workflows.',
    points: [
      'Laboratory stock tracking with stock-in / stock-out transactions',
      'Manual purchases and test-wise inventory usage',
    ],
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Bus Ticket Reservation System',
    desc: 'A reservation application to book tickets, manage reservations and store passenger details.',
    points: ['Core Java with Collections', 'Stores passenger details using JDBC and MySQL'],
    tech: ['Java', 'Collections', 'JDBC', 'MySQL'],
  },
];

export const education = {
  degree: 'B.Tech, Electrical and Electronics Engineering (EEE)',
  school: 'SRM Institute of Science and Technology, Chennai',
  year: '2022',
  cgpa: '8.8',
};

export const certifications = [
  { name: 'Java Full Stack Program', issuer: 'Besant Technologies' },
  { name: 'MERN', issuer: 'Novi Tech R&D Pvt. Ltd.' },
  { name: 'AI Course', issuer: 'Novi Tech R&D Pvt. Ltd.' },
];
