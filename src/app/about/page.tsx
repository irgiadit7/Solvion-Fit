import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 sm:p-12 font-sans">
      <Header />
      <main className="flex-grow w-full max-w-4xl mx-auto py-12 md:py-20 px-4">
        <div className="space-y-12">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Tentang <span className="text-blue-600">SolvionFit</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Inovasi kami dalam teknologi kebugaran didedikasikan untuk membantu Anda mencapai tujuan kesehatan.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Profil Solvion</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Solvion adalah perusahaan teknologi yang berfokus pada pengembangan solusi inovatif untuk meningkatkan kualitas hidup. Kami percaya bahwa teknologi dapat menjadi kekuatan pendorong untuk perubahan positif, terutama di bidang kesehatan dan kebugaran. Tim kami terdiri dari para ahli yang bersemangat untuk menciptakan produk yang intuitif, fungsional, dan menginspirasi.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Aplikasi Solvion Fit</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Solvion Fit adalah aplikasi pelacak kebugaran yang dirancang untuk menjadi teman setia dalam perjalanan kesehatan Anda. Kami memahami bahwa setiap orang memiliki tujuan dan kebutuhan yang unik. Oleh karena itu, Solvion Fit menawarkan fitur-fitur canggih seperti pelacakan progres latihan yang detail, penjadwalan latihan yang fleksibel, dan pengingat motivasi untuk memastikan Anda tetap di jalur yang benar. Aplikasi ini adalah hasil dari riset mendalam dan komitmen kami untuk memberikan pengalaman pengguna terbaik.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-3">Visi Kami</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Menjadi platform kebugaran digital terdepan yang memberdayakan jutaan orang di seluruh dunia untuk hidup lebih sehat dan aktif.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Misi Kami</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Menyediakan alat yang mudah diakses, personal, dan memotivasi untuk membantu setiap individu mencapai potensi kebugaran maksimal mereka, kapan pun dan di mana pun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}