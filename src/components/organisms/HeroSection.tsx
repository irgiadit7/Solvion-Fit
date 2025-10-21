import React from "react";
import { Button } from "../atoms/Button";
import { AppleIcon, GooglePlayIcon } from "../atoms/Icons";

export const HeroSection = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center gap-6">
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
        Capai Target Kebugaran Anda
        <br />
        Bersama <span className="text-blue-600">SolvionFit</span>
      </h1>
      <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
        Lacak progres, atur jadwal latihan, dan tetap termotivasi setiap hari.
        Mulai perjalanan sehatmu sekarang.
      </p>
      <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          variant="secondary"
          className="flex items-center justify-center gap-3 px-6 py-3 text-base"
        >
          <AppleIcon className="h-7 w-7" />
          <div className="flex flex-col items-start">
            <span className="text-xs">Download on the</span>
            <span className="text-lg font-semibold">App Store</span>
          </div>
        </Button>
        <Button
          variant="secondary"
          className="flex items-center justify-center gap-3 px-6 py-3 text-base"
        >
          <GooglePlayIcon className="h-6 w-6" />
          <div className="flex flex-col items-start">
            <span className="text-xs">GET IT ON</span>
            <span className="text-lg font-semibold">Google Play</span>
          </div>
        </Button>
      </div>
    </main>
  );
};