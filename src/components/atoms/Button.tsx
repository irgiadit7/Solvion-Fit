import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyle =
    'px-4 py-2 rounded-full font-semibold transition-colors duration-300 cursor-pointer';

  const variantStyle =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-800';

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      {...props} 
    >
      {children}
    </button>
  );
};