import { CSSProperties, MouseEventHandler } from 'react';

export interface ButtonProps {
  type?: 'link';
  isLoading?: boolean;
  isDisabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  children?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger';
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isBlock?: boolean;
  rightIcon?: string;
  style?: CSSProperties;
}
