// src/components/PageNav.tsx
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

interface PageNavProps {
  backTo?: {
    label: string;
    href: string;
  };
}

export const PageNav = ({ backTo }: PageNavProps) => {
  return (
    <div className="fixed top-6 left-6 z-50 flex items-center gap-3">
      <Link
        to="/"
        className="group flex items-center gap-2 px-4 py-2.5 rounded-full 
                   bg-white/5 backdrop-blur-md border border-white/10
                   hover:bg-white/10 hover:border-white/20 
                   transition-all duration-200"
      >
        <Home size={16} className="text-cyan-400" />
        <span className="text-sm font-medium text-white/90">Accueil</span>
      </Link>

      {backTo && (
        <Link
          to={backTo.href}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full 
                     bg-white/5 backdrop-blur-md border border-white/10
                     hover:bg-white/10 hover:border-white/20 
                     transition-all duration-200"
        >
          <ArrowLeft size={16} className="text-white/60 group-hover:-translate-x-0.5 transition-transform" />
          <span className="text-sm font-medium text-white/90">{backTo.label}</span>
        </Link>
      )}
    </div>
  );
}