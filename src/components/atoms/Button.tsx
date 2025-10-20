import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
};

export const Button = ({ children, onClick, variant = "primary", className = "",}: ButtonProps) => {
  const baseStyle =
    "px-4 py-2 rounded-full font-semibold transition-colors duration-300 cursor-pointer";
  const variantStyle =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800";

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {children}
    </button>
  );
};