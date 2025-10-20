'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '../atoms/Button'
import { ThemeSwitcher } from '../molecules/ThemeSwitcher'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="w-full max-w-5xl flex justify-between items-center py-4">
        <div className="text-2xl font-bold">
          Solvion<span className="text-blue-600">Fit</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
           Learn More
          </a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
            About
          </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
            App Store
          </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
            Google Play
          </a>
        </nav>
        
        {/* Tombol Aksi Desktop */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeSwitcher />
          <Button variant="secondary">Login</Button>
          <Button variant="primary">Daftar</Button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            aria-label="Buka menu"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm animate-in fade-in-20">
          <div className="flex flex-col p-8">
            <div className="flex justify-between items-center mb-12">
              <div className="text-2xl font-bold">
                Solvion<span className="text-blue-600">Fit</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Tutup menu"
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            
            <nav className="flex flex-col items-start gap-6 text-xl">
                 <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
           Learn More
          </a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
            About
          </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
            App Store
          </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
            Google Play
          </a>
              <div className="border-b w-full my-4 border-gray-200 dark:border-gray-800"></div>
              <div className="flex flex-col items-start gap-4 w-full">
                <Button variant="secondary" className="w-full text-left">Login</Button>
                <Button variant="primary" className="w-full text-left">Daftar</Button>
                <div className="pt-4 w-full">
                  <ThemeSwitcher />
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}