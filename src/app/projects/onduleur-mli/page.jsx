import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Tag, Users, Download, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Onduleur MLI pur sinus | Laboratoire d\'Électronique',
  description: 'Projet de conception et réalisation d\'un onduleur MLI pur sinus capable de convertir une tension de 12V CC en une tension de 230V CA sinusoïdale.',
};

export default function OnduleurMLIProjectPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* En-tête du projet avec un dégradé plus moderne et une superposition */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/onduleur-header-bg.jpg"
            alt="Onduleur MLI"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-700/70"></div>
          
          {/* Éléments décoratifs */}
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 -right-20 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            href="/projects" 
            className="inline-flex items-center mb-6 text-emerald-200 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Retour aux projets</span>
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Onduleur MLI pur sinus
          </h1>
          
          <p className="text-white/90 text-xl max-w-3xl mb-8 animate-slide-up">
            Conception et réalisation d'un onduleur générant une onde sinusoïdale pure, compact et performant pour les systèmes d'énergie autonomes.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-slide-up delay-200">
            <div className="bg-white/10 backdrop-blur-sm rounded-full py-2 px-4 flex items-center">
              <Clock className="w-4 h-4 mr-2 text-emerald-300" />
              <span className="text-white/90">2023-2024</span>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-full py-2 px-4 flex items-center">
              <Tag className="w-4 h-4 mr-2 text-emerald-300" />
              <span className="text-white/90">ODD 7: Énergie propre</span>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-full py-2 px-4 flex items-center">
              <Users className="w-4 h-4 mr-2 text-emerald-300" />
              <span className="text-white/90">Équipe Énergie</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation de projet stylisée */}
      <div className="bg-white shadow-sm border-b sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <ul className="flex overflow-x-auto space-x-8 py-4">
            <li>
              <a 
                href="#problematique" 
                className="text-gray-700 hover:text-emerald-600 font-medium whitespace-nowrap border-b-2 border-transparent hover:border-emerald-600 pb-1 transition-all"
              >
                Problématique
              </a>
            </li>
            <li>
              <a 
                href="#objectifs" 
                className="text-gray-700 hover:text-emerald-600 font-medium whitespace-nowrap border-b-2 border-transparent hover:border-emerald-600 pb-1 transition-all"
              >
                Objectifs
              </a>
            </li>
            <li>
              <a 
                href="#methodologie" 
                className="text-gray-700 hover:text-emerald-600 font-medium whitespace-nowrap border-b-2 border-transparent hover:border-emerald-600 pb-1 transition-all"
              >
                Méthodologie
              </a>
            </li>
            <li>
              <a 
                href="#resultats" 
                className="text-gray-700 hover:text-emerald-600 font-medium whitespace-nowrap border-b-2 border-transparent hover:border-emerald-600 pb-1 transition-all"
              >
                Résultats
              </a>
            </li>
            <li>
              <a 
                href="#illustrations" 
                className="text-gray-700 hover:text-emerald-600 font-medium whitespace-nowrap border-b-2 border-transparent hover:border-emerald-600 pb-1 transition-all"
              >
                Illustrations
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Problématique */}
            <section id="problematique" className="mb-20 scroll-mt-24">
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-emerald-500 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-800">Problématique</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="lead text-xl">
                  L'accès à une source d'électricité stable et fiable constitue un frein majeur au développement économique et social dans de nombreux pays en développement.
                </p>
                <p>
                  Les coupures fréquentes et les infrastructures électriques souvent insuffisantes pénalisent lourdement les activités économiques et la qualité de vie. Face à cette situation, les solutions alternatives comme les groupes électrogènes (polluants, bruyants, coûteux) ou les systèmes photovoltaïques (nécessitant une conversion et un stockage d'énergie) présentent des limites.
                </p>
                <p>
                  Les onduleurs, qui convertissent le courant continu (CC) des batteries en courant alternatif (CA) utilisable par les appareils, sont essentiels. Cependant, la majorité des onduleurs disponibles sur le marché local sont importés, chers, et génèrent souvent des ondes de sortie de qualité médiocre (carrée ou sinusoïdale modifiée), ce qui peut endommager les équipements électroniques sensibles.
                </p>
                <p>
                  Il n'existe pas de production locale d'onduleurs capables de fournir une onde sinusoïdale pure, similaire à celle du réseau électrique standard.
                </p>
                <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 italic bg-gray-50 rounded-r-lg">
                  <p className="text-emerald-800">Comment concevoir un onduleur générant une onde sinusoïdale pure, qui soit à la fois compact, performant et potentiellement plus abordable, en tirant parti des microcontrôleurs et des techniques modernes d'électronique de puissance ?</p>
                </blockquote>
              </div>
              
              {/* Ajout d'une box d'info */}
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg mt-8">
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">L'essentiel à savoir</h3>
                <p className="text-gray-700">
                  Une onde sinusoïdale pure est essentielle pour le bon fonctionnement des appareils électroniques sensibles. Contrairement aux onduleurs à onde carrée ou modifiée, un onduleur à onde sinusoïdale pure fournit une alimentation similaire à celle du réseau électrique, garantissant ainsi la longévité des équipements connectés.
                </p>
              </div>
            </section>

            {/* Objectifs */}
            <section id="objectifs" className="mb-20 scroll-mt-24">
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-emerald-500 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-800">Objectifs</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  L'objectif principal de ce travail était de <strong>concevoir et réaliser un prototype fonctionnel d'onduleur MLI (Modulation de Largeur d'Impulsion) capable de convertir une tension de 12V CC en une tension de 230V CA sinusoïdale.</strong>
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <span className="text-emerald-700 font-medium">1</span>
                      </div>
                      <h3 className="font-medium text-gray-700">Convertisseur CC-CC</h3>
                    </div>
                    <p className="text-gray-600 text-sm ml-11">
                      Transformer la tension d'entrée de 12V CC en une tension continue plus élevée (cible de 400V CC).
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <span className="text-emerald-700 font-medium">2</span>
                      </div>
                      <h3 className="font-medium text-gray-700">Convertisseur CC-CA</h3>
                    </div>
                    <p className="text-gray-600 text-sm ml-11">
                      Générer une tension alternative sinusoïdale de 230V (valeur efficace) à 50 Hz à partir de la tension continue de 400V.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Méthodologie */}
            <section id="methodologie" className="mb-20 scroll-mt-24">
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-emerald-500 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-800">Méthodologie</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Notre approche méthodologique s'est articulée autour de plusieurs axes complémentaires :
                </p>
                
                <div className="relative mt-12 mb-16 pl-8 border-l-2 border-emerald-200">
                  <div className="space-y-12">
                    <div className="relative">
                      <div className="absolute -left-10 top-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <h3 className="text-xl font-bold text-emerald-700 mb-3">Conception du convertisseur CC-CC</h3>
                      <p>
                        Nous avons adopté une architecture de type "push-pull" utilisant un circuit intégré SG3525 et des transformateurs à noyau de ferrite pour élever la tension de 12V à environ 400V CC.
                      </p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-10 top-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h3 className="text-xl font-bold text-emerald-700 mb-3">Conception du convertisseur CC-CA</h3>
                      <p>
                        Mise en œuvre d'un onduleur en pont complet (pont en H) commandé par un microcontrôleur PIC16F88 pour générer une onde sinusoïdale à partir de la tension continue.
                      </p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-10 top-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <h3 className="text-xl font-bold text-emerald-700 mb-3">Implémentation de la MLIS</h3>
                      <p>
                        Développement de la Modulation de Largeur d'Impulsion Sinusoïdale sur le microcontrôleur PIC16F88 pour garantir une forme d'onde de sortie sinusoïdale pure.
                      </p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-10 top-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <h3 className="text-xl font-bold text-emerald-700 mb-3">Conception du filtre de sortie</h3>
                      <p>
                        Mise en place d'un filtre LC approprié pour éliminer les harmoniques indésirables et obtenir une forme d'onde sinusoïdale pure.
                      </p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-10 top-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">5</span>
                      </div>
                      <h3 className="text-xl font-bold text-emerald-700 mb-3">Réalisation et tests</h3>
                      <p>
                        Assemblage du prototype et réalisation de tests pour valider les performances en conditions réelles d'utilisation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Résultats */}
            <section id="resultats" className="mb-20 scroll-mt-24">
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-emerald-500 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-800">Résultats</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Le projet a permis d'aboutir à la réalisation et à la validation d'un prototype d'onduleur MLI pur sinus présentant les caractéristiques suivantes :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-md p-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Architecture Innovante</h3>
                    <p className="text-gray-600">
                      Conception en deux étages avec un convertisseur "push-pull" et un onduleur en pont complet commandé par microcontrôleur.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-md p-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Compacité</h3>
                    <p className="text-gray-600">
                      Réduction significative de la taille et du poids grâce aux transformateurs haute fréquence à noyau de ferrite.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-md p-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Sortie Sinusoïdale Pure</h3>
                    <p className="text-gray-600">
                      Génération d'une tension de sortie sinusoïdale pure à 50 Hz avec une tension efficace proche de 230V.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-md p-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Coût Maîtrisé</h3>
                    <p className="text-gray-600">
                      Coût de réalisation du prototype d'environ 158 500 FCFA, démontrant le potentiel d'une solution plus abordable.
                    </p>
                  </div>
                </div>
                
                <div className="bg-emerald-700 text-white p-6 rounded-lg my-8">
                  <h3 className="text-xl font-bold mb-4">Résultat clé</h3>
                  <p className="text-emerald-50">
                    Le prototype réalisé délivre une puissance nominale de 1000 Watts avec un rendement cible de 85%, démontrant la viabilité d'une production locale d'onduleurs performants à onde sinusoïdale pure.
                  </p>
                </div>
              </div>
            </section>

            {/* Illustrations avec effet de survol */}
            <section id="illustrations" className="mb-16 scroll-mt-24">
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-emerald-500 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-800">Illustrations</h2>
              </div>
              
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="transform transition-all duration-300 hover:scale-105">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="relative h-64 mb-4 overflow-hidden rounded-md img-zoom">
                      <Image
                        src="/images/projects/onduleur-schema.jpg"
                        alt="Schéma du convertisseur CC-CC"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-600 text-center font-medium">Figure 1. Schéma du convertisseur CC-CC</p>
                  </div>
                </div>
                
                <div className="transform transition-all duration-300 hover:scale-105">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="relative h-64 mb-4 overflow-hidden rounded-md img-zoom">
                      <Image
                        src="/images/projects/onduleur-prototype.jpg"
                        alt="Prototype de l'onduleur"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-600 text-center font-medium">Figure 2. Prototype de l'onduleur</p>
                  </div>
                </div>
              </div> */}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="transform transition-all duration-300 hover:scale-105">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="relative h-64 mb-4 overflow-hidden rounded-md img-zoom">
                      <Image
                        src="/images/projects/onduleur-sinus.jpg"
                        alt="Onde sinusoïdale générée"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-600 text-center font-medium">Figure 1. Illustration</p>
                  </div>
                </div>
{/*                 
                <div className="transform transition-all duration-300 hover:scale-105">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="relative h-64 mb-4 overflow-hidden rounded-md img-zoom">
                      <Image
                        src="/images/projects/onduleur-circuit.jpg"
                        alt="Circuit de l'onduleur"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-600 text-center font-medium">Figure 4. Circuit de l'onduleur</p>
                  </div>
                </div> */}
              </div>
            </section>
          </div>
          
          {/* Barre latérale améliorée */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-lg sticky top-24">
              <h3 className="text-xl font-bold mb-6 text-emerald-700 border-b pb-3">Informations sur le projet</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Domaine
                </h4>
                <div className="flex flex-wrap gap-2 ml-4">
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-1 rounded-full">Électronique de puissance</span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-1 rounded-full">Énergie renouvelable</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Technologies utilisées
                </h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Microcontrôleur PIC16F88
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Circuit intégré SG3525
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    MLI Sinusoïdale (MLIS)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Transformateurs ferrite
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Pont en H
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Spécifications
                </h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Tension d'entrée: 12V CC
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Tension de sortie: 230V CA (240V mesurés)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Fréquence: 50 Hz
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Puissance: 1000 Watts
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Rendement cible: 85%
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Applications
                </h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Systèmes photovoltaïques autonomes
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Systèmes d'alimentation de secours
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Équipements électroniques sensibles
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Zones rurales sans accès au réseau
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Équipe
                </h4>
                <div className="space-y-4 ml-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-700 font-medium">AC</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Dr. Anne CHANA</p>
                      <p className="text-xs text-gray-500">Superviseur</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                Projets liés
              </h4>
              <div className="space-y-4">
                <Link 
                  href="/projects/regulateur-charge-solaire-mppt" 
                  className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100 hover:bg-emerald-50 hover:border-emerald-200 transition-colors group"
                >
                  <div className="relative w-16 h-16 mr-3 overflow-hidden rounded-md">
                    <Image
                      src="/images/mppt-thumb.jpg"
                      alt="Régulateur MPPT"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-gray-800 font-medium group-hover:text-emerald-700 transition-colors">Régulateur de charge solaire MPPT</span>
                </Link>
                
                <Link 
                  href="/projects/malaria-cam" 
                  className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100 hover:bg-emerald-50 hover:border-emerald-200 transition-colors group"
                >
                  <div className="relative w-16 h-16 mr-3 overflow-hidden rounded-md">
                    <Image
                      src="/images/malaria-cam-thumb.jpg"
                      alt="Malaria-CAM"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-gray-800 font-medium group-hover:text-emerald-700 transition-colors">Système de veille sanitaire contre le paludisme</span>
                </Link>
              </div>
              
              {/* Boutons d'action */}
              <div className="mt-8 border-t pt-6">
                <a 
                  href="#" 
                  className="bg-emerald-600 text-white w-full py-3 px-4 rounded-lg flex items-center justify-center font-medium hover:bg-emerald-700 transition-colors mb-3"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger la documentation
                </a>
                <a 
                  href="#" 
                  className="bg-white border border-emerald-200 text-emerald-600 w-full py-3 px-4 rounded-lg flex items-center justify-center font-medium hover:bg-emerald-50 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Voir la publication scientifique
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section CTA */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Vous avez un projet similaire en tête ?</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
            Notre équipe peut vous aider à développer des solutions d'alimentation électrique adaptées à vos besoins spécifiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-emerald-700 hover:bg-emerald-50 transition px-8 py-3 rounded-lg font-medium inline-block"
            >
              Discuter de votre projet
            </Link>
            <Link 
              href="/projects" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition px-8 py-3 rounded-lg font-medium inline-block"
            >
              Explorer d'autres projets
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}