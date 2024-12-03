import React, { useState } from 'react';
import styles from './loginsignup.module.css';
import Image from 'next/image';
import Button from '../button';

type LoginSignupModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LoginSignupModal: React.FC<LoginSignupModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<'login' | 'otp'>('login');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [resendTimer, setResendTimer] = useState<number>(30); // 30-second timer

  const handleProceed = () => {
    if (phoneNumber.length === 10) {
      setStep('otp');
      startResendTimer();
    } else {
      alert('Please enter a valid 10-digit phone number.');
    }
  };

  const handleVerify = () => {
    if (otp.length === 6) {
      document.cookie = 'token=xyz; path=/; max-age=3600; secure';
      onClose();
    } else {
      alert('Please enter a valid 6-digit OTP.');
    }
  };

  const startResendTimer = () => {
    setResendTimer(30);
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleResendOtp = () => {
    if (resendTimer === 0) {
      alert('Resending OTP...');
      startResendTimer();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <Image src='/close.png' alt='Close Icon' width={15} height={15} />
        </button>
        {step === 'login' ? (
          <>
            <h2 className={styles.title}>Login / Sign Up</h2>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type='radio'
                  value='customer'
                  checked={true}
                  className={styles.radioInput}
                />
                <span className={`${styles.radioCircle} ${styles.filled}`} />{' '}
                Customer
              </label>
              <label className={styles.radioLabel}>
                <input
                  type='radio'
                  value='partner'
                  checked={false}
                  className={styles.radioInput}
                />
                <span className={`${styles.radioCircle} ${styles.unfilled}`} />{' '}
                Partner
              </label>
            </div>
            <div className={styles.inputGroup}>
              <input
                id='phone'
                type='tel'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder='Enter mobile number'
                className={styles.input}
                maxLength={10}
              />
            </div>
            <Button
              backgroundColor='#31bcbc'
              textColor='#ffffff'
              text='Proceed'
              disabled={phoneNumber.length !== 10}
              onClick={handleProceed}
            />
            <p className={styles.termsText}>
              By proceeding, you agree to our{' '}
              <a href='/terms'>Terms & Conditions</a>.
            </p>
          </>
        ) : (
          <>
            <h2 className={styles.title}>Verify OTP</h2>
            <div className={styles.inputGroup}>
              <label htmlFor='otp' className={styles.label}>
                Verify Mobile Number{' '}
                <span className={styles.number}>{phoneNumber}</span>{' '}
                <span
                  className={styles.changeButton}
                  onClick={() => setStep('login')}
                >
                  Change
                </span>
              </label>
              <input
                id='otp'
                type='text'
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder='Enter OTP'
                className={styles.input}
                maxLength={6}
              />
            </div>
            <Button
              backgroundColor='#31bcbc'
              textColor='#ffffff'
              text='Verify'
              disabled={otp.length !== 6}
              onClick={handleVerify}
            />
            <p className={styles.resendText}>
              Didn't receive OTP?{' '}
              {resendTimer > 0 ? (
                <span>Resend in {resendTimer}s</span>
              ) : (
                <button
                  className={styles.resendButton}
                  onClick={handleResendOtp}
                >
                  Resend
                </button>
              )}
            </p>
            <p className={styles.bottomText}>Send OTP over registered email</p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignupModal;
