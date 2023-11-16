'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section
      ref={ref}
      id='projects'
      className='scroll-mt-28 mb-28 text-center'
    >
      <SectionHeading>My projects</SectionHeading>
      <p className='text-gray-700 dark:text-white/80 mb-[1.5rem] -mt-[1.5rem]'>
        Source code also on my GitHub
      </p>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
