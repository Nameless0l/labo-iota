import React from 'react';
import { ArrowRight, Filter, Search } from 'lucide-react';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-700 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Projets
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Découvrez nos solutions technologiques innovantes pour le développement durable au Cameroun
            </p>
          </div>
        </div>
      </div>
      
      {/* Projects Filter */}
      <div className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-700 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filtrer par:
              </span>
              <select className="bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option value="">Tous les domaines</option>
                <option value="energy">Énergie</option>
                <option value="health">Santé</option>
                <option value="agriculture">Agriculture</option>
                <option value="infrastructure">Infrastructure</option>
              </select>
              <select className="bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option value="">Tous les ODD</option>
                <option value="odd2">ODD 2 - Faim zéro</option>
                <option value="odd3">ODD 3 - Santé et bien-être</option>
                <option value="odd7">ODD 7 - Énergie propre</option>
                <option value="odd11">ODD 11 - Villes durables</option>
              </select>
            </div>
            <div className="relative w-full md:w-auto">
              <input 
                type="text" 
                placeholder="Rechercher un projet..." 
                className="bg-gray-100 border border-gray-200 rounded-lg pl-10 pr-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Énergie</h2>
          <p className="text-gray-600 mb-8">Des solutions innovantes pour un accès durable à l'électricité</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/images/projects/mppt-schema-bloc.png" 
                  alt="Régulateur de charge solaire MPPT" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ODD 7
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Régulateur de charge solaire MPPT</h3>
                <p className="text-gray-600 mb-6">
                  Conception et réalisation d'un régulateur de charge solaire MPPT optimisé pour améliorer le rendement des installations photovoltaïques au Cameroun.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-xs font-medium text-emerald-800">RM</span>
                    </div>
                    <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-xs font-medium text-emerald-800">JM</span>
                    </div>
                    <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-xs font-medium text-emerald-800">FN</span>
                    </div>
                  </div>
                  <a 
                    href="/projects/regulateur-charge-solaire-mppt" 
                    className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center"
                  >
                    Détails <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/images/projects/onduleur-sinus.jpg" 
                  alt="Onduleur MLI pur sinus" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ODD 7
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Onduleur MLI pur sinus</h3>
                <p className="text-gray-600 mb-6">
                  Développement d'un onduleur compact et performant générant une onde sinusoïdale pure, adapté aux besoins énergétiques locaux.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-xs font-medium text-emerald-800">RM</span>
                    </div>
                    <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-xs font-medium text-emerald-800">AM</span>
                    </div>
                  </div>
                  <a 
                    href="/projects/onduleur-mli-pur-sinus" 
                    className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center"
                  >
                    Détails <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Santé</h2>
          <p className="text-gray-600 mb-8">Technologies IoT pour améliorer l'accès aux soins et lutter contre les maladies</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Project 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/images/projects/palus.png" 
                  alt="CAM-MALARIA" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ODD 3
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">CAM-MALARIA</h3>
                <p className="text-gray-600 mb-6">
                  Système de surveillance des paramètres environnementaux pour la prédiction et la lutte contre le paludisme au Cameroun.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-xs font-medium text-emerald-800">FB</span>
                    </div>
                    <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-xs font-medium text-emerald-800">MM</span>
                    </div>
                    <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-xs font-medium text-emerald-800">SK</span>
                    </div>
                  </div>
                  <a 
                    href="/projects/malaria-cam" 
                    className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center"
                  >
                    Détails <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/images/projects/femmes.png" 
                  alt="Suivi des femmes enceintes" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ODD 3
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Suivi des femmes enceintes</h3>
                <p className="text-gray-600 mb-6">
                  Réseau de capteurs pour le suivi à distance des femmes enceintes dans les zones rurales, améliorant l'accès aux soins prénataux.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-xs font-medium text-emerald-800">FB</span>
                    </div>
                    <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-xs font-medium text-emerald-800">SK</span>
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center"
                  >
                    Détails <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Project 5 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/images/projects/prothese.png" 
                  alt="Prothèse auditive Balafon" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ODD 3
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Prothèse auditive Balafon</h3>
                <p className="text-gray-600 mb-6">
                  Développement d'une prothèse auditive à faible coût et auto-paramétrable, adaptée au contexte local.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-xs font-medium text-emerald-800">FB</span>
                    </div>
                    <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-xs font-medium text-emerald-800">JM</span>
                    </div>
                  </div>
                  <a 
                    href="/projects/balafon" 
                    className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center"
                  >
                    Détails <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Agriculture</h2>
          <p className="text-gray-600 mb-8">Solutions IoT pour la sécurité alimentaire et l'agriculture durable</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Project 6 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/images/projects/recommendation.png" 
                  alt="Système de recommandation de cultures" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ODD 2
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Système de recommandation de cultures</h3>
                <p className="text-gray-600 mb-6">
                  Analyse de la qualité des sols et recommandation des cultures les plus adaptées grâce à un réseau de capteurs connectés.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-xs font-medium text-emerald-800">PT</span>
                    </div>
                    <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-xs font-medium text-emerald-800">EF</span>
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center"
                  >
                    Détails <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Infrastructure</h2>
          <p className="text-gray-600 mb-8">Technologies pour des infrastructures plus sûres et durables</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 7 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/images/projects/falaise.png" 
                  alt="Sécurité routière - Falaise de Dschang" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    ODD 11
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Sécurité routière - Falaise de Dschang</h3>
                <p className="text-gray-600 mb-6">
                  Réseau de capteurs pour la surveillance de la circulation et la prévention des accidents dans des zones dangereuses.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-xs font-medium text-emerald-800">LN</span>
                    </div>
                    <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-xs font-medium text-emerald-800">CK</span>
                    </div>
                  </div>
                  <a 
                    href="#" 
                    className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center"
                  >
                    Détails <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-emerald-600 to-teal-500 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Vous avez un défi à relever ?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Notre équipe peut vous aider à développer des solutions IoT sur mesure pour répondre à vos besoins spécifiques en matière de développement durable.
          </p>
          <a href="/contact" className="bg-white text-emerald-600 hover:bg-emerald-50 transition px-8 py-3 rounded-lg font-medium inline-block">
            Discuter de votre projet
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;