import { Header } from "@/components/organisms/Header";
import { HeroSection } from "@/components/organisms/HeroSection";
import { Footer } from "@/components/organisms/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 sm:p-12 font-sans">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}