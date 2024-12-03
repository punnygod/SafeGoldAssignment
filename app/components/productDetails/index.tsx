import React, { useState } from 'react';
import styles from './productdetails.module.css';
import Image from 'next/image';
import FAQ from '../faq';
import Review from '../review';

export type FAQData = {
  question: string;
  answer: string;
};

export type ReviewData = {
  username: string;
  rating: number;
  comment: string;
  date: string;
};

type ProductDetailsProps = {
  image: string;
  title: string;
  rating: number;
  mintingCharges: number;
  description: string[];
  faqs: FAQData[];
  reviews: ReviewData[];
};

const ProductDetails: React.FC<ProductDetailsProps> = ({
  image,
  title,
  rating,
  mintingCharges,
  description,
  faqs,
  reviews,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.left}>
          <Image
            src={image}
            alt={title}
            className={styles.image}
            width={300}
            height={300}
          />
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.rating}>⭐ {rating.toFixed(1)} / 5</div>
          <p className={styles.mintingCharges}>
            Minting Charges: ₹{mintingCharges.toLocaleString()}
          </p>

          <button className={styles.buyNowButton}>Buy Now</button>
          <div className={styles.description}>
            <h3>Product Description</h3>
            <ul>
              {description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.extraDetails}>
        <div className={styles.reviews}>
          <h3>User Reviews</h3>
          {reviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </div>
        <div className={styles.faq}>
          <h3>FAQ</h3>
          <FAQ faqs={faqs} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
