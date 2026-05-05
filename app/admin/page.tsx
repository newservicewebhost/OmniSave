'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, DownloadCloud, Activity, Zap } from 'lucide-react';

const mockData = [
  { name: 'Mon', downloads: 4000, activeUsers: 2400 },
  { name: 'Tue', downloads: 3000, activeUsers: 1398 },
  { name: 'Wed', downloads: 2000, activeUsers: 9800 },
  { name: 'Thu', downloads: 2780, activeUsers: 3908 },
  { name: 'Fri', downloads: 1890, activeUsers: 4800 },
  { name: 'Sat', downloads: 2390, activeUsers: 3800 },
  { name: 'Sun', downloads: 3490, activeUsers: 4300 },
];

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl w-full mx-auto px-4">
      <h1 className="text-3xl font-bold text-white mb-8">Platform Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-900 p-6 rounded-[2rem] border border-slate-800 shadow-xl shadow-black/20">
          <div className="flex items-center justify-between mb-4">
             <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Total Downloads</div>
             <div className="p-2 bg-indigo-900/40 text-indigo-400 rounded-xl"><DownloadCloud className="w-5 h-5" /></div>
          </div>
          <div className="text-3xl text-white font-black">124.5K</div>
          <div className="text-[10px] font-bold text-emerald-400 mt-2">↑ 12.5% from last week</div>
        </div>
        
        <div className="bg-slate-900 p-6 rounded-[2rem] border border-slate-800 shadow-xl shadow-black/20">
          <div className="flex items-center justify-between mb-4">
             <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Active Users</div>
             <div className="p-2 bg-purple-900/40 text-purple-400 rounded-xl"><Users className="w-5 h-5" /></div>
          </div>
          <div className="text-3xl text-white font-black">32.1K</div>
          <div className="text-[10px] font-bold text-emerald-400 mt-2">↑ 5.2% from last week</div>
        </div>

        <div className="bg-slate-900 p-6 rounded-[2rem] border border-slate-800 shadow-xl shadow-black/20">
          <div className="flex items-center justify-between mb-4">
             <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Server Load</div>
             <div className="p-2 bg-blue-900/40 text-blue-400 rounded-xl"><Activity className="w-5 h-5" /></div>
          </div>
          <div className="text-3xl text-white font-black">42%</div>
          <div className="text-[10px] font-bold text-slate-500 mt-2">Optimal functioning</div>
        </div>

        <div className="bg-slate-900 p-6 rounded-[2rem] border border-slate-800 shadow-xl shadow-black/20">
          <div className="flex items-center justify-between mb-4">
             <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Ad Impressions</div>
             <div className="p-2 bg-emerald-900/40 text-emerald-400 rounded-xl"><Zap className="w-5 h-5" /></div>
          </div>
          <div className="text-3xl text-white font-black">892.4K</div>
          <div className="text-[10px] font-bold text-emerald-400 mt-2">↑ 18.1% from last week</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-900 p-6 rounded-[2rem] border border-slate-800 shadow-xl shadow-black/20">
           <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Downloads Overview</h3>
           <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={mockData}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
                 <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
                 <RechartsTooltip cursor={{fill: '#1E293B'}} contentStyle={{backgroundColor: '#0F172A', borderRadius: '12px', border: '1px solid #1E293B', color: '#fff'}} />
                 <Bar dataKey="downloads" fill="#6366F1" radius={[4, 4, 0, 0]} />
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-[2rem] border border-slate-800 shadow-xl shadow-black/20">
           <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Active Users Trend</h3>
           <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               <LineChart data={mockData}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
                 <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} />
                 <RechartsTooltip contentStyle={{backgroundColor: '#0F172A', borderRadius: '12px', border: '1px solid #1E293B', color: '#fff'}} />
                 <Line type="monotone" dataKey="activeUsers" stroke="#A855F7" strokeWidth={3} dot={{r: 4, fill: '#A855F7', strokeWidth: 0}} activeDot={{r: 6}} />
               </LineChart>
             </ResponsiveContainer>
           </div>
        </div>
      </div>
    </div>
  );
}
