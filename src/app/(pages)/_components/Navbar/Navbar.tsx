'use client';

import styles from './Navbar.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  // const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={styles.container}>
      <div className={styles.navdiv}>
        {/* <button onClick={() => setIsOpen(!isOpen)}>☰</button> */}
        {/* <ul style={{ display: isOpen ? 'block' : 'none' }}> */}
        <ul>
          {navItems.map(({ name, href }) => (
            <li key={href}>
              <Link href={href}>
                {pathname === href ? <strong>{name}</strong> : name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
