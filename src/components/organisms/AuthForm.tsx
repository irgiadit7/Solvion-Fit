'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/atoms/Button';
import { Input } from '../atoms/Input';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

// --- Komponen Modal (Tidak diubah) ---
const PrivacyPolicyModal = ({ isOpen, onClose, onAgree }: { isOpen: boolean; onClose: () => void; onAgree: () => void; }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-black/80 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl shadow-xl w-full max-w-2xl mx-4 max-h-[80vh] flex flex-col">
        <div className="p-6 border-b border-zinc-700">
          <h2 className="text-xl font-bold text-white">Kebijakan Privasi SolvionFit</h2>
        </div>
        <div className="p-6 overflow-y-auto space-y-4 text-zinc-400">
          <h3 className="font-semibold text-white">Definisi</h3>
          <p className="text-sm">
            SolvionFit (&quot;kami&quot;, &quot;situs&quot;, &quot;aplikasi&quot;) menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda. Dengan mengakses atau menggunakan layanan SolvionFit, Anda setuju dengan pengumpulan dan penggunaan data sesuai dengan kebijakan ini.
          </p>

          
          <h3 className="font-semibold text-white mt-4">Kebijakan Privasi</h3>
          <ol className="list-decimal list-inside space-y-3 text-sm">
            <li>
              <strong>Informasi yang Kami Kumpulkan:</strong> Kami mengumpulkan informasi pribadi yang Anda berikan saat registrasi seperti nama, username, email, dan data kebugaran yang Anda catat (misalnya, jenis latihan, durasi, jarak).
            </li>
            <li>
              <strong>Penggunaan Informasi:</strong> Data Anda digunakan untuk mempersonalisasi pengalaman, melacak progres kebugaran, menyediakan laporan, serta meningkatkan layanan dan fitur aplikasi kami.
            </li>
            <li>
              <strong>Perlindungan Informasi Pribadi:</strong> Kami menerapkan langkah-langkah keamanan teknis dan organisasi untuk melindungi data Anda dari akses, perubahan, atau penghapusan yang tidak sah.
            </li>
            <li>
              <strong>Pembagian Informasi Pribadi:</strong> Kami tidak akan menjual atau membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali diwajibkan oleh hukum.
            </li>
            <li>
              <strong>Hak Pengguna:</strong> Anda memiliki hak untuk mengakses, memperbaiki, atau menghapus data pribadi Anda kapan saja melalui pengaturan akun di dalam aplikasi.
            </li>
            <li>
              <strong>Penggunaan Cookie:</strong> Kami menggunakan cookie untuk menyimpan preferensi sesi Anda dan meningkatkan pengalaman pengguna. Anda dapat menonaktifkan cookie melalui pengaturan browser Anda.
            </li>
            <li>
              <strong>Perubahan pada Kebijakan Privasi:</strong> Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Perubahan signifikan akan diberitahukan kepada Anda melalui email atau notifikasi di dalam aplikasi.
            </li>
            <li>
              <strong>Hubungi Kami:</strong> Jika Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, silakan hubungi kami di support@solvion.fit.
            </li>
          </ol>
        </div>
        <div className="p-6 border-t border-zinc-700 mt-auto">
          <Button onClick={onAgree} className="w-full">
            Saya Memahami dan Menyetujui
          </Button>
        </div>
      </div>
    </div>
  );
};

// --- Komponen Ikon (Tidak diubah) ---
const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
);
  
const FacebookIcon = () => (
    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

// --- Komponen Utama AuthForm ---
type AuthFormProps = {
    variant: 'login' | 'register';
};
  
export const AuthForm = ({ variant }: AuthFormProps) => {
    const isLogin = variant === 'login';
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);

      if (variant === 'register') {
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords don't match");
          setIsLoading(false);
          return;
        }
        try {
          // <-- KODE YANG DIPERBAIKI ADA DI SINI
          await axios.post('/api/auth/register', {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          });
          router.push('/auth/login');
        } catch (error) {
          console.error(error);
          alert('Registration failed. Please try again.');
        } finally {
          setIsLoading(false);
        }
      } else {
        try {
          const result = await signIn('credentials', {
            redirect: false,
            email: formData.email,
            password: formData.password,
          });

          if (result?.ok && !result.error) {
            router.push('/');
          } else {
            alert('Invalid credentials');
            console.error(result?.error);
          }
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    const handleAgreeAndClose = () => {
        setIsAgreed(true);
        setIsModalOpen(false);
    };

    return (
      <>
        <PrivacyPolicyModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAgree={handleAgreeAndClose}
        />
     <div className={`w-full min-h-screen flex bg-black ${variant === 'register' ? 'md:h-screen' : ''}`}>
          {/* Left Side - Image/Illustration (Hidden on mobile) */}
       <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 items-center justify-center p-12">          
         <Image  
                src="/svg/auth.svg" 
                alt="Fitness Illustration" 
                width={400} 
                height={400}
                className="w-180 h-180"
            />
          </div>
  
          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
            <div className="max-w-md w-full space-y-8">
              {/* Header */}
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                    {isLogin ? 'Welcome Back!' : 'Create an Account'}
                </h1>
                <h2 className="text-xl md:text-2xl text-zinc-400">
                    to <span className="text-white">Solvion</span><span className="text-blue-600">Fit</span>
                </h2>
              </div>
  
              {/* Social Login Buttons */}
              <div className="space-y-3">
                  <Button variant="secondary" className="w-full flex items-center justify-center gap-3 !rounded-lg !py-3 !border-zinc-700 !bg-zinc-800 hover:!bg-zinc-700">
                      <GoogleIcon />
                      <span>{isLogin ? 'Sign in with Google' : 'Sign up with Google'}</span>
                  </Button>
                  <Button variant="secondary" className="w-full flex items-center justify-center gap-3 !rounded-lg !py-3 !border-zinc-700 !bg-zinc-800 hover:!bg-zinc-700">
                      <FacebookIcon />
                      <span>{isLogin ? 'Sign in with Facebook' : 'Sign up with Facebook'}</span>
                  </Button>
              </div>
  
              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-black text-gray-500">OR</span>
                </div>
              </div>
  
              {/* Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                  {!isLogin && (
                      <>
                      <Input id="name" label="Full Name" type="text" placeholder="John Doe" onChange={handleChange} />
                      </>
                  )}
                  
                  <Input
                      id="email"
                      label={isLogin ? "Email or Phone Number" : "Email or Phone Number"}
                      type="text"
                      placeholder="example@gmail.com"
                      onChange={handleChange}
                  />
  
                  <Input
                      id="password"
                      label="Password"
                      type="password"
                      placeholder="••••••••"
                      onChange={handleChange}
                  />

                  {!isLogin && (
                      <Input
                      id="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      placeholder="••••••••"
                      onChange={handleChange}
                      />
                  )}
  
                  {isLogin && (
                      <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-blue-600 focus:ring-blue-600" />
                          <span className="text-gray-400">Remember me</span>
                      </label>
                      <Link href="/auth/forgot-password" className="text-blue-600 hover:text-blue-500 font-medium">
                          Forgot password?
                      </Link>
                      </div>
                  )}

                  {!isLogin && (
                      <div className="flex items-center gap-2 text-sm">
                          <input 
                              id="agree"
                              type="checkbox"
                              className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-blue-600 focus:ring-blue-600 cursor-pointer"
                              checked={isAgreed}
                              onChange={(e) => setIsAgreed(e.target.checked)}
                          />
                          <label htmlFor="agree" className="text-gray-400">
                              Saya setuju dengan{' '}
                              <span 
                                  onClick={() => setIsModalOpen(true)}
                                  className="text-blue-500 hover:underline cursor-pointer"
                              >
                                  kebijakan privasi
                              </span>
                          </label>
                      </div>
                  )}
  
                  <Button
                      type="submit"
                      className="w-full !rounded-lg !py-3 shadow-lg hover:shadow-xl"
                      disabled={(!isLogin && !isAgreed && variant === 'register') || isLoading}
                  >
                      {isLoading ? 'Loading...' : (isLogin ? 'Login' : 'Buat Akun')}
                  </Button>
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
                      Sign In
                    </Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
};