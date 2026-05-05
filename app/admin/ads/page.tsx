'use client';

import { useState } from 'react';
import { Check, X, Megaphone, Target, BarChart2, CheckCircle2 } from 'lucide-react';

export default function AdsManagementPage() {
  const [adsConfig, setAdsConfig] = useState({
    headerAdEnabled: true,
    sidebarAdEnabled: false,
    popupAdEnabled: true,
    inStreamAdEnabled: false,
  });

  const toggleAd = (key: keyof typeof adsConfig) => {
    setAdsConfig(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-6xl w-full mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Advertisements Configuration</h1>
        <p className="text-slate-400">Control the placement and behavior of advertisements across the platform.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
           <div className="bg-slate-900 rounded-[2rem] border border-slate-800 shadow-xl shadow-black/20 p-8 line-clamp-none">
             <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-4 mb-6">Placements</h3>
             
             <div className="space-y-4">
               {/* Header Ad */}
               <div className="flex items-start justify-between p-5 bg-slate-800/50 rounded-xl border border-slate-700 transition-colors hover:border-indigo-500/50">
                 <div>
                   <h4 className="font-bold text-slate-200">Header Banner Ad</h4>
                   <p className="text-sm text-slate-500 mt-1 max-w-md">Displays a 728x90 banner at the top of the Quick Downloader and Browser pages.</p>
                 </div>
                 <button 
                   onClick={() => toggleAd('headerAdEnabled')}
                   className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${adsConfig.headerAdEnabled ? 'bg-indigo-600' : 'bg-slate-700'}`}
                 >
                   <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-slate-200 shadow ring-0 transition duration-200 ease-in-out ${adsConfig.headerAdEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
                 </button>
               </div>

               {/* Sidebar Ad */}
               <div className="flex items-start justify-between p-5 bg-slate-800/50 rounded-xl border border-slate-700 transition-colors hover:border-indigo-500/50">
                 <div>
                   <h4 className="font-bold text-slate-200">Right Sidebar Ad</h4>
                   <p className="text-sm text-slate-500 mt-1 max-w-md">Displays a 300x250 ad unit strictly on large desktop viewports.</p>
                 </div>
                 <button 
                   onClick={() => toggleAd('sidebarAdEnabled')}
                   className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${adsConfig.sidebarAdEnabled ? 'bg-indigo-600' : 'bg-slate-700'}`}
                 >
                   <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-slate-200 shadow ring-0 transition duration-200 ease-in-out ${adsConfig.sidebarAdEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
                 </button>
               </div>

               {/* Popup Ad */}
               <div className="flex items-start justify-between p-5 bg-slate-800/50 rounded-xl border border-slate-700 transition-colors hover:border-indigo-500/50">
                 <div>
                   <h4 className="font-bold text-slate-200">Pop-under Ad (On Download Target)</h4>
                   <p className="text-sm text-slate-500 mt-1 max-w-md">Opens a new tab behind the active window when a user initiates a download.</p>
                 </div>
                 <button 
                   onClick={() => toggleAd('popupAdEnabled')}
                   className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${adsConfig.popupAdEnabled ? 'bg-indigo-600' : 'bg-slate-700'}`}
                 >
                   <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-slate-200 shadow ring-0 transition duration-200 ease-in-out ${adsConfig.popupAdEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
                 </button>
               </div>
             </div>
           </div>

           <div className="bg-slate-900 rounded-[2rem] border border-slate-800 shadow-xl shadow-black/20 p-8">
             <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-4 mb-6">Ad Network Settings</h3>
             <form className="space-y-6">
               <div>
                 <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Google AdSense Publisher ID</label>
                 <input type="text" defaultValue="pub-1234567890123456" className="w-full p-3 bg-slate-950 border border-slate-700 text-slate-300 rounded-xl focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none shadow-inner" />
               </div>
               <div>
                 <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Custom AdScript (Head)</label>
                 <textarea rows={3} className="w-full p-3 bg-slate-950 border border-slate-700 text-slate-300 rounded-xl font-mono text-xs focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none shadow-inner" placeholder="<script>...</script>"></textarea>
               </div>
               <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20">
                 Save Network Settings
               </button>
             </form>
           </div>
        </div>

        <div className="space-y-6">
           {/* Summary Cards */}
           <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-[2rem] border border-indigo-500/30 p-8 text-white shadow-xl shadow-indigo-900/20 relative overflow-hidden">
             <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
             <div className="flex items-center gap-2 mb-8 relative z-10">
               <BarChart2 className="w-6 h-6 text-indigo-300" />
               <h3 className="font-bold text-sm tracking-wide uppercase text-indigo-200">Revenue This Month</h3>
             </div>
             <div className="text-5xl font-black mb-4 tracking-tighter relative z-10">$8,452.90</div>
             <div className="text-indigo-300 text-xs font-bold flex items-center gap-1 relative z-10">
               <CheckCircle2 className="w-4 h-4 text-emerald-400" />
               On track to exceed last month
             </div>
           </div>

           <div className="bg-slate-900 rounded-[2rem] border border-slate-800 shadow-xl shadow-black/20 p-8">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                 <Target className="w-5 h-5 text-slate-500" />
                 <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Optimization Goal</h3>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-slate-400">Click-through Rate</span>
                <span className="text-sm font-bold text-emerald-400">3.2%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 mb-6 shadow-inner">
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-2 rounded-full" style={{width: '65%'}}></div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-slate-400">Fill Rate</span>
                <span className="text-sm font-bold text-indigo-400">92%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 shadow-inner">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-500 h-2 rounded-full" style={{width: '92%'}}></div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
