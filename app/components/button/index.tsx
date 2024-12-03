import React from 'react';
import styles from './button.module.css';

interface ButtonProps {
  backgroundColor: string;
  textColor: string;
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  textColor,
  text,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={styles.button}
      style={{
        backgroundColor: disabled ? '#d3d3d3' : backgroundColor,
        color: textColor,
      }}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
