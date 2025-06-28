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
    { id: 1, title: 'Featured Project A', pinned: true, image: '/Images/JudgingApp.png', github: 'https://github.com/HackDavis/hackdavis-hub'},
    { id: 2, title: 'Featured Project B', image: '/Images/HD2025.png', github: 'https://github.com/HackDavis/hackdavis-hub' },
    { id: 3, title: 'Mini Project 1', image: '/Images/JudgingApp.png', github: 'https://github.com/HackDavis/hackdavis-hub', tags: ['React', 'Next.js'] },
    { id: 4, title: 'Mini Project 2', image: '/Images/JudgingApp.png', github: 'https://github.com/HackDavis/hackdavis-hub', tags: ['React', 'Next.js'] },
    { id: 5, title: 'Mini Project 3', image: '/Images/JudgingApp.png', github: 'https://github.com/HackDavis/hackdavis-hub', tags: ['React', 'Next.js'] },
    { id: 6, title: 'Mini Project 4', image: '/Images/JudgingApp.png', github: 'https://github.com/HackDavis/hackdavis-hub', tags: ['React', 'Next.js'] },
    { id: 7, title: 'Mini Project 5', image: '/Images/JudgingApp.png', github: 'https://github.com/HackDavis/hackdavis-hub', tags: ['React', 'Next.js'] },
    { id: 8, title: 'Mini Project 6', image: '/Images/JudgingApp.png', github: 'https://github.com/HackDavis/hackdavis-hub', tags: ['React', 'Next.js'] },
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
