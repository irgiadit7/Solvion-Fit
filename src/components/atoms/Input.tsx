import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

export const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium text-gray-400 mb-2">
        {label}
      </label>
      <input
        id={id}
        className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-blue-500 focus:border-blue-500 transition"
        {...props}
      />
    </div>
  );
};