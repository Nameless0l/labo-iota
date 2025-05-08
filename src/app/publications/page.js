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
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
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
              {/* Publication 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
                <div className="p-6">
                  <div className="flex items-center mb-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">2024</span>
                    <Tag className="w-4 h-4 mr-1" />
                    <span>Article scientifique</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Amélioration de la prédiction du paludisme au Cameroun grâce à l'intégration de données météorologiques et environnementales
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Bendo F., Manga M., Kamga S., Ekambi T., Dupont P.
                  </p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">Journal:</span> African Journal of Environmental Health Sciences, 14(2), 125-138
                  </p>
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex flex-wrap gap-2 mb-2 md:mb-0">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Paludisme</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">IoT</span>
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
              
              {/* Publication 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
                <div className="p-6">
                  <div className="flex items-center mb-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">2023</span>
                    <Tag className="w-4 h-4 mr-1" />
                    <span>Article scientifique</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Conception et évaluation d'un régulateur de charge solaire MPPT à haut rendement pour les régions rurales du Cameroun
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Mbou R., Makongo J., Ndiaye F., Chana A.M.
                  </p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">Journal:</span> Renewable Energy in Sub-Saharan Africa, 8(3), 214-229
                  </p>
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex flex-wrap gap-2 mb-2 md:mb-0">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Énergie solaire</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">MPPT</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Électrification rurale</span>
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
              
              {/* Publication 3 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
                <div className="p-6">
                  <div className="flex items-center mb-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">2023</span>
                    <Tag className="w-4 h-4 mr-1" />
                    <span>Conférence</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    CAM-MALARIA: Un système de surveillance du paludisme basé sur l'IoT pour le Cameroun
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Bendo F., Kamga S., Manga M., Dupont P., Chana A.M.
                  </p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">Conférence:</span> 5th International Conference on IoT for Development, Cape Town, South Africa
                  </p>
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex flex-wrap gap-2 mb-2 md:mb-0">
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">IoT</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Paludisme</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Surveillance</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Capteurs</span>
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
              {/* Article 1 */}
              <div className="py-4">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2023</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  Development of a Low-Cost Pure Sine Wave Inverter for Rural Electrification in Cameroon
                </h3>
                <p className="text-gray-600 mb-2">
                  Mbou R., Makongo J., Chana A.M.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium">Journal:</span> IEEE Transactions on Power Electronics, 36(5), 5872-5885
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Onduleur</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">MLI</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Électrification rurale</span>
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
              
              {/* Article 2 */}
              <div className="py-4">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2022</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  IoT-Based Soil Quality Analysis for Crop Recommendation in Cameroon Agriculture
                </h3>
                <p className="text-gray-600 mb-2">
                  Tamo P., Fouda E., Chana A.M.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium">Journal:</span> Smart Agricultural Technology, 2(1), 45-58
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Agriculture</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">IoT</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Capteurs</span>
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
              
              {/* Article 3 */}
              <div className="py-4">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2022</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  Low-Cost Hearing Aid with Self-Adjustment Features: The Balafon Project
                </h3>
                <p className="text-gray-600 mb-2">
                  Bendo F., Makongo J., Chana A.M.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium">Journal:</span> Journal of Medical Devices, 16(3), 031004
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Santé</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Prothèse auditive</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">Technologies accessibles</span>
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
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Actes de conférences</h2>
            
            <div className="divide-y">
              {/* Conférence 1 */}
              <div className="py-4">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2024</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  IoT for Road Safety: A Case Study of Dschang Cliff Monitoring System
                </h3>
                <p className="text-gray-600 mb-2">
                  Ngom L., Kengne C., Chana A.M.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium">Conférence:</span> IEEE International Conference on Connected Vehicles, Johannesburg, South Africa
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
              
              {/* Conférence 2 */}
              <div className="py-4">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2023</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  Remote Monitoring of Pregnant Women in Rural Cameroon: A LoRaWAN Approach
                </h3>
                <p className="text-gray-600 mb-2">
                  Bendo F., Kamga S., Chana A.M.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium">Conférence:</span> Global Health Innovation Conference, Nairobi, Kenya
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
          
          {/* Thèses et mémoires */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Thèses et mémoires</h2>
            
            <div className="divide-y">
              {/* Thèse 1 */}
              <div className="py-4">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2023</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  Optimisation des systèmes MPPT pour installations photovoltaïques au Cameroun
                </h3>
                <p className="text-gray-600 mb-2">
                  Mbarga A.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium">Type:</span> Thèse de doctorat, Université de Yaoundé I
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium">Directeur:</span> Dr. Robert Mbou
                </p>
                <div className="flex items-center space-x-3">
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-xs font-medium">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Lire le résumé
                  </a>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-xs font-medium">
                    <Download className="w-3 h-3 mr-1" />
                    Télécharger le PDF
                  </a>
                </div>
              </div>
              
              {/* Mémoire 1 */}
              <div className="py-4">
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2024</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  Algorithmes d'IA pour la prédiction du paludisme basés sur les données environnementales
                </h3>
                <p className="text-gray-600 mb-2">
                  Atangana M.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium">Type:</span> Mémoire de Master, Université de Yaoundé I
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-medium">Encadrant:</span> Dr. Fatima Bendo
                </p>
                <div className="flex items-center space-x-3">
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-xs font-medium">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Lire le résumé
                  </a>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center text-xs font-medium">
                    <Download className="w-3 h-3 mr-1" />
                    Télécharger le PDF
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