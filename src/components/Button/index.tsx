import { Link } from 'react-router';

import { ButtonProps } from './types';

const Button = ({
  className,
  type,
  isLoading,
  isDisabled,
  size,
  style,
  children,
  variant = type === 'link' ? undefined : 'primary',
  href,
  onClick,
  isBlock,
  rightIcon
}: ButtonProps) => {
  const classNames = ['font-pjs-semi-bold text-lg py-3 rounded-full cursor-pointer', className];

  if (variant === 'primary') classNames.push('bg-button-primary');
  if (variant === 'secondary') classNames.push('bg-violet-700');
  if (variant === 'danger') classNames.push('bg-red-600');
  if (isBlock) classNames.push('block w-full py-2 px-4');
  if (size === 'large') classNames.push('px-3 py-1 text-sm');
  if (size === 'medium') classNames.push('px-4 py-2 text-base');
  if (size === 'large') classNames.push('px-6 py-3 text-lg');

  if (isDisabled) {
    return (
      <span className={classNames.join(' ')} style={style}>
        <div className="flex justify-center items-center">
          {children}
          {rightIcon && <i className={`bx ${rightIcon} text-xl ml-2 mt-1`}></i>}
        </div>
      </span>
    );
  }

  if (isLoading) {
    return (
      <span
        className={[classNames.join(' '), 'flex justify-center items-center space-x-2 opacity-80'].join(' ')}
        style={style}
      >
        <span className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin text-white"></span>
        <span className="font-bold text-white">Loading...</span>
      </span>
    );
  }

  if (type === 'link') {
    return (
      <Link to={href as string} className={classNames.join(' ')} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classNames.join(' ')} onClick={onClick} style={style}>
      <div className="flex justify-center items-center">
        {children}
        {rightIcon && <i className={`bx ${rightIcon} text-xl ml-2 mt-1`}></i>}
      </div>
    </button>
  );
};

export default Button;
