import React from 'react';
import { ArrowRight, Award, Zap, Microscope, Activity, Shield } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-r from-emerald-600 to-teal-500">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
        </div>
        
        <div className="relative h-full flex flex-col justify-center items-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <img src="/images/logo-iot.png" alt="IoTA Logo" className="w-32 h-32" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            IoT & Applications
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-12">
            Solutions IoT innovantes au service du développement durable et de la société camerounaise
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <a href="/projects" className="bg-white text-emerald-700 hover:bg-emerald-100 transition px-8 py-3 rounded-lg font-medium flex items-center justify-center">
              Découvrir nos projets <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 transition px-8 py-3 rounded-lg font-medium flex items-center justify-center">
              Nous contacter
            </a>
          </div>
        </div>
      </div>
      
      {/* Mission Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Notre Mission</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Développer des solutions technologiques innovantes pour répondre aux défis du développement durable 
              et améliorer les conditions de vie au Cameroun.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Activity className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Santé</h3>
              <p className="text-gray-600">
                Systèmes de veille sanitaire pour le paludisme et suivi des femmes enceintes en zones rurales
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Énergie</h3>
              <p className="text-gray-600">
                Régulateurs solaires MPPT et onduleurs MLI pour l'accès à une électricité fiable et durable
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Microscope className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Agriculture</h3>
              <p className="text-gray-600">
                Analyse de la qualité des sols et recommandation de cultures adaptées aux conditions locales
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Sécurité</h3>
              <p className="text-gray-600">
                Surveillance de la circulation dans les zones à risque et prévention des accidents
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Projects */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-800 text-center">Projets Phares</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Project 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 bg-emerald-300 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded">Énergie</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Régulateur de charge solaire MPPT</h3>
                <p className="text-gray-600 mb-4">
                  Amélioration des performances des installations photovoltaïques grâce à un régulateur optimisé
                </p>
                <a href="/projects/mppt" className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center">
                  En savoir plus <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 bg-emerald-300 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded">Santé</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">CAM-MALARIA</h3>
                <p className="text-gray-600 mb-4">
                  Système de surveillance des paramètres environnementaux pour la prédiction du paludisme
                </p>
                <a href="/projects/malaria-cam" className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center">
                  En savoir plus <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 bg-emerald-300 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded">Énergie</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Onduleur MLI pur sinus</h3>
                <p className="text-gray-600 mb-4">
                  Conception d'un onduleur compact et performant générant une onde sinusoïdale pure
                </p>
                <a href="/projects/onduleur-mli" className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center">
                  En savoir plus <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="/projects" className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition">
              Tous nos projets <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* ODD Section */}
      <div className="py-20 bg-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Impact sur les ODD</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-600">
              Nos solutions IoT contribuent directement à l'atteinte des Objectifs de Développement Durable des Nations Unies
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition">
              <div className="bg-red-500 text-white text-lg font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2 text-gray-800">Santé et bien-être</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition">
              <div className="bg-yellow-500 text-white text-lg font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2 text-gray-800">Faim zéro</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition">
              <div className="bg-orange-500 text-white text-lg font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                7
              </div>
              <h3 className="font-semibold mb-2 text-gray-800">Énergie propre</h3>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition">
              <div className="bg-emerald-500 text-white text-lg font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                11
              </div>
              <h3 className="font-semibold mb-2 text-gray-800">Villes durables</h3>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-16 bg-emerald-700 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Collaborer avec notre laboratoire</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Vous êtes une entreprise, une institution ou un chercheur intéressé par l'IoT pour le développement durable ? 
            Contactez-nous pour explorer les possibilités de collaboration.
          </p>
          <a href="/contact" className="inline-flex items-center bg-white text-emerald-700 px-8 py-3 rounded-lg font-medium hover:bg-emerald-50 transition">
            Nous contacter
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;