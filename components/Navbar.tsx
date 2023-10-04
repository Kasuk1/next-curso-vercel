import Link from 'next/link';
import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink';

const menuItems: { text: string; href: string }[] = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
  {
    text: 'Pricing',
    href: '/pricing',
  },
];

export const Navbar = () => {
  return (
    <nav className={styles.menuContainer}>
      {menuItems.map(({ href, text }) => (
        <ActiveLink key={href} href={href} text={text} />
      ))}
    </nav>
  );
};
