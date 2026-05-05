'use client';

import { Save, Globe, Shield, Database } from 'lucide-react';

export default function SystemSettingsPage() {
  return (
    <div className="max-w-4xl w-full mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">System Settings</h1>
        <p className="text-slate-400">Configure global application properties.</p>
      </div>

      <div className="space-y-6">
        <div className="bg-slate-900 rounded-[2rem] border border-slate-800 shadow-xl shadow-black/20 overflow-hidden">
          <div className="p-6 border-b border-slate-800 bg-slate-800/50 flex items-center gap-2">
             <Globe className="w-5 h-5 text-indigo-400" />
             <h3 className="font-bold text-slate-200 uppercase tracking-widest text-xs">General</h3>
          </div>
          <div className="p-8 space-y-6">
             <div>
               <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Site Name</label>
               <input type="text" defaultValue="OmniSave" className="w-full max-w-lg p-3 bg-slate-950 border border-slate-700 text-slate-300 rounded-xl focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none shadow-inner transition-all" />
             </div>
             <div>
               <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Support Email</label>
               <input type="email" defaultValue="support@omnisave.com" className="w-full max-w-lg p-3 bg-slate-950 border border-slate-700 text-slate-300 rounded-xl focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none shadow-inner transition-all" />
             </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[2rem] border border-slate-800 shadow-xl shadow-black/20 overflow-hidden">
          <div className="p-6 border-b border-slate-800 bg-slate-800/50 flex items-center gap-2">
             <Shield className="w-5 h-5 text-purple-400" />
             <h3 className="font-bold text-slate-200 uppercase tracking-widest text-xs">Security & Restrictions</h3>
          </div>
          <div className="p-8 space-y-6">
             <div className="flex items-center justify-between max-w-lg">
               <div>
                 <div className="font-bold text-slate-200">Require Account to Download</div>
                 <div className="text-xs text-slate-500">Force users to sign up before downloading anything.</div>
               </div>
               <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-700 transition-colors duration-200 ease-in-out focus:outline-none">
                 <span className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-slate-200 shadow ring-0 transition duration-200 ease-in-out translate-x-0" />
               </button>
             </div>
             <div className="flex items-center justify-between max-w-lg">
               <div>
                 <div className="font-bold text-slate-200">Daily Download Limit (Guests)</div>
                 <div className="text-xs text-slate-500">Cap the number of downloads for unauthenticated users.</div>
               </div>
               <input type="number" defaultValue="5" className="w-20 p-2 bg-slate-950 border border-slate-700 text-slate-300 rounded-xl focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none text-center shadow-inner transition-all" />
             </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[2rem] border border-slate-800 shadow-xl shadow-black/20 overflow-hidden">
          <div className="p-6 border-b border-slate-800 bg-slate-800/50 flex items-center gap-2">
             <Database className="w-5 h-5 text-emerald-400" />
             <h3 className="font-bold text-slate-200 uppercase tracking-widest text-xs">API & Scraping configuration</h3>
          </div>
          <div className="p-8 space-y-6">
            <div>
               <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Primary Extraction Backend URL</label>
               <input type="text" defaultValue="https://api.omnisave.internal/v1/extract" className="w-full font-mono text-sm max-w-lg p-3 bg-slate-950 border border-slate-700 text-slate-300 rounded-xl focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none shadow-inner transition-all" />
             </div>
             <div className="flex items-center justify-between max-w-lg pt-4 mt-6 border-t border-slate-800">
               <div>
                 <div className="font-bold text-slate-200">Use Backup Proxies</div>
                 <div className="text-xs text-slate-500">Automatically switch to proxy pools if main IPs are blocked.</div>
               </div>
               <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none">
                 <span className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-slate-200 shadow ring-0 transition duration-200 ease-in-out translate-x-5" />
               </button>
             </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
           <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-indigo-600/20 flex items-center gap-2 transition-colors">
             <Save className="w-4 h-4" />
             Save All Changes
           </button>
        </div>
      </div>
    </div>
  );
}
