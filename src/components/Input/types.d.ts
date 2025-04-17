import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

export interface InputProps {
  containerClassName?: string;
  className?: string;
  label: string;
  placeholder?: string;
  id: string;
  type?: HTMLInputTypeAttribute;
  icon?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
