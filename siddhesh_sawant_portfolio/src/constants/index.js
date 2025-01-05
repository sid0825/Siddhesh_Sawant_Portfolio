export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

// export const clientReviews = [
//   {
//     id: 1,
//     name: 'Emily Johnson',
//     position: 'Marketing Director at GreenLeaf',
//     img: 'assets/review1.png',
//     review:
//       'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
//   },
//   {
//     id: 2,
//     name: 'Mark Rogers',
//     position: 'Founder of TechGear Shop',
//     img: 'assets/review2.png',
//     review:
//       'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
//   },
//   {
//     id: 3,
//     name: 'John Dohsas',
//     position: 'Project Manager at UrbanTech ',
//     img: 'assets/review3.png',
//     review:
//       'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
//   },
//   {
//     id: 4,
//     name: 'Ether Smith',
//     position: 'CEO of BrightStar Enterprises',
//     img: 'assets/review4.png',
//     review:
//       'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
//   },
// ];

export const myProjects = [
  {
    title: 'StudentHUB - House Management System for University',
    desc: 'Collaborated on developing a house management system for 1,000+ dormitory students, integrating services like dormitory management, nutrition, healthcare, and fitness into a centralized, role-based platform. Enhanced efficiency by 30% and student engagement by 40% through features like event scheduling and nutritional management. Automated email notifications, enabling 500+ monthly health sessions with 95% user satisfaction. Reduced bugs by 20% using Git and rigorous code reviews.',
    subdesc:
      'Built with Java, Swing, DB4O.',
    href: 'https://github.com/sid0825/Final_Project_AED',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Java',
        path: '/assets/java.png',
      },
      {
        id: 2,
        name: 'DB4O',
        path: 'assets/db4o.png',
      },
    ],
  },
  {
    title: 'StudentNexus - Student Accommodation Website',
    desc: 'Collaborated on developing a house management system for 1,000+ dormitory students, integrating services like dormitory management, nutrition, healthcare, and fitness into a centralized, role-based platform. Enhanced efficiency by 30% and student engagement by 40% through features like event scheduling and nutritional management. Automated email notifications, enabling 500+ monthly health sessions with 95% user satisfaction. Reduced bugs by 20% using Git and rigorous code reviews.',
    subdesc:
      'Built with JavaScript, React, Node.JS, Express.JS, Material UI, MongoDB',
    href: 'https://github.com/info-6150-fall-2024/final-project-thecoderangers',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 2,
        name: 'React.js',
        path: 'assets/react.svg',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Node.js',
        path: '/assets/nodejs.png',
      },
      {
        id: 5,
        name: 'Mongodb',
        path: '/assets/mongodb.jpeg',
      },
    ],
  },
  {
    title: 'Patient Health Monitoring System Using NODE -MCU',
    desc: 'This project leverages wireless sensor networks to monitor elderly patients, providing real-time health data to doctors and loved ones. It aims to reduce emergency response times and improve patient care by tracking vital signs and sending alerts during critical situations.',
    subdesc:
      'Utilized a Temperature Sensor and Heartbeat Sensor with an Arduino UNO to monitor patient health. Automatically sends critical health updates via the internet in case of abnormal readings or emergencies.',
    href: 'https://drive.google.com/drive/u/0/folders/1J5-gut0Mk9E_PAGpiqOUPOAVzrhh9LY1',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Tata Consultancy Services',
    pos: 'System Engineer',
    duration: '2023 - 2024',
    title: "Led design and development of a secure RESTful API for LOS Login Authorization, achieving 100% parameter verification with CBS and enhancing security by 30%. Implemented AES, RSA, and SHA-256 for encryption and digital signatures, reducing errors by 20% and securing 10,000 monthly transactions. Authored technical documentation on Java cryptography, improving team onboarding efficiency by 15%.",
    icon: '/assets/tcs.png',
    animation: 'salute',
  },
  {
    id: 2,
    name: 'Tata Consultancy Services',
    pos: 'Assistant System Engineer',
    duration: '2021 - 2022',
    title: "Managed the design and development of the Loan Origination System (LOS-AGRI) web application, reducing loan processing time by 25% and developing over 10 new screens for user interaction. Produced and maintained detailed project documentation, including module descriptions, flowcharts, improving team efficiency and reducing onboarding time by 20%.",
    icon: '/assets/tcs.png',
    animation: 'clapping',
  },
];
