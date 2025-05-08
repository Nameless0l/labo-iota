import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-24 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="animate-float mb-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-6xl font-bold text-emerald-700">404</span>
            </div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-emerald-200 rounded-full opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-emerald-300 rounded-full opacity-60"></div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 animate-fade-in">
          Page non trouvée
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          Vous pouvez revenir à la page d'accueil ou explorer nos projets.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up delay-200">
          <Link 
            href="/" 
            className="bg-emerald-600 text-white hover:bg-emerald-700 transition px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center"
          >
            <Home className="mr-2 w-5 h-5" />
            Retour à l'accueil
          </Link>
          <Link 
            href="/projects" 
            className="bg-white text-emerald-600 border border-emerald-200 hover:bg-emerald-50 transition px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Explorer nos projets
          </Link>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-8 max-w-xl mx-auto animate-slide-up delay-300">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">
            Vous cherchez quelque chose en particulier ?
          </h2>
          <div className="flex mb-4">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Rechercher sur le site..." 
                className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Vous pouvez également consulter notre <Link href="/sitemap" className="text-emerald-600 hover:underline">plan du site</Link> ou <Link href="/contact" className="text-emerald-600 hover:underline">nous contacter</Link> si vous avez besoin d'aide.
          </p>
        </div>
      </div>
    </div>
  );
}