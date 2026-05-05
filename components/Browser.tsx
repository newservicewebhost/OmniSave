'use client';

import { useState } from 'react';
import { Search, Youtube, Facebook, Twitter, Instagram, Globe, ArrowLeft, ArrowRight, RotateCw, Home, Download, Clock } from 'lucide-react';

const QA_LINKS = [
  { name: 'YouTube', url: 'https://youtube.com', icon: <Youtube className="w-8 h-8 text-red-500" />, color: 'bg-slate-800 hover:bg-slate-700' },
  { name: 'Facebook', url: 'https://facebook.com', icon: <Facebook className="w-8 h-8 text-blue-500" />, color: 'bg-slate-800 hover:bg-slate-700' },
  { name: 'Twitter / X', url: 'https://x.com', icon: <Twitter className="w-8 h-8 text-blue-400" />, color: 'bg-slate-800 hover:bg-slate-700' },
  { name: 'Instagram', url: 'https://instagram.com', icon: <Instagram className="w-8 h-8 text-pink-500" />, color: 'bg-slate-800 hover:bg-slate-700' },
  { name: 'TikTok', url: 'https://tiktok.com', icon: <div className="text-white font-bold text-2xl tracking-tighter">TikTok</div>, color: 'bg-slate-800 hover:bg-slate-700' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: <div className="text-blue-600 font-bold text-xl">in</div>, color: 'bg-slate-800 hover:bg-slate-700' },
];

export function BuiltInBrowser() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [inputUrl, setInputUrl] = useState('');
  const [isBrowserActive, setIsBrowserActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<{url: string, time: Date}[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleNavigate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputUrl) return;
    
    let targetUrl = inputUrl;
    if (!targetUrl.startsWith('http')) {
      targetUrl = `https://${targetUrl}`;
    }
    
    setIsLoading(true);
    setCurrentUrl(targetUrl);
    setIsBrowserActive(true);
    setHistory(prev => [{ url: targetUrl, time: new Date() }, ...prev]);
    
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const openApp = (url: string) => {
    setInputUrl(url);
    setCurrentUrl(url);
    setIsBrowserActive(true);
    setHistory(prev => [{ url, time: new Date() }, ...prev]);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900 rounded-[2rem] shadow-xl shadow-black/50 overflow-hidden border border-slate-800 flex flex-col h-[700px]">
        {/* Browser Topbar */}
        <div className="bg-slate-800/50 border-b border-slate-800 px-4 py-3 flex items-center gap-3">
          <div className="flex items-center gap-2 mr-2">
            <button 
               onClick={() => setIsBrowserActive(false)}
               className="p-1.5 hover:bg-slate-700 rounded-md text-slate-400 hover:text-white transition-colors"
               disabled={!isBrowserActive}
               title="Close Browser"
            >
              <Home className="w-5 h-5" />
            </button>
            <button className="p-1.5 text-slate-600 rounded-md transition-colors" disabled>
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="p-1.5 text-slate-600 rounded-md transition-colors" disabled>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              className="p-1.5 hover:bg-slate-700 rounded-md text-slate-400 hover:text-white transition-colors"
              onClick={() => handleNavigate()}
              title="Reload"
            >
              <RotateCw className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setShowHistory(!showHistory)}
              className={`p-1.5 rounded-md transition-colors ${showHistory ? 'bg-indigo-900/50 text-indigo-400' : 'hover:bg-slate-700 text-slate-400 hover:text-white'}`}
              title="History"
            >
              <Clock className="w-5 h-5" />
            </button>
          </div>
          
          <form onSubmit={handleNavigate} className="flex-1 flex items-center relative">
            <Globe className="absolute left-3 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="Search or enter web address"
              className="w-full bg-slate-950 border border-slate-700 text-slate-300 rounded-lg py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:border-indigo-500 transition-all shadow-inner"
            />
          </form>
          
          <div>
             <button title="Extensions" className="p-1.5 flex items-center gap-1 hover:bg-indigo-900/50 bg-indigo-900/30 text-indigo-400 rounded-lg transition-colors font-bold text-[10px] uppercase tracking-widest border border-indigo-500/30">
               <Download className="w-3 h-3" />
               Auto-Detect
             </button>
          </div>
        </div>

        {/* Browser Content */}
        <div className="flex-1 relative bg-slate-950 flex flex-col">
          {showHistory && (
             <div className="absolute top-0 md:top-2 left-2 md:left-4 w-[calc(100%-16px)] md:w-80 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[300px]">
               <div className="p-3 border-b border-slate-800 bg-slate-950 flex justify-between items-center">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Browsing History</h4>
                  <button onClick={() => setHistory([])} className="text-[10px] uppercase font-bold tracking-widest text-red-400 hover:text-red-300">Clear</button>
               </div>
               <div className="overflow-y-auto flex-1 p-2 space-y-1">
                  {history.length === 0 ? (
                     <p className="text-slate-500 text-xs text-center p-4">No history yet. Start browsing!</p>
                  ) : (
                     history.map((item, idx) => (
                       <button 
                         key={idx}
                         onClick={() => {
                           openApp(item.url);
                           setShowHistory(false);
                         }}
                         className="w-full text-left px-3 py-2 hover:bg-slate-800 rounded-lg transition-colors flex flex-col gap-1"
                       >
                         <span className="text-sm font-medium text-slate-200 truncate w-full block">{item.url}</span>
                         <span className="text-[10px] text-slate-500 font-mono">{item.time.toLocaleTimeString()}</span>
                       </button>
                     ))
                  )}
               </div>
             </div>
          )}
          
          {isLoading && (
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
               <div className="w-10 h-10 border-4 border-slate-800 border-t-indigo-500 rounded-full animate-spin"></div>
               <p className="mt-4 text-slate-400 font-medium tracking-tight">Connecting to site...</p>
            </div>
          )}
          
          {!isBrowserActive ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8">
               <div className="text-center opacity-50 mb-6 flex flex-col items-center gap-2">
                 <div className="text-4xl">🌐</div>
                 <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Built-in Browser Active</h3>
               </div>
               <p className="text-slate-500 mb-8 max-w-md text-center text-sm">
                 Browse your favorite sites directly inside OmniSave to auto-detect and download videos in one click.
               </p>
               
               <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl w-full">
                 {QA_LINKS.map((link) => (
                   <button 
                     key={link.name}
                     onClick={() => openApp(link.url)}
                     className={`flex items-center gap-4 p-4 rounded-2xl border border-slate-800 ${link.color} transition-all`}
                   >
                     <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center shadow-inner border border-slate-800">
                       {link.icon}
                     </div>
                     <span className="font-bold text-slate-300 text-sm">{link.name}</span>
                   </button>
                 ))}
               </div>
            </div>
          ) : (
            <div className="flex-1 relative">
              {/* Due to X-Frame-Options we cannot actually embed these sites in a standard iframe. 
                  We show a mock overlay simulating "Browsing" instead */}
              <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                  <div className="max-w-md w-full bg-slate-900 rounded-[2rem] border border-slate-800 p-8 shadow-2xl">
                     <p className="text-slate-500 mb-4 text-[10px] font-mono bg-slate-950 p-2 rounded-lg border border-slate-800 truncate">{currentUrl}</p>
                     <h4 className="text-xl font-bold text-white mb-2">You are now browsing!</h4>
                     <p className="text-sm text-slate-400 mb-8">
                        Browse the site natively. Whenever a video is found, the OmniSave extension will light up.
                     </p>
                     
                     {/* Mock detected video */}
                     <div className="border border-indigo-500/30 bg-indigo-900/20 rounded-xl p-4 mb-4 text-left">
                        <div className="flex items-center gap-3 mb-2">
                           <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
                           <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">Media Detected</span>
                        </div>
                        <p className="text-xs text-slate-300 mb-4">1 High Quality Video found on this page.</p>
                        <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-indigo-600/20">
                           <Download className="w-4 h-4" /> Download Now
                        </button>
                     </div>
                  </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
