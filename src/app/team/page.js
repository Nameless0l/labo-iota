import React from 'react';
import { Mail, Linkedin, Book, FileText, ExternalLink } from 'lucide-react';

const TeamPage = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-700 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notre Équipe
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Des chercheurs et ingénieurs passionnés par l'IoT au service du développement durable
            </p>
          </div>
        </div>
      </div>
      
      {/* Team intro */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Une équipe pluridisciplinaire</h2>
              <p className="text-lg text-gray-700 mb-6">
                Notre laboratoire réunit des chercheurs et ingénieurs spécialisés dans différents domaines : électronique, informatique, télécommunications, énergie et santé publique.
              </p>
              <p className="text-lg text-gray-700">
                Cette diversité de compétences nous permet d'aborder les problématiques complexes du développement durable sous différents angles et de proposer des solutions innovantes adaptées au contexte local, en lien avec les Objectifs de Développement Durable (ODD).
              </p>
            </div>
            <div className="relative">
              <div className="bg-emerald-100 rounded-lg h-72 w-full"></div>
              <div className="absolute -bottom-8 -left-8 bg-emerald-500 rounded-lg h-48 w-48"></div>
              <div className="absolute -top-8 -right-8 bg-emerald-300 rounded-full h-32 w-32"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Leadership */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Direction du Laboratoire</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Notre laboratoire est dirigé par des chercheurs spécialistes des technologies IoT et du développement durable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Director */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl">
              <div className="h-64 bg-gradient-to-b from-emerald-400 to-emerald-600 flex items-center justify-center overflow-hidden">
                <img src="data:image/jpeg;base64,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" alt="Prof. Anne Marie CHANA" className="w-48 h-48 object-cover rounded-full border-4 border-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Prof. Anne Marie CHANA</h3>
                <p className="text-emerald-600 font-medium mb-4">Directrice du Laboratoire</p>
                <p className="text-gray-600 mb-6">
                  Spécialiste en électronique et en Internet des Objets (IoT), elle dirige les projets liés aux ODD 2, 3 et 11, incluant la santé, la sécurité alimentaire et les infrastructures durables.
                </p>
                <div className="flex space-x-3">
                  <a href="mailto:anne.chana@univ-yaounde1.cm" className="p-2 bg-gray-100 rounded-full hover:bg-emerald-100 transition">
                    <Mail className="w-5 h-5 text-gray-700" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-emerald-100 transition">
                    <Linkedin className="w-5 h-5 text-gray-700" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-emerald-100 transition">
                    <Book className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Deputy Director 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl">
              <div className="h-64 bg-gradient-to-b from-emerald-400 to-emerald-600 flex items-center justify-center overflow-hidden">
                <img src="data:image/jpeg;base64,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" alt="Prof. Bernabé BATCHAKUI" className="w-48 h-48 object-cover rounded-full border-4 border-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Prof. Bernabé BATCHAKUI</h3>
                <p className="text-emerald-600 font-medium mb-4">Co-initiateur du projet I2HM</p>
                <p className="text-gray-600 mb-6">
                  Spécialiste en informatique et systèmes intelligents, il a co-initié le projet I2HM avec Dr. CHANA pour la surveillance sanitaire contre le paludisme.
                </p>
                <div className="flex space-x-3">
                  <a href="mailto:bernabe.batchakui@univ-yaounde1.cm" className="p-2 bg-gray-100 rounded-full hover:bg-emerald-100 transition">
                    <Mail className="w-5 h-5 text-gray-700" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-emerald-100 transition">
                    <Linkedin className="w-5 h-5 text-gray-700" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-emerald-100 transition">
                    <Book className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Deputy Director 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl">
              <div className="h-64 bg-gradient-to-b from-emerald-400 to-emerald-600 flex items-center justify-center overflow-hidden">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfmb9TdzhqdcuLSlbFEsb6R02_JfaJjUCdDAH75QUMlkMJrARwwt9m4VnT3WS5Nc_CiI&usqp=CAU" alt="Dr. Guy Merlin NGOUNOU" className="w-48 h-48 object-cover rounded-full border-4 border-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Dr. Guy Merlin NGOUNOU</h3>
                <p className="text-emerald-600 font-medium mb-4">Responsable projet prothèse auditive</p>
                <p className="text-gray-600 mb-6">
                  Spécialiste en ingénierie informatique, il dirige le projet de développement de systèmes experts pour le réglage des prothèses auditives Balafon.
                </p>
                <div className="flex space-x-3">
                  <a href="mailto:guy.ngounou@univ-yaounde1.cm" className="p-2 bg-gray-100 rounded-full hover:bg-emerald-100 transition">
                    <Mail className="w-5 h-5 text-gray-700" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-emerald-100 transition">
                    <Linkedin className="w-5 h-5 text-gray-700" />
                  </a>
                  <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-emerald-100 transition">
                    <Book className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Research Teams */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Nos Équipes de Recherche</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Notre laboratoire est organisé en équipes spécialisées, chacune dédiée à un domaine d'application des technologies IoT en lien avec les Objectifs de Développement Durable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Energy Team */}
            <div className="bg-white border border-emerald-100 rounded-xl shadow-md overflow-hidden transform transition hover:shadow-lg">
              <div className="border-b border-emerald-100">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-emerald-700">Équipe Énergie (ODD 7)</h3>
                  <p className="text-gray-600 mb-4">
                    Développement de solutions énergétiques durables et accessibles pour les zones rurales et urbaines du Cameroun, affectées par des coupures fréquentes d'électricité.
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold mb-4 text-gray-700">Membres clés</h4>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-medium">AC</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Prof. Anne Marie CHANA</p>
                      <p className="text-sm text-gray-500">Supervision</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6">
                <h4 className="font-semibold mb-4 text-gray-700">Projets</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    <a href="/projects/mppt" className="text-emerald-600 hover:text-emerald-700 transition">
                      Régulateur de charge solaire MPPT
                    </a>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    <a href="/projects/onduleur-mli" className="text-emerald-600 hover:text-emerald-700 transition">
                      Onduleur MLI pur sinus
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Health Team */}
            <div className="bg-white border border-emerald-100 rounded-xl shadow-md overflow-hidden transform transition hover:shadow-lg">
              <div className="border-b border-emerald-100">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-emerald-700">Équipe Santé (ODD 3)</h3>
                  <p className="text-gray-600 mb-4">
                    Applications de l'IoT et de l'IA pour améliorer l'accès aux soins de santé et lutter contre les maladies endémiques comme le paludisme.
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold mb-4 text-gray-700">Membres clés</h4>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-medium">AC</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Prof. Anne Marie CHANA</p>
                      <p className="text-sm text-gray-500">Directrice</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-medium">BB</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Prof. Bernabé BATCHAKUI</p>
                      <p className="text-sm text-gray-500">Co-responsable I2HM</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-medium">GN</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Dr. Guy Merlin NGOUNOU</p>
                      <p className="text-sm text-gray-500">Responsable projet prothèse auditive</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-medium">JF</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Dr. Jean Valentin FOKOUO FOGHA</p>
                      <p className="text-sm text-gray-500">ORL, Hôpital Régional de Bertoua</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6">
                <h4 className="font-semibold mb-4 text-gray-700">Projets</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    <a href="/projects/i2hm" className="text-emerald-600 hover:text-emerald-700 transition">
                      I2HM (Internet of things and artificial Intelligent for Health monitoring)
                    </a>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    <a href="/projects/malaria-cam" className="text-emerald-600 hover:text-emerald-700 transition">
                      CAM-MALARIA
                    </a>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    <a href="/projects/pregnant-women-monitoring" className="text-emerald-600 hover:text-emerald-700 transition">
                      Suivi des femmes enceintes dans les zones rurales
                    </a>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    <a href="/projects/dhafes" className="text-emerald-600 hover:text-emerald-700 transition">
                      DHAFES - Système expert pour prothèse auditive Balafon
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Agriculture Team */}
            <div className="bg-white border border-emerald-100 rounded-xl shadow-md overflow-hidden transform transition hover:shadow-lg">
              <div className="border-b border-emerald-100">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-emerald-700">Équipe Agriculture (ODD 2)</h3>
                  <p className="text-gray-600 mb-4">
                    Technologies IoT pour l'étude de la qualité des sols, la recommandation de cultures adaptées et la surveillance des maladies des plantes.
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold mb-4 text-gray-700">Membres clés</h4>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-medium">AC</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Prof. Anne Marie CHANA</p>
                      <p className="text-sm text-gray-500">Directrice</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6">
                <h4 className="font-semibold mb-4 text-gray-700">Projets</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    <a href="/projects/agriculture" className="text-emerald-600 hover:text-emerald-700 transition">
                      Système de recommandation de cultures
                    </a>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    <a href="/projects/plant-diseases" className="text-emerald-600 hover:text-emerald-700 transition">
                      Surveillance des maladies des plantes
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Infrastructure Team */}
            <div className="bg-white border border-emerald-100 rounded-xl shadow-md overflow-hidden transform transition hover:shadow-lg">
              <div className="border-b border-emerald-100">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-emerald-700">Équipe Infrastructure (ODD 11)</h3>
                  <p className="text-gray-600 mb-4">
                    Solutions IoT pour la sécurité routière et le développement d'infrastructures intelligentes, notamment pour la falaise de Dschang.
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold mb-4 text-gray-700">Membres clés</h4>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-medium">AC</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Prof. Anne Marie CHANA</p>
                      <p className="text-sm text-gray-500">Directrice</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6">
                <h4 className="font-semibold mb-4 text-gray-700">Projets</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    <a href="/projects/road-safety" className="text-emerald-600 hover:text-emerald-700 transition">
                      Sécurité routière - Falaise de Dschang
                    </a>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    <a href="/projects/landslide-monitoring" className="text-emerald-600 hover:text-emerald-700 transition">
                      Surveillance des éboulements
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Students */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Nos Étudiants</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Notre laboratoire accueille régulièrement des étudiants en master et doctorat pour contribuer à nos projets de recherche.
          </p>
          
          <div className="bg-white border border-emerald-100 rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-6 text-emerald-700">Étudiants actuels</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 border border-gray-100 rounded-lg">
                  <p className="font-medium text-gray-800">Kevina Anne NGUEN</p>
                  <p className="text-sm text-gray-500 mb-2">Département Informatique, ENSPY</p>
                  <p className="text-xs text-gray-600">Projet: Système expert pour prothèse auditive (DHAFES)</p>
                </div>
                <div className="p-4 border border-gray-100 rounded-lg">
                  <p className="font-medium text-gray-800">Marcelle Abanda Bessala</p>
                  <p className="text-sm text-gray-500 mb-2">Centre Pasteur de Yaoundé</p>
                  <p className="text-xs text-gray-600">Projet: Surveillance du paludisme (CAM-MALARIA)</p>
                </div>
                <div className="p-4 border border-gray-100 rounded-lg">
                  <p className="font-medium text-gray-800">Élèves ingénieurs 5ème année</p>
                  <p className="text-sm text-gray-500 mb-2">Filières TIS, IESE et INFO - Polytech Grenoble</p>
                  <p className="text-xs text-gray-600">Projet: Développement capteurs pour I2HM</p>
                </div>
                <div className="p-4 border border-gray-100 rounded-lg">
                  <p className="font-medium text-gray-800">Élèves ingénieurs 4ème et 5ème années</p>
                  <p className="text-sm text-gray-500 mb-2">ENSPY</p>
                  <p className="text-xs text-gray-600">Projet: Déploiement réseau LoRaWAN et capteurs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Collaborators */}
      <div className="py-16 bg-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Collaborateurs</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Notre laboratoire collabore avec des institutions nationales et internationales pour renforcer l'impact de nos recherches.
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-xl font-bold mb-6 text-emerald-700">Collaborateurs locaux</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 border border-gray-100 rounded-lg">
                <p className="font-medium text-gray-800">École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)</p>
                <p className="text-sm text-gray-600 mb-2">Institution d'accueil du laboratoire</p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg">
                <p className="font-medium text-gray-800">Centre Pasteur de Yaoundé</p>
                <p className="text-sm text-gray-600 mb-2">Partenaire sur le projet CAM-MALARIA</p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg">
                <p className="font-medium text-gray-800">Centre National de Référence du Paludisme</p>
                <p className="text-sm text-gray-600 mb-2">Partenaire sur le projet I2HM</p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg">
                <p className="font-medium text-gray-800">Bendo Group</p>
                <p className="text-sm text-gray-600 mb-2">Développeur de la prothèse auditive Balafon</p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg">
                <p className="font-medium text-gray-800">Hôpital Régional de Bertoua</p>
                <p className="text-sm text-gray-600 mb-2">Partenaire clinique pour le projet DHAFES</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold mb-6 text-emerald-700">Collaborateurs internationaux</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-emerald-600 font-medium">UGA</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Université Grenoble Alpes (UGA), France</p>
                  <p className="text-sm text-gray-600 mb-2">Collaboration sur le projet I2HM avec le Laboratoire d'Informatique de Grenoble (LIG)</p>
                  <a href="https://www.liglab.fr/fr/presentation/toute-lactualite/faits-marquants/archives-faits-marquants/annee-2023/projet-i2hm-internet-things-and-artificial-i" className="text-emerald-600 hover:text-emerald-700 transition text-sm flex items-center">
                    En savoir plus <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-emerald-600 font-medium">UCA</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Université de Nice Côte d'Azur, France</p>
                  <p className="text-sm text-gray-600 mb-2">Partenaire du projet I2HM</p>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 transition text-sm flex items-center">
                    En savoir plus <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-emerald-600 font-medium">MIAI</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Institut MIAI de Grenoble, France</p>
                  <p className="text-sm text-gray-600 mb-2">Soutien financier pour la première phase du projet I2HM</p>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 transition text-sm flex items-center">
                    En savoir plus <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Join Us */}
      <div className="py-16 bg-gradient-to-r from-emerald-600 to-teal-500 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Rejoignez notre équipe</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Notre laboratoire accueille régulièrement des étudiants en master et doctorat ainsi que des chercheurs pour contribuer à notre mission de développement de solutions IoT innovantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-emerald-600 hover:bg-emerald-50 transition px-6 py-3 rounded-lg font-medium inline-block">
              Nous contacter
            </a>
            <a href="#" className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-600 transition px-6 py-3 rounded-lg font-medium inline-block">
              Opportunités de stage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;