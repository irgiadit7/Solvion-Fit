import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-4">
      <div className="absolute top-4 left-4">
        <Link href="/" className="text-2xl font-bold cursor-pointer">
          Solvion<span className="text-blue-600">Fit</span>
        </Link>
      </div>
      {children}
    </div>
  );
}