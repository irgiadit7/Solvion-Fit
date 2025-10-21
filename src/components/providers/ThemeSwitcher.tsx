// 'use client'

// import * as React from 'react'
// import { useTheme } from 'next-themes'
// import { Button } from '../atoms/Button'

// export function ThemeSwitcher() {
//   const [mounted, setMounted] = React.useState(false)
//   const { theme, setTheme } = useTheme()

//   // Pastikan komponen ini hanya di-render di client side
//   React.useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) {
//     // Tampilkan placeholder atau null saat server-side rendering
//     return <div className="w-10 h-10" />;
//   }

//   const toggleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark')
//   }

//   return (
//     <Button
//       variant="secondary"
//       onClick={toggleTheme}
//       className="relative flex justify-center items-center w-10 h-10 p-0 border-none hover:bg-zinc-200 dark:hover:bg-zinc-800"
//       aria-label="Toggle theme"
//     >
//       {/* Sun Icon */}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className={`absolute h-5 w-5 transform transition-transform duration-500 ${
//           theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
//         }`}
//       >
//         <circle cx="12" cy="12" r="5" />
//         <line x1="12" y1="1" x2="12" y2="3" />
//         <line x1="12" y1="21" x2="12" y2="23" />
//         <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
//         <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
//         <line x1="1" y1="12" x2="3" y2="12" />
//         <line x1="21" y1="12" x2="23" y2="12" />
//         <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
//         <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
//       </svg>
//       {/* Moon Icon */}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className={`absolute h-5 w-5 transform transition-transform duration-500 ${
//           theme === 'light' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
//         }`}
//       >
//         <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
//       </svg>
//     </Button>
//   )
// }