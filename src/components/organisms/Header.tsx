import React from 'react'
import { Button } from '../atoms/Button'
import { ThemeSwitcher } from '../molecules/ThemeSwitcher' 

export const Header = () => {
  return (
    <header className="w-full max-w-5xl flex justify-between items-center py-4">
      <div className="text-2xl font-bold">
        Solvion<span className="text-blue-600">Fit</span>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
          Fitur
        </a>
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
          Harga
        </a>
      </nav>
      <div className="flex items-center gap-2">
        <ThemeSwitcher />
        <Button variant="secondary">Login</Button>
        <Button variant="primary">Daftar</Button>
      </div>
    </header>
  )
}