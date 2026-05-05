import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'OmniSave | Universal Video Downloader',
  description: 'Download videos and pictures from your favorite websites instantly.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#0A0C10] relative antialiased text-slate-200" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow flex flex-col w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
