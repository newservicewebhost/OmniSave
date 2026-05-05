import Link from 'next/link';
import { Home, Users, BarChart3, Settings, ShieldAlert, BadgeDollarSign } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 gap-4 pt-6 pb-8 w-full">
      <aside className="w-64 bg-slate-900 border border-slate-800 rounded-[2rem] text-slate-300 hidden md:flex flex-col overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-3 text-white mb-8 border-b border-slate-800 pb-6">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/20 text-white">
               Admin
            </div>
            <span className="font-bold text-lg">Panel</span>
          </div>
          <nav className="space-y-2">
            <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800 text-white shadow-lg shadow-slate-950/20 border border-slate-700 transition-colors">
              <BarChart3 className="w-5 h-5 text-indigo-400" />
              Dashboard
            </Link>
            <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800/50 hover:text-white transition-colors border border-transparent">
              <Users className="w-5 h-5 text-slate-400" />
              Users
            </Link>
            <Link href="/admin/ads" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800/50 hover:text-white transition-colors border border-transparent">
              <BadgeDollarSign className="w-5 h-5 text-slate-400" />
              Advertisements
            </Link>
            <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800/50 hover:text-white transition-colors border border-transparent">
              <Settings className="w-5 h-5 text-slate-400" />
              Settings
            </Link>
          </nav>
        </div>
      </aside>
      
      <main className="flex-1 flex flex-col overflow-y-auto w-full">
        {children}
      </main>
    </div>
  );
}
