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
      <body className="min-h-screen flex flex-col bg-[#0A0C10] relative antialiased text-slate-200 overflow-x-hidden selection:bg-indigo-500/30" suppressHydrationWarning>
        {/* Ambient Background Lights */}
        <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none -z-10" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[30vw] h-[40vw] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none -z-10" />
        
        <Navbar />
        <main className="flex-grow flex flex-col w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
