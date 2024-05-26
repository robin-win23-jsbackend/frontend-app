// components/Header.tsx

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.siliconLogo}>
          <Link legacyBehavior href="/">
            <Image src="/images/solid.svg" alt="silicon logo" width={100} height={100} />
          </Link>
        </div>
        <div className={styles.menu}>
          <nav>
            <Link legacyBehavior href="#">
              <a>Overview</a>
            </Link>
            <Link legacyBehavior href="#">
              <a>Features</a>
            </Link>
            <Link legacyBehavior href="/courses">
              <a>Courses</a>
            </Link>
            <Link legacyBehavior href="contact">
              <a>Contact</a>
            </Link>
          </nav>
        </div>
        <Link legacyBehavior href="/account">
          <a id="profilepic">
            <Image src="/images/profilepic.svg" alt="profile picture" width={50} height={50} />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
