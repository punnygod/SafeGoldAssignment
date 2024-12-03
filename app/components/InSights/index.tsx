import React from 'react';
import Image from 'next/image';
import styles from './insights.module.css';

const insights = [
  {
    image: '/insights/certificate.png',
    text: '24k Pure Gold Quality Guaranteed',
    alt: 'certificate',
  },
  {
    image: '/insights/truck.png',
    text: '100% Secure with Delivery Insurance',
    alt: 'truck',
  },
  {
    image: '/insights/price-tag.png',
    text: 'Best prices in market',
    alt: 'best price',
  },
];
const InSights = () => {
  return (
    <div className={styles.insights}>
      {insights.map((insight,index) => (
        <div key={index} className={styles.insight}>
          <Image src={insight.image} alt={insight.alt} width={50} height={50} />
          <p>{insight.text}</p>
        </div>
      ))}
    </div>
  );
};

export default InSights;
