
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { LogoIcon, MenuIcon, CloseIcon } from './Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto max-w-6xl px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <LogoIcon className="w-8 h-8 text-primary" />
          <div className="flex flex-col">
             <span className={`font-bold text-xl ${isScrolled || isMenuOpen ? 'text-dark-text' : 'text-white'}`}>موجود</span>
             <span className={`text-xs font-english ${isScrolled || isMenuOpen ? 'text-muted-text' : 'text-gray-200'}`}>Mawjoud</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className={`font-semibold transition-colors ${isScrolled ? 'text-muted-text hover:text-primary' : 'text-white hover:text-accent'}`}>{link.name}</a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
            <Link to="/login" className={`font-semibold transition-colors px-4 py-2 rounded-btn ${isScrolled ? 'text-primary hover:bg-muted-bg' : 'text-white hover:bg-white/20'}`}>تسجيل الدخول</Link>
            <Link to="/login" className="bg-primary text-white font-bold px-5 py-2 rounded-btn shadow-sm hover:bg-primary-dark hover:scale-[0.98] hover:shadow-lg transition-all duration-150">انضم كتاجر</Link>
        </div>
        
        <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={isScrolled ? 'text-dark-text' : 'text-white'}>
                {isMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
            </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white pb-6 px-6 shadow-lg">
            <nav className="flex flex-col items-center gap-4 text-center">
                {NAV_LINKS.map((link) => (
                    <a key={link.name} href={link.href} className="font-semibold text-muted-text hover:text-primary w-full py-2">{link.name}</a>
                ))}
                 <div className="flex flex-col items-stretch w-full gap-3 pt-4 border-t border-gray-200">
                    <Link to="/login" className="font-semibold text-primary hover:bg-muted-bg px-4 py-2 rounded-btn">تسجيل الدخول</Link>
                    <Link to="/login" className="bg-primary text-white font-bold px-5 py-2 rounded-btn shadow-sm">انضم كتاجر</Link>
                </div>
            </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
