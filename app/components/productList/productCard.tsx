import React from 'react';
import Image from 'next/image';
import styles from './productCard.module.css';
import Button from '../button';

type ProductCardProps = {
  id: number;
  image: string;
  title: string;
  discountedPrice?: number;
  originalPrice: number;
  discount?: number;
  offerTag?: string;
  onProductClick: (id: number) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  discountedPrice,
  originalPrice,
  discount,
  offerTag,
  onProductClick,
}) => {
  return (
    <div className={styles.card}>
      {offerTag && <div className={styles.offerTag}>{offerTag}</div>}
      <div>
        <div className={styles.imageContainer}>
          <Image src={image} alt={title} width={200} height={200} />
        </div>

        <h2 className={styles.title}>{title}</h2>
        <div className={styles.price}>
          <span className={styles.discountedPrice}>
            ₹{discount ? discountedPrice : originalPrice}
          </span>
        </div>
        {discount && discountedPrice && (
          <div className={styles.price}>
            <span className={styles.originalPrice}>₹{originalPrice}</span>
            <span className={styles.discountedPrice}>
              <i>Save ₹{originalPrice - discountedPrice}</i>
            </span>
          </div>
        )}
      </div>
      <div className={styles.buttonContainer}>
        <Button
          backgroundColor='#31bcbc'
          textColor='#ffffff'
          text='View Details'
          onClick={() => onProductClick(id)}
        />
      </div>
    </div>
  );
};

export default ProductCard;
