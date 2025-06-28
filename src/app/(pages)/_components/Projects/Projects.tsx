'use client';

import { useState } from 'react';
import { FaThumbtack, FaGithub } from 'react-icons/fa';
import styles from './Projects.module.scss';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  pinned?: boolean;
  image?: string;
  github?: string;
  tags?: string[];
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, title: 'HackDavis 2025 Judging App', pinned: true, image: '/Images/JudgingApp.png', github: 'https://github.com/HackDavis/website-2025'},
    { id: 2, title: 'HackDavis Live Website 2025', image: '/Images/HD2025.png', github: 'https://github.com/HackDavis/hackdavis-hub' },
    { id: 3, title: 'HackDavis HackerHub 2025', image: '/Images/HackerHub.png', github: 'https://github.com/HackDavis/hackdavis-hub', tags: ['React', 'Next.js', 'TypeScript'] },
    { id: 4, title: '#include Technical Cohort Website', image: '/Images/IncludeClient.png', github: 'https://cohort.includedavis.com/', tags: ['React', 'Next.js'] },
    { id: 5, title: 'Japanese American Student Society Website', image: '/Images/JASS.png', github: 'https://jassucd.vercel.app/', tags: ['React', 'Next.js'] },
    { id: 6, title: "Fourth & Hope", image: '/Images/Fourth&Hope.png', github: 'https://github.com/include-davis/fourth-and-hope', tags: ['Team Lead', 'React', 'Next.js'] },
    { id: 7, title: "Moo'd: Self-care Mobile App", image: '/Images/Mood.png', github: 'https://www.figma.com/design/PwRuol3009NMM2U6sWMUBp/Moo-d?node-id=374-77&t=VmtqILimRYfs2C3A-1', tags: ['Figma', 'Project Management'] },
    { id: 8, title: 'SafeHER', image: '/Images/SafeHER.png', github: 'https://www.figma.com/design/fHArbkxShBoozuhpZNZVUK/safeHER?node-id=559-1397&t=XDA6UKb7pQBB2fXQ-1', tags: ['AI Rant Bot', 'OAuth'] },
  ]);

  const togglePin = (id: number) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, pinned: !p.pinned } : p))
    );
  };

  const featured = projects.slice(0, 2);
  const others = projects.slice(2);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Projects.</h2>

      {/* Featured Projects */}
      <div className={styles.featuredGrid}>
        {featured.map((project) => (
          <div
            key={project.id}
            className={`${styles.featuredCard} ${project.pinned ? styles.pinned : ''}`}
          >
            <div className={styles.featuredImageWrapper}>
              <Image
                src={project.image ?? '/images/fallback.jpg'}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                className={styles.featuredImage}
              />
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.overlay}
                >
                  <FaGithub className={styles.githubIcon} />
                </a>
              )}
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.label}>Featured</span>
              <button onClick={() => togglePin(project.id)} className={styles.pinButton}>
                <FaThumbtack />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Scrollable Grid */}
      <div className={styles.gridScroll}>
        {others.map((project) => (
          <div key={project.id} className={styles.gridItem}>
            <div
              className={styles.projectPreview}
              style={{ backgroundImage: `url(${project.image})` }}
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.overlay}
                >
                  <FaGithub className={styles.githubIcon} />
                </a>
              )}
            </div>
            <div className={styles.projectMeta}>
              <div className={styles.title}>{project.title}</div>
              <div className={styles.tags}>
                {project.tags?.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
