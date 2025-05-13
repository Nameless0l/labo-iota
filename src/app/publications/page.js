import React from 'react';
import { Search, Filter, Download, ExternalLink, Calendar, Users, Tag } from 'lucide-react';

const PublicationsPage = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-700 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Publications
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Découvrez nos travaux de recherche et contributions scientifiques
            </p>
          </div>
        </div>
      </div>
      
      {/* Search and Filter */}
      <div className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-700 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filtrer par:
              </span>
              <select className="bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option value="">Tous les types</option>
                <option value="article">Articles scientifiques</option>
                <option value="conference">Conférences</option>
                <option value="book">Livres et chapitres</option>
                <option value="thesis">Thèses et mémoires</option>
              </select>
              <select className="bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option value="">Toutes les années</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
            </div>
            <div className="relative w-full md:w-auto">
              <input 
                type="text" 
                placeholder="Rechercher une publication..." 
                className="bg-gray-100 border border-gray-200 rounded-lg pl-10 pr-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Publications Content */}
      <div className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          {/* Latest Publications */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Publications récentes</h2>
            
            <div className="space-y-6">
              {/* Publication 1 - Hearing Aid Paper */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
                <div className="p-6">
                  <div className="flex items-center mb-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">2025</span>
                    <Tag className="w-4 h-4 mr-1" />
                    <span>Article scientifique</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    An Ontology-Based Expert System Approach for Hearing Aid Fitting in a Chaotic Environment
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Ngounou, G.M., Chana, A.M., Batchakui, B., Nguen, K.A., Fokouo Fogha, J.V.
                  </p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium text-gray-700">Journal:</span> Audiology Research, 15(2), 39
                  </p>
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex flex-wrap gap-2 mb-2 md:mb-0">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Prothèse auditive</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Ontologie</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Système expert</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">DHAFES</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-sm font-medium">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Lire
                      </a>
                      <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-sm font-medium">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Publication 2 - Malaria-CAM */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
                <div className="p-6">
                  <div className="flex items-center mb-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">2024</span>
                    <Tag className="w-4 h-4 mr-1" />
                    <span>Projet de recherche</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    CAM-MALARIA: Un système de surveillance du paludisme basé sur l'IoT pour le Cameroun
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Chana A.M., Batchakui B., et al.
                  </p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium text-gray-700">Projet:</span> Système de prédiction et de surveillance du paludisme
                  </p>
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex flex-wrap gap-2 mb-2 md:mb-0">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">IoT</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Paludisme</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Prédiction</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Santé publique</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-sm font-medium">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Lire
                      </a>
                      <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-sm font-medium">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Publication 3 - MPPT Solar Charge Controller */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
                <div className="p-6">
                  <div className="flex items-center mb-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">2024</span>
                    <Tag className="w-4 h-4 mr-1" />
                    <span>Rapport technique</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Conception et réalisation d'un régulateur de charge solaire MPPT
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Projet BENDO
                  </p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium text-gray-700">Contexte:</span> Solution aux coupures d'électricité au Cameroun par l'optimisation des systèmes photovoltaïques
                  </p>
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex flex-wrap gap-2 mb-2 md:mb-0">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Énergie solaire</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">MPPT</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Convertisseur abaisseur</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Électricité durable</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-sm font-medium">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Lire
                      </a>
                      <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-sm font-medium">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Articles scientifiques */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Articles scientifiques</h2>
            
            <div className="divide-y">
              {/* Article 1 - Hearing Aid */}
              <div className="py-4">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2025</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  An Ontology-Based Expert System Approach for Hearing Aid Fitting in a Chaotic Environment
                </h3>
                <p className="text-gray-600 mb-2">
                  Ngounou, G.M., Chana, A.M., Batchakui, B., Nguen, K.A., Fokouo Fogha, J.V.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium text-gray-700">Journal:</span> Audiology Research, 15(2), 39
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Prothèse auditive</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Ontologie</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">DHAFES</span>
                </div>
                <div className="flex items-center space-x-3">
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-xs font-medium">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Lire l'article
                  </a>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-xs font-medium">
                    <Download className="w-3 h-3 mr-1" />
                    Télécharger le PDF
                  </a>
                </div>
              </div>
              
              {/* Article 2 - I2HM Project */}
              <div className="py-4">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2023</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  I2HM: Internet of Things and Artificial Intelligence for Health Monitoring
                </h3>
                <p className="text-gray-600 mb-2">
                  Chana, A.M., Batchakui, B., Donsez, D., Tchana, A.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium text-gray-700">Publication:</span> Laboratoire d'Informatique de Grenoble, Université Grenoble Alpes
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">IoT</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Intelligence artificielle</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Santé</span>
                </div>
                <div className="flex items-center space-x-3">
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-xs font-medium">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Lire l'article
                  </a>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-xs font-medium">
                    <Download className="w-3 h-3 mr-1" />
                    Télécharger le PDF
                  </a>
                </div>
              </div>
              
              {/* Article 3 - MLI Inverter */}
              <div className="py-4">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2023</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  Conception et réalisation d'un onduleur MLI à onde sinusoïdale pure
                </h3>
                <p className="text-gray-600 mb-2">
                  Équipe BENDO
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium text-gray-700">Type:</span> Rapport technique
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Onduleur</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">MLI</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Électrification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-xs font-medium">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Lire l'article
                  </a>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-xs font-medium">
                    <Download className="w-3 h-3 mr-1" />
                    Télécharger le PDF
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                Voir plus d'articles
              </button>
            </div>
          </div>
          
          {/* Conférences */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Actes de conférences et présentations</h2>
            
            <div className="divide-y">
              {/* Conférence 1 - IoT et Développement Durable */}
              <div className="py-4">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2024</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  IoT au service du développement durable : Santé, Sécurité alimentaire et Sécurité routière
                </h3>
                <p className="text-gray-600 mb-2">
                  Chana, A.M.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium text-gray-700">Présentation:</span> Conférence sur les Objectifs de Développement Durable
                </p>
                <div className="flex items-center space-x-3">
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-xs font-medium">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Voir la présentation
                  </a>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-xs font-medium">
                    <Download className="w-3 h-3 mr-1" />
                    Télécharger le PDF
                  </a>
                </div>
              </div>
              
              {/* Conférence 2 - Malaria-CAM Project */}
              <div className="py-4">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2024</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  CAM-MALARIA: Système de surveillance en temps réel pour le paludisme au Cameroun
                </h3>
                <p className="text-gray-600 mb-2">
                  Équipe de recherche Malaria-CAM
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium text-gray-700">Conférence:</span> Symposium sur la santé publique et les technologies innovantes en Afrique
                </p>
                <div className="flex items-center space-x-3">
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-xs font-medium">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Lire l'acte
                  </a>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-xs font-medium">
                    <Download className="w-3 h-3 mr-1" />
                    Télécharger le PDF
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                Voir plus de conférences
              </button>
            </div>
          </div>
          
          {/* Projets de recherche */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Projets de recherche en cours</h2>
            
            <div className="divide-y">
              {/* Projet 1 - I2HM */}
              <div className="py-4">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2023-2025</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  I2HM: Internet of Things and Artificial Intelligence for Health Monitoring
                </h3>
                <p className="text-gray-600 mb-2">
                  En collaboration avec l'Université Grenoble Alpes et MIAI Grenoble
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium text-gray-700">Chercheurs principaux:</span> Chana A.M., Batchakui B., Donsez D., Tchana A.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium text-gray-700">Description:</span> Déploiement de capteurs connectés pour collecter des données environnementales et prédire les risques liés aux maladies vectorielles comme le paludisme.
                </p>
                <div className="flex items-center space-x-3">
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-xs font-medium">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Détails du projet
                  </a>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-xs font-medium">
                    <Download className="w-3 h-3 mr-1" />
                    Télécharger la présentation
                  </a>
                </div>
              </div>
              
              {/* Projet 2 - Hearing Aid */}
              <div className="py-4">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2022-2025</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  DHAFES: Dynamic Hearing Aid Fitting Expert System
                </h3>
                <p className="text-gray-600 mb-2">
                  École Nationale Supérieure Polytechnique de Yaoundé et Hôpital Régional de Bertoua
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium text-gray-700">Chercheurs:</span> Ngounou G.M., Chana A.M., Batchakui B., Nguen K.A., Fokouo Fogha J.V.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium text-gray-700">Description:</span> Développement d'un système expert basé sur l'ontologie pour l'ajustement personnalisé des prothèses auditives, notamment la prothèse Balafon.
                </p>
                <div className="flex items-center space-x-3">
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-xs font-medium">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Détails du projet
                  </a>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-xs font-medium">
                    <Download className="w-3 h-3 mr-1" />
                    Télécharger la présentation
                  </a>
                </div>
              </div>
              
              {/* Projet 3 - Sécurité routière */}
              <div className="py-4">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2023-2025</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  Réseau de capteurs pour la surveillance de la circulation dans les zones dangereuses
                </h3>
                <p className="text-gray-600 mb-2">
                  Étude de cas: Falaise de Dschang au Cameroun
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium text-gray-700">Chercheurs:</span> Équipe ODD11
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium text-gray-700">Description:</span> Système d'alerte automatique pour les automobilistes en zones dangereuses, intégrant surveillance des conditions du sol et suivi environnemental.
                </p>
                <div className="flex items-center space-x-3">
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-xs font-medium">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Détails du projet
                  </a>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-xs font-medium">
                    <Download className="w-3 h-3 mr-1" />
                    Télécharger la présentation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Export Options */}
      <div className="py-12 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Exporter les publications</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Téléchargez notre liste de publications dans différents formats pour faciliter leur citation dans vos travaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-white text-emerald-600 border border-emerald-200 hover:bg-emerald-50 transition px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center">
              <Download className="mr-2 w-4 h-4" />
              Exporter en BibTeX
            </a>
            <a href="#" className="bg-white text-emerald-600 border border-emerald-200 hover:bg-emerald-50 transition px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center">
              <Download className="mr-2 w-4 h-4" />
              Exporter en EndNote
            </a>
            <a href="#" className="bg-white text-emerald-600 border border-emerald-200 hover:bg-emerald-50 transition px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center">
              <Download className="mr-2 w-4 h-4" />
              Exporter en CSV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationsPage;