'use client';

import styles from './Experience.module.scss';

const experiences = [
  {
    title: 'Web Development Intern',
    company: 'UC Davis College of Biological Sciences',
    date: 'May 2024 – Present',
    description: 'Developed and deployed 15+ custom websites using SiteFarm for principal investigators and academic units, ensuring accessibility (WCAG 2.1), compliance, and a seamless user experience.',
  },
  {
    title: 'Technical Director',
    company: 'HackDavis',
    date: 'Jan 2024 – Present',
    description: 'Led development of HackerHub, live website, and judging app used by 1,000+ participants. Ensured system stability and built judge assignment logic.',
  },
  {
    title: 'Intern',
    company: 'California School Information Services (CSIS)',
    date: 'July 2024 – Aug 2024',
    description: 'Shadowed an Agile team throughout an entire sprint cycle, gaining first hand experience in sprint planning, daily stand-ups, backlog grooming, and sprint retrospectives.',
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
