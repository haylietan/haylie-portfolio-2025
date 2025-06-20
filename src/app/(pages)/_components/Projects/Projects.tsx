'use client';

import { useState } from 'react';
import { FaThumbtack } from 'react-icons/fa';
import styles from './Projects.module.scss';

type Project = {
  id: number;
  title: string;
  pinned?: boolean;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, title: 'Featured Project A', pinned: true },
    { id: 2, title: 'Featured Project B' },
    { id: 3, title: 'Mini Project 1' },
    { id: 4, title: 'Mini Project 2' },
    { id: 5, title: 'Mini Project 3' },
    { id: 6, title: 'Mini Project 4' },
    { id: 7, title: 'Mini Project 5' },
    { id: 8, title: 'Mini Project 6' }
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
          <div key={project.id} className={`${styles.featuredCard} ${project.pinned ? styles.pinned : ''}`}>
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
            <div className={styles.projectPreview}></div>
            <div className={styles.projectMeta}>
              <div className={styles.title}></div>
              <div className={styles.tags}>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
