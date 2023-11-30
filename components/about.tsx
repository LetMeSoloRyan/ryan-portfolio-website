'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb3'>
        I am a degree holder in Social Science from City University of Hong
        Kong, and have more than 4 years of full-time experience in{' '}
        <span className='font-bold'>
          Account Management & Business Development
        </span>
        . However, I decided to pursue my passion for programming and career of{' '}
        <span className='font-bold'>Software Engineer</span>. In 2023, I started
        a couple of{' '}
        <span className='font-bold'>
          self-learning courses in EDX, Coursera, Udemy & Youtube
        </span>{' '}
        at first. And I have recently graduated from a{' '}
        <span className='font-bold'>Frontend Developer Program</span> held by{' '}
        <span className='italic font-bold'>Generation HK & HKJC</span> (finished
        on Oct 2023). I really enjoy to be a software engineer, I believe{' '}
        <span className='italic'>
          solving technical problem and continuously learning new knowledge are
          my greatest interests
        </span>
        .
      </p>
      <p>
        By now my core stacks are{' '}
        <span className='font-bold'>JavaScript, React.js (Next.js), Go</span>. I
        am also getting familiar by self-learning and making demo with{' '}
        <span className='font-bold'>
          TypeScript, Redux, Node.js (Express.js), SQL (PostgreSQL), NoSQL
          (MongoDB), REST API, AWS
        </span>
        , I am currently looking for a{' '}
        <span className='font-bold'>
          full-time position as a web/software developer
        </span>
        .
      </p>
    </motion.section>
  );
}
