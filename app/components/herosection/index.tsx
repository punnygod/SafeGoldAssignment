// components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';
import InSights from '../InSights';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Get 24K Gold delivered to your doorstep
        </h1>
        <InSights />
      </div>
      <div className={styles.imageContainer}>
        <Image
          src='/products/1gm_packet_front.jpeg'
          alt='Hero Image'
          layout='responsive'
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

export default HeroSection;
