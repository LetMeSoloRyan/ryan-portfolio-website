import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import portfolioSiteImg from '@/public/portfolioSiteImg.jpeg';
import comingSoon from '@/public/comingSoon.png';
import restAPI from '@/public/restAPI.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Continuing self-learn',
    location: 'EDX, Coursera, Udemy, Youtube, etc.',
    description:
      'Courses cover programming languages, frameworks, data structure, algorithm, etc.',
    icon: React.createElement(LuGraduationCap),
    date: 'On-going',
  },
  {
    title: 'Graduated Frontend Web Developer Program',
    location: 'CLAP@HKJC x Generation Hong Kong',
    description:
      'Skills acquired: Git, GitHub, HTML, CSS, Bootstrap, JavaScript, ReactJS',
    icon: React.createElement(LuGraduationCap),
    date: 'Aug 2023 - Oct 2023',
  },
  {
    title: 'Recruitment Consultant',
    location: 'Manpower Services (Hong Kong) Limited',
    description:
      'End-to-end recruitment service focus in IT-related permenant roles',
    icon: React.createElement(CgWorkAlt),
    date: 'Feb 2022 - Aug 2023',
  },
  {
    title: 'Business Development Executive',
    location: 'Datawords Hong Kong Limited',
    description:
      'Account Management in digital solutions in French-based agency',
    icon: React.createElement(CgWorkAlt),
    date: 'Sept 2021 - Feb 2022',
  },
  {
    title: 'Business Development Executive',
    location: 'QvQ Studio Limited',
    description:
      'Business Development for a start-up gaming & IT solutions studio',
    icon: React.createElement(CgWorkAlt),
    date: 'Jun 2020 - Sept 2021',
  },
  {
    title: 'Account Manager',
    location: 'Hilti (Hong Kong) Limited',
    description:
      'Account Management and Sales Development of building services products and solutions',
    icon: React.createElement(CgWorkAlt),
    date: 'Sept 2018 - Mar 2020',
  },
  {
    title: 'Bachelor of Social Science',
    location: 'City University of Hong Kong',
    description:
      'Majored in Public Policy & Politics with Public Management stream',
    icon: React.createElement(LuGraduationCap),
    date: 'Jul 2018',
  },
] as const;

export const projectsData = [
  {
    title: 'This Portofolio Website',
    description:
      'This is my personal portfolio site. I wish you enjoy browsering it. You can find my profile and all my work demo in here.',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    imageUrl: portfolioSiteImg,
  },
  {
    title: 'REST API for User Information',
    description:
      'A RESTFUL API for user information with MongoDB, source code can be found on my GitHub',
    tags: ['Node.js', 'Express.js', 'TypeScript', 'MongoDB', 'Authentication'],
    imageUrl: restAPI,
  },
  {
    title: 'Car Renting Web Ecommerce Application (Incompleted)',
    description: 'An Ecommerce site for car renting with MongoDB for car data',
    tags: ['React.js', 'Next.js', 'TypeScript', 'MongoDB', 'Tailwind'],
    imageUrl: comingSoon,
  },
  {
    title: 'Full-stack Threads Clone (Incompleted',
    description:
      'Cloning of the Threads@Facebook application, it will be a full stack app',
    tags: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Tailwind',
      'Zod',
    ],
    imageUrl: comingSoon,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Node.js',
  'Express.js',
  'Go',
  'MongoDB',
  'Git',
  'Tailwind CSS',
  'Material UI',
  'Framer Motion',
] as const;
