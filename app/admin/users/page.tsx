'use client';

import { useState } from 'react';
import { Search, MoreVertical, ShieldAlert, CheckCircle2, Ban } from 'lucide-react';

const mockUsers = [
  { id: '1', name: 'Alice Smith', email: 'alice@example.com', role: 'Admin', status: 'Active', joined: '2025-01-12' },
  { id: '2', name: 'Bob Jones', email: 'bob@example.com', role: 'User', status: 'Active', joined: '2025-02-14' },
  { id: '3', name: 'Charlie Davis', email: 'charlie@example.com', role: 'User', status: 'Banned', joined: '2025-03-22' },
  { id: '4', name: 'Diana Prince', email: 'diana@example.com', role: 'Premium', status: 'Active', joined: '2025-04-01' },
  { id: '5', name: 'Evan Wright', email: 'evan@example.com', role: 'User', status: 'Active', joined: '2025-04-15' },
];

export default function UserManagementPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredUsers = mockUsers.filter(u => u.name.toLowerCase().includes(searchTerm.toLowerCase()) || u.email.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="max-w-6xl w-full mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">User Management</h1>
          <p className="text-slate-400">Manage your platform&apos;s users, roles, and restrictions.</p>
        </div>
        
        <div className="relative w-full md:w-64">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
           <input 
             type="text"
             placeholder="Search users..."
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-700 rounded-lg text-sm text-slate-300 focus:outline-none focus:border-indigo-500 transition-all shadow-inner"
           />
        </div>
      </div>
      
      <div className="bg-slate-900 rounded-[2rem] border border-slate-800 shadow-xl shadow-black/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-800/50 text-slate-400 font-semibold border-b border-slate-800 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Joined</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
               {filteredUsers.map((user) => (
                 <tr key={user.id} className="hover:bg-slate-800/50 transition-colors">
                   <td className="px-6 py-4">
                     <div className="font-bold text-slate-200">{user.name}</div>
                     <div className="text-slate-500 text-xs">{user.email}</div>
                   </td>
                   <td className="px-6 py-4">
                     <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-bold
                        ${user.role === 'Admin' ? 'bg-indigo-900/40 text-indigo-400 border border-indigo-500/30' : 
                          user.role === 'Premium' ? 'bg-purple-900/40 text-purple-400 border border-purple-500/30' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
                        {user.role}
                     </span>
                   </td>
                   <td className="px-6 py-4">
                     <span className={`inline-flex items-center gap-1.5 text-xs font-bold
                        ${user.status === 'Active' ? 'text-emerald-400' : 'text-red-400'}`}>
                        {user.status === 'Active' ? <CheckCircle2 className="w-4 h-4" /> : <Ban className="w-4 h-4" />}
                        {user.status}
                     </span>
                   </td>
                   <td className="px-6 py-4 text-slate-400">
                     {user.joined}
                   </td>
                   <td className="px-6 py-4 text-right">
                     <div className="flex items-center justify-end gap-2">
                       <button className="p-1.5 text-slate-500 hover:text-indigo-400 transition-colors rounded hover:bg-slate-800" title="Edit">
                          <MoreVertical className="w-4 h-4" />
                       </button>
                     </div>
                   </td>
                 </tr>
               ))}
            </tbody>
          </table>
          {filteredUsers.length === 0 && (
            <div className="p-8 text-center text-slate-500">
              No users found matching &quot;{searchTerm}&quot;
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
