import Link from 'next/link';
import { DownloadCloud, LayoutDashboard, Settings } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="mx-4 mt-4 mb-2">
      <div className="max-w-[1400px] mx-auto">
        <header className="flex justify-between items-center bg-slate-900/50 border border-slate-800 rounded-[2rem] px-6 py-4 backdrop-blur-md">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/20 text-white">
                O
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Omni<span className="text-indigo-400">Save</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-4 text-sm font-medium text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Downloader</Link>
              <Link href="/" className="hover:text-white transition-colors">Browser</Link>
            </div>
            <div className="hidden md:block h-8 w-[1px] bg-slate-800"></div>
            <Link 
              href="/admin" 
              className="flex items-center gap-3 group"
            >
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-white group-hover:text-indigo-400 transition-colors">Admin Panel</p>
                <p className="text-[10px] text-green-400">System: Healthy</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-slate-300">
                <LayoutDashboard className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </header>
      </div>
    </nav>
  );
}
