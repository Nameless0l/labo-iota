'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasDarkBackground, setHasDarkBackground] = useState(false);
  
  // Obtenir le chemin actuel pour déterminer la page
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Mise à jour de isScrolled
      setIsScrolled(window.scrollY > 10);
      
      // Appliquer des règles différentes selon la page
      if (isHomePage) {
        // Sur la page d'accueil, le haut a un fond foncé
        setHasDarkBackground(window.scrollY <= 10);
      } else {
        // Sur les autres pages, le haut a un fond clair
        setHasDarkBackground(false);
      }
    };

    // Initialisation
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    // Nettoyage
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <img 
                src="/images/logo-iot.png" 
                alt="IoTA Logo" 
                className="h-10 w-auto" 
              />
              <span className={`ml-2 font-bold text-xl ${
                isScrolled || !hasDarkBackground ? 'text-emerald-600' : 'text-white'
              }`}>
                IoTA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className={`font-medium ${
              isScrolled || !hasDarkBackground 
                ? 'text-gray-700 hover:text-emerald-600' 
                : 'text-white hover:text-emerald-200'
            }`}>
              À propos
            </Link>
            <Link href="/projects" className={`font-medium ${
              isScrolled || !hasDarkBackground 
                ? 'text-gray-700 hover:text-emerald-600' 
                : 'text-white hover:text-emerald-200'
            }`}>
              Projets
            </Link>
            <Link href="/publications" className={`font-medium ${
              isScrolled || !hasDarkBackground 
                ? 'text-gray-700 hover:text-emerald-600' 
                : 'text-white hover:text-emerald-200'
            }`}>
              Publications
            </Link>
            <Link href="/team" className={`font-medium ${
              isScrolled || !hasDarkBackground 
                ? 'text-gray-700 hover:text-emerald-600' 
                : 'text-white hover:text-emerald-200'
            }`}>
              Équipe
            </Link>
            <Link href="/partners" className={`font-medium ${
              isScrolled || !hasDarkBackground 
                ? 'text-gray-700 hover:text-emerald-600' 
                : 'text-white hover:text-emerald-200'
            }`}>
              Partenaires
            </Link>
            <Link href="/contact" className={`font-medium px-4 py-2 rounded-lg ${
              isScrolled || !hasDarkBackground 
                ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                : 'bg-white text-emerald-600 hover:bg-emerald-50'
            }`}>
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={isScrolled || !hasDarkBackground ? 'text-gray-700' : 'text-white'} />
            ) : (
              <Menu className={isScrolled || !hasDarkBackground ? 'text-gray-700' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-3 p-3">
              <Link 
                href="/about"
                className="font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </Link>
              <Link 
                href="/projects"
                className="font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projets
              </Link>
              <Link 
                href="/publications"
                className="font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Publications
              </Link>
              <Link 
                href="/team"
                className="font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Équipe
              </Link>
              <Link 
                href="/partners"
                className="font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Partenaires
              </Link>
              <Link 
                href="/contact"
                className="font-medium bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-2 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;