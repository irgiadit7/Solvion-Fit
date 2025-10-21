'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { Input } from '../atoms/Input';
import Image from 'next/image';

type AuthFormProps = {
  variant: 'login' | 'register';
};

export const AuthForm = ({ variant }: AuthFormProps) => {
  const isLogin = variant === 'login';

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-6xl mx-4 bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-zinc-800">
        
        {/* Left Side - Image/Illustration */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 p-8 md:p-12 flex flex-col items-center justify-center relative">  
          <div className="text-center space-y-6 z-10">
          
            
            <div className="mt-8 flex items-center justify-center">
            <Image  
                src="/svg/auth.svg" 
                alt="Fitness Illustration" 
                width={256} 
                height={256}
                className="w-124 h-124"
              />            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full space-y-8">
            
            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Welcome to
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-white">Solvion</span>
                <span className="text-blue-600">Fit</span>
              </h2>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-zinc-700 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-gray-300 font-medium">
                  {isLogin ? 'Sign in with Google' : 'Sign up with Google'}
                </span>
              </button>

              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-zinc-700 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-gray-300 font-medium">
                  {isLogin ? 'Sign in with Facebook' : 'Sign up with Facebook'}
                </span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-zinc-900 text-gray-500">OR</span>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-zinc-700 rounded-lg bg-zinc-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 border border-zinc-700 rounded-lg bg-zinc-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-zinc-700 rounded-lg bg-zinc-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                />
              </div>

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-blue-600 focus:ring-blue-600" />
                    <span className="text-gray-400">Remember me</span>
                  </label>
                  <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>

            {/* Footer Link */}
            <div className="text-center text-sm text-gray-400">
              {isLogin ? (
                <p>
                  Don&apos;t have an account?{' '}
                  <Link href="/auth/register" className="font-semibold text-blue-600 hover:text-blue-500">
                    Sign Up
                  </Link>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <Link href="/auth/login" className="font-semibold text-blue-600 hover:text-blue-500">
                    Login
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};