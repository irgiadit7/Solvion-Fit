'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import { Input } from '../atoms/Input';


type AuthFormProps = {
  variant: 'login' | 'register';
};

export const AuthForm = ({ variant }: AuthFormProps) => {
  const isLogin = variant === 'login';

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-lg shadow-lg">
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          {isLogin ? 'Login ke Akun Anda' : 'Buat Akun Baru'}
        </h1>
        <p className="text-gray-400 mt-2">
          {isLogin ? 'Selamat datang kembali!' : 'Mulai perjalanan kebugaranmu.'}
        </p>
      </div>

      <form className="space-y-4">
        {!isLogin && (
          <Input
            id="name"
            label="Nama Lengkap"
            type="text"
            placeholder="John Doe"
            required
          />
        )}
        <Input
          id="email"
          label="Alamat Email"
          type="email"
          placeholder="email@example.com"
          required
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          required
        />

        <Button type="submit" className="w-full !py-3 !text-base">
          {isLogin ? 'Login' : 'Daftar'}
        </Button>
      </form>

      <div className="text-center text-sm text-gray-400">
        {isLogin ? (
          <p>
            Belum punya akun?{' '}
            <Link href="/auth/register" className="font-medium text-blue-500 hover:underline">
              Daftar di sini
            </Link>
          </p>
        ) : (
          <p>
            Sudah punya akun?{' '}
            <Link href="/auth/login" className="font-medium text-blue-500 hover:underline">
              Login di sini
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};