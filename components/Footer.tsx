export function Footer() {
  return (
    <footer className="mt-8 mb-4 mx-4">
      <div className="max-w-[1400px] mx-auto bg-slate-900/50 border border-slate-800 rounded-[2rem] px-6 py-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start mb-6 md:mb-0 space-x-6 md:order-2 text-sm font-medium">
            <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">
              Terms
            </a>
            <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">
              Contact
            </a>
          </div>
          <div className="mt-4 md:mt-0 md:order-1">
            <p className="text-center text-xs text-slate-500 font-medium">
              &copy; {new Date().getFullYear()} OmniSave. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
