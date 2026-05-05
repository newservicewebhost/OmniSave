'use client';

import { useState } from 'react';
import { Downloader } from '@/components/Downloader';
import { BuiltInBrowser } from '@/components/Browser';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'downloader' | 'browser'>('downloader');

  return (
    <div className="w-full flex-1 pt-6 pb-8 flex flex-col gap-4">
      
      {/* Top Banner Ad space mock */}
      <div className="w-full bg-slate-900 border border-slate-800 rounded-[2rem] p-4 text-center">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mr-2">Sponsored</span>
        <span className="text-sm font-medium text-indigo-400">Upgrade to OmniSave Premium for faster downloads and no ads!</span>
      </div>

      <div className="max-w-md mx-auto flex p-1.5 bg-slate-900 border border-slate-800 rounded-2xl mb-2">
        <button
          onClick={() => setActiveTab('downloader')}
          className={`flex-1 py-2 px-4 text-sm font-semibold rounded-xl transition-all ${
            activeTab === 'downloader' 
              ? 'bg-slate-800 text-white shadow-sm border border-slate-700' 
              : 'text-slate-400 hover:text-slate-300'
          }`}
        >
          Quick Downloader
        </button>
        <button
          onClick={() => setActiveTab('browser')}
          className={`flex-1 py-2 px-4 text-sm font-semibold rounded-xl transition-all ${
            activeTab === 'browser' 
              ? 'bg-slate-800 text-white shadow-sm border border-slate-700' 
              : 'text-slate-400 hover:text-slate-300'
          }`}
        >
          Built-in Browser
        </button>
      </div>

      {activeTab === 'downloader' ? <Downloader /> : <BuiltInBrowser />}
      
    </div>
  );
}
