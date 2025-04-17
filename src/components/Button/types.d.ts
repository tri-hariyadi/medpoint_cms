import { MouseEventHandler } from 'react';

export interface ButtonProps {
  type?: 'link';
  isLoading?: boolean;
  children?: string;
  className?: string;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isDanger?: boolean;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isBlock?: boolean;
  rightIcon?: string;
}
