import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Users, Clock, PenTool , ExternalLink } from 'lucide-react';

export default function MalariaProjectPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Project Header */}
      <div className="bg-red-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-2">
            <Link href="/projects" className="flex items-center text-red-200 hover:text-white transition">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Retour aux projets
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-4">CAM-MALARIA</h1>
          <div className="flex flex-wrap items-center text-red-100 mb-6">
            <div className="flex items-center mr-6 mb-2">
              <Users className="w-5 h-5 mr-2" />
              <span>Équipe Santé</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <Clock className="w-5 h-5 mr-2" />
              <span>2021-2024</span>
            </div>
            <div className="flex items-center mb-2">
              <PenTool  className="w-5 h-5 mr-2" />
              <span>Santé & Environnement</span>
            </div>
          </div>
          <div className="bg-red-800 inline-block px-3 py-1 rounded">
            ODD 3: Santé et bien-être
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Contexte</h2>
                <p className="text-gray-700 mb-6">
                  Le paludisme demeure un problème de santé majeur en Afrique subsaharienne, notamment au Cameroun, 
                  où elle est responsable de 35 à 40 % des décès signalés dans les établissements de santé. La maladie 
                  touche principalement les groupes vulnérables, tels que les femmes enceintes et les enfants de moins 
                  de cinq ans. Les principaux vecteurs de la maladie sont deux espèces de moustiques du complexe 
                  Anopheles gambiae : An. gambiae s.s. et An. arabiensis, qui transmettent principalement Plasmodium 
                  falciparum, le pathogène dominant du paludisme.
                </p>
                <p className="text-gray-700 mb-6">
                  Au Cameroun, la lutte contre le paludisme repose sur l'utilisation de moustiquaires imprégnées 
                  d'insecticide (MII) pour réduire la transmission. Toutefois, le changement climatique impacte 
                  considérablement la dynamique de transmission en modifiant le comportement des vecteurs et en 
                  élargissant les zones endémiques, en raison de l'augmentation des températures et des précipitations.
                </p>
                <p className="text-gray-700 mb-6">
                  Le Plan Stratégique National (PSN) de lutte contre le paludisme (2019-2023) vise à garantir un accès 
                  universel à des interventions efficaces, en se concentrant sur les populations à forte densité et les 
                  zones de transmission saisonnière. Les objectifs incluent une réduction de 60 % de la morbidité et de 
                  la mortalité par rapport à 2015.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-800">Objectifs du projet</h2>
                <p className="text-gray-700 mb-6">
                  Le projet Malaria-Cam adopte une stratégie de Surveillance, de Suivi et d'Évaluation (SSE) pour 
                  améliorer les efforts de contrôle des vecteurs. Cela implique d'utiliser des données météorologiques 
                  pour identifier les gîtes larvaires (habitats) propices à la reproduction des moustiques. La 
                  cartographie de ces habitats soutiendra une réponse proactive au contrôle des populations de 
                  moustiques, prenant en compte les facteurs climatiques et anthropiques.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-800">Méthodologie</h2>
                <p className="text-gray-700 mb-6">
                  L'étude utilise plusieurs modèles statistiques pour analyser la survie des moustiques. L'analyse de 
                  Kaplan-Meier évalue la probabilité de survie et le taux de mortalité en fonction des conditions 
                  environnementales. Le modèle de risques proportionnels de Cox examine l'impact des précipitations 
                  sur les courbes de survie, fournissant une vue plus complète. Une modélisation de la probabilité de 
                  survie p<sub>i</sub>(T, RH) a également été réalisée pour estimer la mortalité des moustiques selon 
                  divers facteurs climatiques.
                </p>
                <p className="text-gray-700 mb-6">
                  L'évaluation de l'impact environnemental a inclus une analyse des données météorologiques pour 
                  étudier l'influence de la température, de l'humidité et des précipitations sur la survie et les sites 
                  de reproduction. Les résultats indiquent qu'un taux de mortalité inférieur à 0,04 (R<sub>0</sub> temp 1) 
                  signifie une forte probabilité de transmission de la maladie, tandis qu'un taux supérieur à 0,04 
                  (R<sub>0</sub> temp 1) indique une réduction des risques d'infection. Cela souligne le rôle essentiel 
                  du taux de survie dans la dynamique de transmission.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-800">Application CAM-MALARIA</h2>
                <p className="text-gray-700 mb-6">
                  L'application CAM-MALARIA permet de visualiser les données sur la survie des moustiques. En se 
                  connectant via un navigateur, les utilisateurs peuvent accéder à des graphiques montrant la 
                  probabilité de survie d'An. gambiae s.s et de l'An arabiensis en fonction des données de température 
                  et d'humidité, ainsi que l'influence des précipitations. Ils pourront également visualiser une carte 
                  en temps quasi réel illustrant l'évolution des gîtes larvaires, grâce aux données de température et 
                  d'humidité de l'air, envoyées par une Api, jouant le rôle de station météo.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-800">Cartographie des gîtes larvaires</h2>
                <p className="text-gray-700 mb-6">
                  La cartographie des gîtes larvaires au Cameroun permet d'identifier différentes zones selon leur niveau 
                  de risque :
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="font-bold mb-3 text-gray-800">Légende de la carte d'apparition des gîtes larvaires :</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-4 h-4 bg-red-600 rounded-sm mt-1 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-gray-800">Conditions Favorables à la Prolifération : Zones d'Eau Stagnante, humidité élevée</p>
                        <p className="text-sm text-gray-600">Description : Étangs, mares, et autres plans d'eau où l'eau ne s'écoule pas.</p>
                        <p className="text-sm text-gray-600">Risque : Ces zones offrent des conditions idéales pour la reproduction, en particulier lorsque la température est comprise entre 22 et 30 °C et l'humidité relative élevée.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 bg-blue-600 rounded-sm mt-1 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-gray-800">Zones d'Eau Temporaire, petits collecteurs</p>
                        <p className="text-sm text-gray-600">Description : Petits collecteurs d'eau, fossés, et zones inondées temporairement.</p>
                        <p className="text-sm text-gray-600">Risque : Elles peuvent devenir des habitats de reproduction lorsque les précipitations augmentent, surtout dans des conditions de température modérée.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 bg-yellow-500 rounded-sm mt-1 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-gray-800">Etangs saisonniers, exposition au soleil</p>
                        <p className="text-sm text-gray-600">Description : Terrains dépourvus d'eau, exposés au soleil.</p>
                        <p className="text-sm text-gray-600">Risque : Bien que ces zones semblent non propices à la reproduction, elles peuvent devenir dangereuses si des changements climatiques modifient l'humidité et la température.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-4 h-4 bg-green-500 rounded-sm mt-1 mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-gray-800">Zones Asséchées, températures Extrêmes</p>
                        <p className="text-sm text-gray-600">Description : Zones où la température descend en dessous de 18 °C ou dépasse 35 °C.</p>
                        <p className="text-sm text-gray-600">Risque : Ces conditions peuvent influencer la survie des moustiques, mais des fluctuations rapides dans l'environnement peuvent favoriser leur prolifération.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-4 text-gray-800">Impact et valeur ajoutée</h2>
                <p className="text-gray-700 mb-6">
                  Le projet Malaria-Cam améliore la compréhension des dynamiques de transmission de la malaria en 
                  intégrant des méthodes analytiques diverses. Cette approche globale vise à informer les politiques 
                  de santé publique et à sensibiliser les communautés sur les conditions environnementales influençant 
                  la transmission du paludisme.
                </p>
                <p className="text-gray-700">
                  En analysant des données provenant de stations météorologiques stratégiquement placées, le projet 
                  facilitera les évaluations en temps quasi-réel et les ajustements des interventions, dans le but de 
                  réduire le fardeau du paludisme dans les régions touchées. L'impact sociétal réside dans la 
                  sensibilisation des parties prenantes locales à l'importance du contrôle des habitats des moustiques 
                  et l'influence sur des initiatives de lutte contre le paludisme à plus grande échelle.
                </p>
              </div>
            </div>

            {/* Project Gallery */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Galerie du Projet</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Carte d'apparition des gîtes larvaires au Cameroun (août 2024)</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Capteur micro-climat déployé dans la région de Bafoussam</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Station de base LoRa pour la collecte de données</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Interface de l'application CAM-MALARIA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Project Info */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Informations</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-600">Domaine</h4>
                    <p>Santé & Environnement</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600">Durée</h4>
                    <p>2021 - En cours</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600">Statut</h4>
                    <p>Phase de déploiement</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600">Partenaire</h4>
                    <p>Université Grenoble Alpes (UGA)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">IoT</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">LoRa</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Capteurs environnementaux</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Cartographie</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">API</span>
                </div>
              </div>
            </div>

            {/* Team */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Équipe</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-600 font-medium">FB</span>
                    </div>
                    <div>
                      <p className="font-medium">Dr. Fatima BENDO</p>
                      <p className="text-sm text-gray-500">Chef de projet</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-600 font-medium">MM</span>
                    </div>
                    <div>
                      <p className="font-medium">Dr. Michel MANGA</p>
                      <p className="text-sm text-gray-500">Épidémiologiste</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-600 font-medium">SK</span>
                    </div>
                    <div>
                      <p className="font-medium">Sophie KAMGA</p>
                      <p className="text-sm text-gray-500">Ingénieure logiciel</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-red-600 font-medium">TE</span>
                    </div>
                    <div>
                      <p className="font-medium">Thomas EKAMBI</p>
                      <p className="text-sm text-gray-500">Doctorant</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Collaboration */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Collaboration</h3>
                <div className="flex items-start mb-4">
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

            {/* Related Resources */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Ressources</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="flex items-start">
                      <FileText className="w-5 h-5 text-red-600 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium mb-1">Modélisation et prédiction des cas de paludisme au Cameroun</p>
                        <p className="text-sm text-gray-500">Journal of Infectious Diseases, 2023</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start">
                      <FileText className="w-5 h-5 text-red-600 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium mb-1">Impact du changement climatique sur la dynamique vectorielle du paludisme</p>
                        <p className="text-sm text-gray-500">Conférence sur la Santé Publique en Afrique, 2024</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}