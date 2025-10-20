'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Button } from '../atoms/Button'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button variant="secondary" onClick={toggleTheme}>
      {theme === 'dark' ? 'Mode Terang' : 'Mode Gelap'}
    </Button>
  )
}