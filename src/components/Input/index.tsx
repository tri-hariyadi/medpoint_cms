import { useState } from 'react';

import { InputProps } from './types';

const Input = ({
  containerClassName,
  className,
  value = '',
  error,
  disabled,
  id,
  label,
  placeholder,
  type,
  icon = 'bxs-user',
  onChange
}: InputProps) => {
  const [inputType, setInputType] = useState(type);
  const classNames = [
    className,
    'w-full flex border-1 rounded-lg p-4 mt-1 bg-transparent justify-center items-center outline outline-2 outline-transparent backdrop-blur-sm focus-within:shadow-md'
  ];

  if (error) {
    classNames[2] = 'border-red-700 focus-within:outline-red-700 focus-within:shadow-red-500/50';
  } else {
    classNames[2] = 'border-gray-300 focus-within:outline-blue-500 focus-within:shadow-blue-500/50';
  }

  const showHidePwd = () => {
    if (type !== 'password') return;
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  return (
    <div className={['mb-4', containerClassName].join(containerClassName ? ' ' : '')}>
      {label && (
        <label htmlFor={id} className="text-large font-pjs-bold">
          {label}
        </label>
      )}
      <div className={classNames.join(' ')}>
        <i className={`bx ${icon} text-xl`}></i>
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          className="w-full h-full font-pjs focus:outline-none focus:ring-0 focus:border-none ml-2"
          onChange={onChange}
        />
        {type === 'password' && (
          <button onClick={showHidePwd} className="cursor-pointer">
            <i className={`bx ${inputType === 'password' ? 'bx-hide' : 'bx-show'} text-xl`}></i>
          </button>
        )}
      </div>
      {error && (
        <div className="flex space-x-2 items-center mt-1.5">
          <i className="bx bx-error-circle text-sm text-red-700"></i>
          <p className="text-xs text-red-700">{error}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
