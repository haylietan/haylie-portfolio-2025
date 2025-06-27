'use client';

import styles from './Experience.module.scss';

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'Greenhouse.io',
    date: 'Jun 2025 – Aug 2025',
    description: 'Worked on internal dashboard improvements and scalable React components for recruiter workflows.',
  },
  {
    title: 'Web Development Intern',
    company: 'UC Davis College of Biological Sciences',
    date: 'May 2024 – Present',
    description: 'Built and maintained lab websites using SiteFarm CMS. Collaborated with PIs and engineers to meet deadlines and ensure accessibility.',
  },
  {
    title: 'Technical Director',
    company: 'HackDavis 2025',
    date: 'Jan 2024 – Apr 2025',
    description: 'Led development of HackerHub and judging platforms used by 1,000+ participants. Ensured system stability and built judge assignment logic.',
  },
];

export default function Experience() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.dot}></div>
            <div className={styles.content}>
              <h3>{exp.title}</h3>
              <p className={styles.company}>{exp.company}</p>
              <span className={styles.date}>{exp.date}</span>
              <p className={styles.description}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
