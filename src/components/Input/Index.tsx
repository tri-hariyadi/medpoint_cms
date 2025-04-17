import { useState } from 'react';

import { InputProps } from './types';

const Input = ({
  containerClassName,
  className,
  id,
  label,
  placeholder,
  type,
  icon = 'bxs-user',
  onChange
}: InputProps) => {
  const [inputType, setInputType] = useState(type);

  const showHidePwd = () => {
    if (type !== 'password') return;
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  return (
    <div className={['mt-4', containerClassName].join(containerClassName ? ' ' : '')}>
      <label htmlFor={id} className="text-large font-semibold">
        {label}
      </label>
      <div
        className={[
          className,
          'w-full flex border-1 border-gray-300 rounded-lg p-4 mt-1 bg-transparent justify-center items-center outline outline-2 outline-transparent focus-within:outline-blue-500 focus-within:shadow-md focus-within:shadow-blue-500/50 backdrop-blur-sm'
        ].join(' ')}
      >
        <i className={`bx ${icon} text-xl`}></i>
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          className="w-full h-full focus:outline-none focus:ring-0 focus:border-none ml-2"
          onChange={onChange}
        />
        {type === 'password' && (
          <button onClick={showHidePwd}>
            <i className={`bx ${inputType === 'password' ? 'bx-hide' : 'bx-show'} text-xl`}></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
