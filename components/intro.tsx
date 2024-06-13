'use client';

import Image from 'next/image';
import React from 'react';
import profilePic from '/public/portfolio_profile_pic.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id='home'
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.4,
            }}
          >
            <Image
              src={profilePic}
              alt='Ryan profile pic'
              width='192'
              height='192'
              quality='100'
              priority={true}
              className='h-42 w-42 rounded-full object-cover border-[0.25rem] border-gray-600 shadow-xl'
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className='mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Hello, I am Ryan, a
        <span className='font-bold'>
          {' '}
          Web Developer (Working hard to be a Full-Stack Developer){' '}
        </span>
        transiting from Account Management & Business Development role. I really
        enjoy{' '}
        <span className='italic'>
          solving technical problems and learning new technologies
        </span>
        . Currently, my main areas of learn and focus are
        <span className='italic font-bold'>
          {' '}
          React Native, TypeScript, React.js (Next.js), Node.js
          (Express.js), Go, SQL (PostgreSQL), NoSQL (MongoDB), REST API, AWS
        </span>
        .
      </motion.h1>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-3.5 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href='#contact'
          className='group bg-gray-700 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-800 active:scale-105 transition'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a
          className='group bg-gray-200 px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-300 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
          href='/Resume_Jun_2024_Ryan_YU_Ho_Kan.pdf'
          download
        >
          Download CV{' '}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>

        <a
          className='bg-gray-200 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:bg-gray-300 hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://www.linkedin.com/in/ryan-yu-71b3bb14b'
          target='_blank'
          rel='noopener'
          title='Connect me on Linkedin'
        >
          <BsLinkedin />
        </a>

        <a
          className='bg-gray-200 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-300 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://github.com/LetMeSoloRyan'
          target='_blank'
          rel='noopener'
          title='Check my Github'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
