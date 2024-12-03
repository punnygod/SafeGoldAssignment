import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import Button from '../button';

interface HeaderProps {
  onLoginClick: () => void;
  isLoggedIn: boolean;
  onLogoutClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onLoginClick,
  isLoggedIn,
  onLogoutClick,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src='/logo.svg' alt='Logo' width={100} height={100} priority />
        </div>

        <nav className={styles.nav}>
          <Link href='/jewellery-exchange'>
            <span className={styles.navItem}>Jewellery Exchange</span>
          </Link>
          <Link href='/for-customers'>
            <span className={styles.navItem}>For Customers</span>
          </Link>
          <Link href='/buy-coins'>
            <span className={styles.navItem}>Buy Coins</span>
          </Link>
          <Link href='/lease'>
            <span className={styles.navItem}>Lease</span>
          </Link>
          <Link href='/partner-with-us'>
            <span className={styles.navItem}>Partner with Us</span>
          </Link>
          <Link href='/about-us'>
            <span className={styles.navItem}>About Us</span>
          </Link>
        </nav>

        <div>
          <Button
            backgroundColor='#31bcbc'
            textColor='#ffffff'
            text={isLoggedIn ? 'Logout' : 'Login/Signup'}
            onClick={isLoggedIn ? onLogoutClick : onLoginClick}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
