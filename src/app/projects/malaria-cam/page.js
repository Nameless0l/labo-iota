import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, Tag, Users, Download, ExternalLink, FileText } from 'lucide-react';

export const metadata = {
  title: 'CAM-MALARIA | Laboratoire d\'Électronique',
  description: 'Système de surveillance et de prédiction du paludisme basé sur l\'IoT et le machine learning pour la santé publique au Cameroun.',
};

export default function MalariaProjectPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* En-tête du projet avec un dégradé plus moderne et une superposition */}
      <section className="relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/malaria-header-bg.jpg"
            alt="Lutte contre le paludisme"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-700/70"></div>
          
          {/* Éléments décoratifs */}
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 -right-20 w-80 h-80 bg-red-300/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            href="/projects" 
            className="inline-flex items-center mb-6 text-red-200 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Retour aux projets</span>
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            CAM-MALARIA
          </h1>
          
          <p className="text-white/90 text-xl max-w-3xl mb-8 animate-slide-up">
            Système de surveillance et de prédiction du paludisme basé sur l'IoT et le machine learning pour améliorer la lutte contre cette maladie au Cameroun.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-slide-up delay-200">
            <div className="bg-white/10 backdrop-blur-sm rounded-full py-2 px-4 flex items-center">
              <Clock className="w-4 h-4 mr-2 text-red-300" />
              <span className="text-white/90">2021-2024</span>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-full py-2 px-4 flex items-center">
              <Tag className="w-4 h-4 mr-2 text-red-300" />
              <span className="text-white/90">ODD 3: Santé et bien-être</span>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-full py-2 px-4 flex items-center">
              <Users className="w-4 h-4 mr-2 text-red-300" />
              <span className="text-white/90">Équipe Santé</span>
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
                className="text-gray-700 hover:text-red-600 font-medium whitespace-nowrap border-b-2 border-transparent hover:border-red-600 pb-1 transition-all"
              >
                Contexte
              </a>
            </li>
            <li>
              <a 
                href="#objectifs" 
                className="text-gray-700 hover:text-red-600 font-medium whitespace-nowrap border-b-2 border-transparent hover:border-red-600 pb-1 transition-all"
              >
                Objectifs
              </a>
            </li>
            <li>
              <a 
                href="#methodologie" 
                className="text-gray-700 hover:text-red-600 font-medium whitespace-nowrap border-b-2 border-transparent hover:border-red-600 pb-1 transition-all"
              >
                Méthodologie
              </a>
            </li>
            <li>
              <a 
                href="#application" 
                className="text-gray-700 hover:text-red-600 font-medium whitespace-nowrap border-b-2 border-transparent hover:border-red-600 pb-1 transition-all"
              >
                Application
              </a>
            </li>
            <li>
              <a 
                href="#cartographie" 
                className="text-gray-700 hover:text-red-600 font-medium whitespace-nowrap border-b-2 border-transparent hover:border-red-600 pb-1 transition-all"
              >
                Cartographie
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
                <div className="w-12 h-1 bg-red-500 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-800">Contexte</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="lead text-xl">
                  Le paludisme demeure un problème de santé majeur en Afrique subsaharienne, notamment au Cameroun, où elle est responsable de 35 à 40 % des décès signalés dans les établissements de santé.
                </p>
                <p>
                  La maladie touche principalement les groupes vulnérables, tels que les femmes enceintes et les enfants de moins de cinq ans. Les principaux vecteurs de la maladie sont deux espèces de moustiques du complexe Anopheles gambiae : An. gambiae s.s. et An. arabiensis, qui transmettent principalement Plasmodium falciparum, le pathogène dominant du paludisme.
                </p>
                <p>
                  Au Cameroun, la lutte contre le paludisme repose sur l'utilisation de moustiquaires imprégnées d'insecticide (MII) pour réduire la transmission. Toutefois, le changement climatique impacte considérablement la dynamique de transmission en modifiant le comportement des vecteurs et en élargissant les zones endémiques, en raison de l'augmentation des températures et des précipitations.
                </p>
              </div>
              
              {/* Ajout d'une box d'info */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mt-8">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Plan Stratégique National</h3>
                <p className="text-gray-700">
                  Le Plan Stratégique National (PSN) de lutte contre le paludisme (2019-2023) vise à garantir un accès universel à des interventions efficaces, en se concentrant sur les populations à forte densité et les zones de transmission saisonnière. Les objectifs incluent une réduction de 60 % de la morbidité et de la mortalité par rapport à 2015.
                </p>
              </div>
            </section>

            {/* Objectifs */}
            <section id="objectifs" className="mb-20 scroll-mt-24">
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-red-500 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-800">Objectifs</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Le projet Malaria-Cam adopte une stratégie de Surveillance, de Suivi et d'Évaluation (SSE) pour améliorer les efforts de contrôle des vecteurs. Notre approche vise à :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                        <span className="text-red-700 font-medium">1</span>
                      </div>
                      <h3 className="font-medium text-gray-700">Collecte de données environnementales</h3>
                    </div>
                    <p className="text-gray-600 text-sm ml-11">
                      Déploiement de capteurs micro-climat pour la surveillance des paramètres environnementaux.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                        <span className="text-red-700 font-medium">2</span>
                      </div>
                      <h3 className="font-medium text-gray-700">Identification des gîtes larvaires</h3>
                    </div>
                    <p className="text-gray-600 text-sm ml-11">
                      Utiliser les données météorologiques pour identifier les habitats propices à la reproduction des moustiques.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                        <span className="text-red-700 font-medium">3</span>
                      </div>
                      <h3 className="font-medium text-gray-700">Prédiction des épidémies</h3>
                    </div>
                    <p className="text-gray-600 text-sm ml-11">
                      Développer des modèles de machine learning pour prédire les cas de paludisme et créer un système d'alerte.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                        <span className="text-red-700 font-medium">4</span>
                      </div>
                      <h3 className="font-medium text-gray-700">Cartographie en temps réel</h3>
                    </div>
                    <p className="text-gray-600 text-sm ml-11">
                      Développer un système de cartographie pour visualiser l'évolution des gîtes larvaires.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Méthodologie */}
            <section id="methodologie" className="mb-20 scroll-mt-24">
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-red-500 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-800">Méthodologie</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Notre approche méthodologique combine l'Internet des Objets (IoT) et l'analyse de données avancée :
                </p>
                
                <div className="relative mt-12 mb-16 pl-8 border-l-2 border-red-200">
                  <div className="space-y-12">
                    <div className="relative">
                      <div className="absolute -left-10 top-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <h3 className="text-xl font-bold text-red-700 mb-3">Modèles statistiques pour l'analyse de survie</h3>
                      <p>
                        L'étude utilise plusieurs modèles statistiques pour analyser la survie des moustiques, notamment l'analyse de Kaplan-Meier qui évalue la probabilité de survie et le taux de mortalité en fonction des conditions environnementales.
                      </p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-10 top-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <h3 className="text-xl font-bold text-red-700 mb-3">Modélisation des risques</h3>
                      <p>
                        Le modèle de risques proportionnels de Cox examine l'impact des précipitations sur les courbes de survie, fournissant une vue plus complète. Une modélisation de la probabilité de survie p<sub>i</sub>(T, RH) a également été réalisée pour estimer la mortalité des moustiques selon divers facteurs climatiques.
                      </p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-10 top-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <h3 className="text-xl font-bold text-red-700 mb-3">Déploiement de capteurs IoT</h3>
                      <p>
                        Déploiement de capteurs micro-climat et de stations de base LoRa pour la collecte de données environnementales (température, humidité, précipitation) en collaboration avec l'Université Grenoble Alpes (UGA).
                      </p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-10 top-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <h3 className="text-xl font-bold text-red-700 mb-3">Algorithmes de machine learning</h3>
                      <p>
                        Utilisation d'algorithmes de machine learning pour la prédiction des cas de paludisme et le développement d'un système d'alerte précoce basé sur les données collectées.
                      </p>
                    </div>
                  </div>
                </div>
                
        <p>
  L'évaluation de l'impact environnemental a inclus une analyse des données météorologiques pour étudier l'influence de la température, de l'humidité et des précipitations sur la survie et les sites de reproduction. Les résultats indiquent qu'un taux de mortalité inférieur à 0,04 (R<sub>0</sub> {'>'} 1) signifie une forte probabilité de transmission de la maladie, tandis qu'un taux supérieur à 0,04 (R<sub>0</sub> {'<'} 1) indique une réduction des risques d'infection.
</p>
              </div>
            </section>

            {/* Application */}
            <section id="application" className="mb-20 scroll-mt-24">
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-red-500 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-800">Application CAM-MALARIA</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  L'application CAM-MALARIA constitue l'interface utilisateur de notre système de surveillance du paludisme, offrant des fonctionnalités puissantes pour visualiser et analyser les données :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-gradient-to-br from-red-50 to-white rounded-xl shadow-md p-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Visualisation des données</h3>
                    <p className="text-gray-600">
                      Accès à des graphiques montrant la probabilité de survie d'An. gambiae s.s et de l'An arabiensis en fonction des données de température et d'humidité.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-red-50 to-white rounded-xl shadow-md p-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Cartographie en temps réel</h3>
                    <p className="text-gray-600">
                      Visualisation d'une carte en temps quasi réel illustrant l'évolution des gîtes larvaires, grâce aux données de température et d'humidité de l'air.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-red-50 to-white rounded-xl shadow-md p-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Système d'alerte</h3>
                    <p className="text-gray-600">
                      Alertes précoces sur les zones à risque élevé de prolifération de moustiques et de transmission du paludisme.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-red-50 to-white rounded-xl shadow-md p-6">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Analyse prédictive</h3>
                    <p className="text-gray-600">
                      Modèles de prédiction d'épidémies de paludisme basés sur des algorithmes de machine learning appliqués aux données collectées.
                    </p>
                  </div>
                </div>
                
                <div className="bg-red-700 text-white p-6 rounded-lg my-8">
                  <h3 className="text-xl font-bold mb-4">Résultat clé</h3>
                  <p className="text-red-50">
                    Les tests de l'application CAM-MALARIA dans la région de Bafoussam ont démontré une précision de prédiction des zones à risque de plus de 85%, permettant aux autorités sanitaires locales d'orienter efficacement leurs ressources de lutte contre le paludisme.
                  </p>
                </div>
              </div>
            </section>

            {/* Cartographie */}
            <section id="cartographie" className="mb-16 scroll-mt-24">
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-red-500 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-gray-800">Cartographie des gîtes larvaires</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  La cartographie des gîtes larvaires au Cameroun permet de visualiser et d'identifier les zones à risque selon différentes catégories :
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg my-8">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Légende de la carte d'apparition des gîtes larvaires</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="transform transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-red-600 rounded-sm mt-1 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-gray-800 mb-2">Conditions Favorables à la Prolifération</p>
                        <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Description :</span> Étangs, mares, et autres plans d'eau où l'eau ne s'écoule pas.</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Risque :</span> Conditions idéales pour la reproduction, en particulier lorsque la température est comprise entre 22 et 30 °C et l'humidité relative élevée.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="transform transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-600 rounded-sm mt-1 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-gray-800 mb-2">Zones d'Eau Temporaire</p>
                        <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Description :</span> Petits collecteurs d'eau, fossés, et zones inondées temporairement.</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Risque :</span> Peuvent devenir des habitats de reproduction lorsque les précipitations augmentent, surtout dans des conditions de température modérée.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="transform transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-yellow-500 rounded-sm mt-1 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-gray-800 mb-2">Etangs saisonniers</p>
                        <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Description :</span> Terrains dépourvus d'eau, exposés au soleil.</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Risque :</span> Bien que ces zones semblent non propices à la reproduction, elles peuvent devenir dangereuses si des changements climatiques modifient l'humidité et la température.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="transform transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-500 rounded-sm mt-1 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-gray-800 mb-2">Zones Asséchées</p>
                        <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Description :</span> Zones où la température descend en dessous de 18 °C ou dépasse 35 °C.</p>
                        <p className="text-sm text-gray-600"><span className="font-medium">Risque :</span> Ces conditions peuvent influencer la survie des moustiques, mais des fluctuations rapides dans l'environnement peuvent favoriser leur prolifération.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="transform transition-all duration-300 hover:scale-105">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="relative h-64 mb-4 overflow-hidden rounded-md img-zoom">
                      <Image
                        src="/images/projects/malaria-map.jpg"
                        alt="Carte d'apparition des gîtes larvaires au Cameroun"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-600 text-center font-medium">Figure 1. Carte d'apparition des gîtes larvaires au Cameroun (août 2024)</p>
                  </div>
                </div>
                
                <div className="transform transition-all duration-300 hover:scale-105">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="relative h-64 mb-4 overflow-hidden rounded-md img-zoom">
                      <Image
                        src="/images/projects/malaria-sensor.jpg"
                        alt="Capteur micro-climat déployé"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-600 text-center font-medium">Figure 2. Capteur micro-climat déployé dans la région de Bafoussam</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          
          {/* Barre latérale améliorée */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-lg sticky top-24">
              <h3 className="text-xl font-bold mb-6 text-red-700 border-b pb-3">Informations sur le projet</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Domaine
                </h4>
                <div className="flex flex-wrap gap-2 ml-4">
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full">Santé publique</span>
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded-full">Environnement</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Technologies utilisées
                </h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    IoT (Internet des Objets)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    LoRa (communication longue portée)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Machine Learning
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Capteurs environnementaux
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Cartographie interactive
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Détails du projet
                </h4>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Durée: 2021 - En cours
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Statut: Phase de déploiement
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Région pilote: Bafoussam
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Partenaire: Université Grenoble Alpes
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  Équipe
                </h4>
                <div className="space-y-4 ml-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-700 font-medium">FB</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Dr. Fatima BENDO</p>
                      <p className="text-xs text-gray-500">Chef de projet</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-700 font-medium">MM</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Dr. Michel MANGA</p>
                      <p className="text-xs text-gray-500">Épidémiologiste</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-700 font-medium">SK</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Sophie KAMGA</p>
                      <p className="text-xs text-gray-500">Ingénieure logiciel</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Projets liés
              </h4>
              <div className="space-y-4">
                <Link 
                  href="/projects/onduleur-mli" 
                  className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100 hover:bg-emerald-50 hover:border-emerald-200 transition-colors group"
                >
                  <div className="relative w-16 h-16 mr-3 overflow-hidden rounded-md">
                    <Image
                      src="/images/projects/onduleur-sinus.jpg"
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
                      src="/images/projects/palus.png"
                      alt="Malaria-CAM"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-gray-800 font-medium group-hover:text-emerald-700 transition-colors">Système de veille sanitaire contre le paludisme</span>
                </Link>
              </div>
              
              
              {/* Collaboration */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-700 mb-4">Collaboration</h4>
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-red-50 transition-colors">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-semibold text-gray-700">UGA</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Université Grenoble Alpes</p>
                      <p className="text-sm text-gray-600">Projet I2HM en collaboration</p>
                      <a href="#" className="text-red-600 hover:text-red-700 transition text-sm flex items-center mt-1">
                        Voir le partenariat <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Boutons d'action */}
              <div className="mt-8 border-t pt-6">
                <a 
                  href="#" 
                  className="bg-red-600 text-white w-full py-3 px-4 rounded-lg flex items-center justify-center font-medium hover:bg-red-700 transition-colors mb-3"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger la documentation
                </a>
                <a 
                  href="#" 
                  className="bg-white border border-red-200 text-red-600 w-full py-3 px-4 rounded-lg flex items-center justify-center font-medium hover:bg-red-50 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Accéder à l'application CAM-MALARIA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section CTA */}
      <div className="bg-gradient-to-r from-red-700 to-red-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Vous travaillez dans le domaine de la santé publique ?</h2>
          <p className="text-red-100 max-w-2xl mx-auto mb-8">
            Notre équipe peut vous aider à développer des solutions technologiques innovantes pour améliorer la surveillance et la prévention des maladies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-red-700 hover:bg-red-50 transition px-8 py-3 rounded-lg font-medium inline-block"
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