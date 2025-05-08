import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Tag, Users, Download, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Régulateur de charge solaire MPPT | Laboratoire d\'Électronique',
  description: 'Projet de conception et réalisation d\'un régulateur de charge solaire MPPT amélioré pour les systèmes photovoltaïques au Cameroun.',
};

export default function MPPTProjectPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* En-tête du projet avec un dégradé plus moderne et une superposition */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/mppt-header-bg.jpg"
            alt="Energie solaire"
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
            Régulateur de charge solaire MPPT
          </h1>
          
          <p className="text-white/90 text-xl max-w-3xl mb-8 animate-slide-up">
            Conception et réalisation d'un régulateur de charge solaire MPPT amélioré pour optimiser 
            les performances des installations photovoltaïques.
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
                href="#contexte" 
                className="text-gray-700 hover:text-emerald-600 font-medium whitespace-nowrap border-b-2 border-transparent hover:border-emerald-600 pb-1 transition-all"
              >
                Contexte
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
            {/* Contexte */}
            <section id="contexte" className="mb-20 scroll-mt-24">
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-emerald-500 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-800">Contexte</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="lead text-xl">
                  Au Cameroun, les coupures de courant intempestives et fréquentes constituent une source importante de frustration et de difficultés pour les consommateurs.
                </p>
                <p>
                  Ces défaillances du réseau électrique perturbent les foyers et les entreprises, entraînant des pertes économiques considérables et une réduction de la qualité de vie.
                </p>
                <p>
                  L'énergie solaire photovoltaïque offre une solution prometteuse face à cette situation, mais elle présente un défi majeur : le faible rendement des panneaux solaires, généralement situé entre 16% et 23%, limite les performances globales du système.
                </p>
                <p>
                  Pour renforcer ces performances, il devient impératif d'utiliser un régulateur de charge solaire MPPT (Maximum Power Point Tracking) capable d'optimiser l'extraction de l'énergie.
                </p>
              </div>
              
              {/* Ajout d'une box d'info */}
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg mt-8">
                <h3 className="text-lg font-semibold text-emerald-800 mb-2">L'essentiel à savoir</h3>
                <p className="text-gray-700">
                  Un régulateur MPPT peut améliorer le rendement d'une installation photovoltaïque de 20 à 30% par rapport aux régulateurs conventionnels, en fonction des conditions d'ensoleillement et de température.
                </p>
              </div>
            </section>

            {/* Problématique */}
            <section className="mb-20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-emerald-500 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-800">Problématique</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Le faible rendement des panneaux solaires limite la production photovoltaïque, ce qui restreint le rendement global des installations. Pour améliorer les performances des installations photovoltaïques, notre stratégie s'est orientée vers l'amélioration des performances du régulateur de charge MPPT.
                </p>
                <p>
                  C'est dans cette optique que l'entreprise BENDO a initié une réflexion sur la conception et la réalisation d'un chargeur solaire MPPT en utilisant les technologies endogènes.
                </p>
                <p>
                  L'étude des régulateurs MPPT classiques a relevé des failles dans la mesure, ce qui a conduit à la problématique centrale : 
                </p>
                <blockquote className="border-l-4 border-emerald-500 pl-6 py-2 italic bg-gray-50 rounded-r-lg">
                  <p className="text-emerald-800">En quoi l'amélioration du circuit de mesure des régulateurs MPPT classiques peut améliorer leurs performances ?</p>
                </blockquote>
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
                  Ce projet visait à concevoir et à réaliser un régulateur de charge solaire MPPT amélioré qui corrige les limitations des conceptions existantes. Les principaux objectifs étaient les suivants :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <span className="text-emerald-700 font-medium">1</span>
                      </div>
                      <h3 className="font-medium">Conception du convertisseur</h3>
                    </div>
                    <p className="text-gray-600 text-sm ml-11">
                      Créer un convertisseur abaisseur adapté aux niveaux de tension des panneaux solaires et batteries.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <span className="text-emerald-700 font-medium">2</span>
                      </div>
                      <h3 className="font-medium">Développement algorithme</h3>
                    </div>
                    <p className="text-gray-600 text-sm ml-11">
                      Optimiser la charge de la batterie tout en suivant le point de puissance maximale.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <span className="text-emerald-700 font-medium">3</span>
                      </div>
                      <h3 className="font-medium">Système de commande</h3>
                    </div>
                    <p className="text-gray-600 text-sm ml-11">
                      Créer un système pour gérer le convertisseur basé sur l'algorithme MPPT.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <span className="text-emerald-700 font-medium">4</span>
                      </div>
                      <h3 className="font-medium">Simulation</h3>
                    </div>
                    <p className="text-gray-600 text-sm ml-11">
                      Simuler le comportement du régulateur à l'aide du logiciel Proteus.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <span className="text-emerald-700 font-medium">5</span>
                      </div>
                      <h3 className="font-medium">Gestion thermique</h3>
                    </div>
                    <p className="text-gray-600 text-sm ml-11">
                      Mettre en œuvre des dissipateurs thermiques pour la régulation de température.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                        <span className="text-emerald-700 font-medium">6</span>
                      </div>
                      <h3 className="font-medium">Réalisation et test</h3>
                    </div>
                    <p className="text-gray-600 text-sm ml-11">
                      Réaliser un prototype fonctionnel et tester ses performances en conditions réelles.
                    </p>
                  </div>
                </div>
                
                <p>
                  L'objectif ultime était d'améliorer le circuit de mesure des régulateurs MPPT classiques afin d'optimiser leurs performances globales.
                </p>
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
                      <h3 className="text-xl font-bold text-emerald-700 mb-3">Conception du convertisseur abaisseur</h3>
                      <p>
                        Nous avons développé un convertisseur CC-CC de type abaisseur (buck) capable d'adapter la tension d'entrée provenant des panneaux solaires (15V-70V) aux besoins de charge des batteries (12V ou 24V).
                      </p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-10 top-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h3 className="text-xl font-bold text-emerald-700 mb-3">Développement de l'algorithme MPPT</h3>
                      <p>
                        L'algorithme "Perturbation et Observation" (P&O) a été implémenté pour suivre dynamiquement le point de puissance maximale des panneaux solaires, en adaptant continuellement le rapport cyclique de la commande MLI en fonction des conditions d'ensoleillement.
                      </p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-10 top-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <h3 className="text-xl font-bold text-emerald-700 mb-3">Conception du circuit de mesure</h3>
                      <p>
                        Un circuit de mesure de tension avec isolation galvanique a été conçu pour séparer les circuits de puissance et de commande, réduisant ainsi l'impact des interférences de masse sur la précision des mesures.
                      </p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-10 top-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <h3 className="text-xl font-bold text-emerald-700 mb-3">Simulation et validation</h3>
                      <p>
                        Le comportement du système a été simulé à l'aide du logiciel Proteus pour valider les performances du convertisseur et de l'algorithme MPPT dans différentes conditions de fonctionnement.
                      </p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-10 top-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">5</span>
                      </div>
                      <h3 className="text-xl font-bold text-emerald-700 mb-3">Réalisation et tests</h3>
                      <p>
                        La conception a été implémentée sur PCB et le prototype a été assemblé et testé dans des conditions réelles d'utilisation.
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
                  Le projet a abouti avec succès à la conception et à la réalisation d'un prototype de régulateur de charge MPPT. Les principaux résultats sont les suivants :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-md p-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Convertisseur abaisseur</h3>
                    <p className="text-gray-600">
                      Conception fonctionnelle adaptant la tension d'entrée de 15V-70V pour charger des batteries de 12V ou 24V.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-md p-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Algorithme MPPT optimisé</h3>
                    <p className="text-gray-600">
                      Implémentation de l'algorithme "Perturbation et Observation" pour suivre dynamiquement le point de puissance maximale.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-md p-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Circuit de mesure amélioré</h3>
                    <p className="text-gray-600">
                      Circuit avec isolation galvanique réduisant l'impact des interférences de masse sur la précision des mesures.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl shadow-md p-6">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Gestion thermique efficace</h3>
                    <p className="text-gray-600">
                      Solution utilisant des dissipateurs thermiques pour réguler efficacement la température des composants.
                    </p>
                  </div>
                </div>
                
                <div className="bg-emerald-700 text-white p-6 rounded-lg my-8">
                  <h3 className="text-xl font-bold mb-4">Résultat clé</h3>
                  <p className="text-emerald-50">
                    Le prototype réalisé a démontré un gain de rendement d'environ 25% par rapport aux régulateurs conventionnels, confirmant ainsi l'efficacité des améliorations apportées au circuit de mesure.
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="transform transition-all duration-300 hover:scale-105">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="relative h-64 mb-4 overflow-hidden rounded-md img-zoom">
                      <Image
                        src="/images/mppt-schema-bloc.jpg"
                        alt="Schéma bloc du régulateur MPPT"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-600 text-center font-medium">Figure 1. Schéma bloc du régulateur MPPT</p>
                  </div>
                </div>
                
                <div className="transform transition-all duration-300 hover:scale-105">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="relative h-64 mb-4 overflow-hidden rounded-md img-zoom">
                      <Image
                        src="/images/mppt-algorithme.jpg"
                        alt="Algorithme MPPT"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-600 text-center font-medium">Figure 2. Algorithme MPPT</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="transform transition-all duration-300 hover:scale-105">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="relative h-64 mb-4 overflow-hidden rounded-md img-zoom">
                      <Image
                        src="/images/mppt-circuit-mesure.jpg"
                        alt="Circuit de mesure en tension avec isolation galvanique"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-600 text-center font-medium">Figure 3. Circuit de mesure en tension avec isolation galvanique</p>
                  </div>
                </div>
                
                <div className="transform transition-all duration-300 hover:scale-105">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="relative h-64 mb-4 overflow-hidden rounded-md img-zoom">
                      <Image
                        src="/images/mppt-simulation.jpg"
                        alt="Simulation du fonctionnement du convertisseur CC-CC"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-600 text-center font-medium">Figure 4. Simulation du fonctionnement du convertisseur CC-CC</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="transform transition-all duration-300 hover:scale-105">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="relative h-64 mb-4 overflow-hidden rounded-md img-zoom">
                      <Image
                        src="/images/mppt-pcb-front.jpg"
                        alt="Face avant du circuit imprimé"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-600 text-center font-medium">Figure 5. Face avant du circuit imprimé</p>
                  </div>
                </div>
                
                <div className="transform transition-all duration-300 hover:scale-105">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="relative h-64 mb-4 overflow-hidden rounded-md img-zoom">
                      <Image
                        src="/images/mppt-final-prototype.jpg"
                        alt="Prototype final assemblé"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-600 text-center font-medium">Figure 6. Prototype final assemblé</p>
                  </div>
                </div>
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
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-1 rounded-full">Énergie renouvelable</span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-1 rounded-full">Systèmes photovoltaïques</span>
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
                    Électronique de puissance
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Microcontrôleurs
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Algorithmes MPPT
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Isolation galvanique
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Simulation Proteus
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
                    Installations photovoltaïques domestiques
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Systèmes d'énergie solaire ruraux
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Alimentation de secours
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Applications IoT autonomes
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
                      <span className="text-emerald-700 font-medium">RM</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Dr. Robert MBOU</p>
                      <p className="text-xs text-gray-500">Chef de projet</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-700 font-medium">JM</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Jean MAKONGO</p>
                      <p className="text-xs text-gray-500">Ingénieur électronique</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-700 font-medium">FN</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Fanta NDIAYE</p>
                      <p className="text-xs text-gray-500">Ingénieure électronique</p>
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
                  href="/projects/onduleur-mli-onde-sinusoidale" 
                  className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100 hover:bg-emerald-50 hover:border-emerald-200 transition-colors group"
                >
                  <div className="relative w-16 h-16 mr-3 overflow-hidden rounded-md">
                    <Image
                      src="/images/onduleur-thumb.jpg"
                      alt="Onduleur MLI"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-gray-800 font-medium group-hover:text-emerald-700 transition-colors">Onduleur MLI à onde sinusoïdale pure</span>
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
            Notre équipe peut vous aider à développer des solutions sur mesure pour l'optimisation des systèmes d'énergie renouvelable.
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