'use client';
import styles from './page.module.css';
import Header from './components/header';
import HeroSection from './components/herosection';
import ProductList from './components/productList';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginSignupModal from './components/loginSignup';

export default function Home() {
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (!showLogin) {
      const token = getCookieValue('token');
      if (token) {
        setIsLoggedIn(true);
      }
    }
  }, [showLogin]);
  const onOpen = () => {
    setShowLogin(true);
  };
  const onClose = () => {
    setShowLogin(false);
  };
  const deleteCookie = (name: string) => {
    document.cookie =
      name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  };
  const getCookieValue = (name: string) =>
    document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '';
  const onProductClick = (id: number) => {
    if (getCookieValue('token')) {
      router.push(`/product-details/${id}`);
    } else {
      onOpen();
    }
  };
  const onLogoutClick = () => {
    deleteCookie('token');
    setIsLoggedIn(false);
  };
  return (
    <div className={styles.page}>
      {showLogin && <LoginSignupModal isOpen={showLogin} onClose={onClose} />}
      <Header
        onLoginClick={onOpen}
        isLoggedIn={isLoggedIn}
        onLogoutClick={onLogoutClick}
      />
      <HeroSection />
      <ProductList onProductClick={onProductClick} />
    </div>
  );
}
