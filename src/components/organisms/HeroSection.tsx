import React from "react";
import { Button } from "../atoms/Button";

export const HeroSection = ()=>{
    return(
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
      <Button className="mt-4 px-8 py-3 text-lg">Mulai Gratis</Button>
    </main>
    );
};