import React from 'react';
import ProductCard from './productCard';
import styles from './productList.module.css';
import { FAQData, ReviewData } from '../productDetails';

type Product = {
  id: number;
  image: string;
  title: string;
  description: string[];
  discountedPrice: number;
  originalPrice: number;
  discount?: number;
  offerTag?: string;
  rating: number;
  mintingCharges: number;
  faqs: FAQData[];
  reviews: ReviewData[];
};

export const products: Product[] = [
  {
    id: 1,
    image: '/products/1gm_front.jpeg',
    title: '1 gm SafeGold Coin (99.99%)',
    description: ['This is testing description'],
    discountedPrice: 800,
    originalPrice: 1000,
    discount: 20,

    offerTag: 'Akshay Tritya Offer',
    faqs: [
      {
        question: 'How am I?',
        answer: 'I am good',
      },
    ],
    reviews: [
      {
        username: 'Siddhesh Chavan',
        rating: 4,
        comment: 'nice',
        date: '3-12-24',
      },
    ],
    rating: 3,
    mintingCharges: 300,
  },
  {
    id: 2,
    image: '/products/5gm_coin_999_front.jpeg',
    description: ['This is testing description'],
    title: '5 gm coin ',
    discountedPrice: 1200,
    originalPrice: 1500,
    discount: 20,
    offerTag: 'Akshay Tritya Offer',
    faqs: [
      {
        question: 'How am I?',
        answer: 'I am good',
      },
    ],
    reviews: [
      {
        username: 'Siddhesh Chavan',
        rating: 4,
        comment: 'nice',
        date: '3-12-24',
      },
    ],
    rating: 3,
    mintingCharges: 300,
  },
  {
    id: 3,
    image: '/products/10gm_bar_9999_front.jpeg',
    description: ['This is testing description'],
    title: '10 gm bar (99.99%)',
    discountedPrice: 750,
    originalPrice: 750,
    faqs: [
      {
        question: 'How am I?',
        answer: 'I am good',
      },
    ],
    reviews: [
      {
        username: 'Siddhesh Chavan',
        rating: 4,
        comment: 'nice',
        date: '3-12-24',
      },
    ],
    rating: 3,
    mintingCharges: 300,
  },
  {
    id: 4,
    image: '/products/5gm_coin_999_front.jpeg',
    description: ['This is testing description'],
    title: '5 gm coin ',
    discountedPrice: 1200,
    originalPrice: 1500,
    discount: 20,
    offerTag: 'Akshay Tritya Offer',
    faqs: [
      {
        question: 'How am I?',
        answer: 'I am good',
      },
    ],
    reviews: [
      {
        username: 'Siddhesh Chavan',
        rating: 4,
        comment: 'nice',
        date: '3-12-24',
      },
    ],
    rating: 3,
    mintingCharges: 300,
  },
  {
    id: 5,
    image: '/products/5gm_coin_999_front.jpeg',
    description: ['This is testing description'],
    title: '5 gm coin ',
    discountedPrice: 1200,
    originalPrice: 1500,
    discount: 20,
    offerTag: 'Akshay Tritya Offer',
    faqs: [
      {
        question: 'How am I?',
        answer: 'I am good',
      },
    ],
    reviews: [
      {
        username: 'Siddhesh Chavan',
        rating: 4,
        comment: 'nice',
        date: '3-12-24',
      },
    ],
    rating: 3,
    mintingCharges: 300,
  },
  {
    id: 6,
    image: '/products/5gm_coin_999_front.jpeg',
    description: ['This is testing description'],
    title: '5 gm coin ',
    discountedPrice: 1200,
    originalPrice: 1500,
    discount: 20,
    offerTag: 'Akshay Tritya Offer',
    faqs: [
      {
        question: 'How am I?',
        answer: 'I am good',
      },
    ],
    reviews: [
      {
        username: 'Siddhesh Chavan',
        rating: 4,
        comment: 'nice',
        date: '3-12-24',
      },
    ],
    rating: 3,
    mintingCharges: 300,
  },
];

interface ProductListProps {
  onProductClick: (id:number) => void;
}
const ProductList: React.FC<ProductListProps> = ({ onProductClick }) => {
  return (
    <section className={styles.productListContainer}>
      <div className={styles.header}>
        <h1>All Products</h1>
      </div>
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onProductClick={onProductClick}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
