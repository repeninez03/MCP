import { Wrench } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Wrench className="text-orange-500" size={24} />
            <span className="text-xl font-bold text-white">Micro Enterprises Inc.</span>
          </div>
          
          <div className="flex gap-8 text-sm">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Micro Enterprises Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
