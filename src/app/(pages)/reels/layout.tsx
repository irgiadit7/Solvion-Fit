import { HomeHeader } from '@/components/organisms/HomeHeader';
import { LeftSidebar } from '../../../components/organisms/LeftSidebar';
import { RightSidebar } from '../../../components/organisms/RightSidebar';

export default function ReelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-zinc-900 min-h-screen text-white">
      <HomeHeader />
      <main className="flex pt-16">
        <LeftSidebar />
        <div className="flex-grow px-4 sm:px-6 lg:px-8 xl:px-20 py-6">
          {children}
        </div>
        <RightSidebar />
      </main>
    </div>
  );
}