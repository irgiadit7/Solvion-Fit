'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '../atoms/Button'
import Link from 'next/link'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'
  }, [isMenuOpen])

  return (
    <>
      <header className="w-full max-w-5xl mx-auto flex items-center justify-between py-4 px-4 sm:px-0 relative">
        {/* [Kiri] Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="text-2xl font-bold cursor-pointer">
            Solvion<span className="text-blue-600">Fit</span>
          </Link>
        </div>

        {/* [Tengah] Navigasi Desktop */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
          <a href="#" className="text-zinc-300 hover:text-blue-400 transition-colors">
            Learn More
          </a>
          <Link href="/about" className="text-zinc-300 hover:text-blue-400 transition-colors">
            About
          </Link>
        </nav>

        {/* [Kanan] Tombol Aksi & Hamburger */}
        <div className="flex-1 flex justify-end items-center gap-2">
           <div className="hidden md:flex items-center gap-2">
            <Button variant="secondary">Login</Button>
            <Button variant="primary">Daftar</Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Buka menu"
              className="p-2 rounded-md"
            >
              <svg
                className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay Menu Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm animate-in fade-in-20">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4">
              <div className="text-2xl font-bold">
                Solvion<span className="text-blue-600">Fit</span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Tutup menu"
                className="p-2 rounded-md"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            
            <nav className="flex-1 flex flex-col justify-center items-center gap-8 text-2xl font-medium">
              <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">Learn More</a>
              <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">About</a>
              <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400">Login</a>
              <Button variant="primary" onClick={() => setIsMenuOpen(false)}>Daftar</Button>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}