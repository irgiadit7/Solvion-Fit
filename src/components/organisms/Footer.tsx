import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full text-center text-gray-500 text-sm py-4">
      <p>&copy; {new Date().getFullYear()} SolvionFit. All rights reserved.</p>
    </footer>
  );
};