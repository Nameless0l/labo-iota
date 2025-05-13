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
              Des chercheurs et ingénieurs passionnés par l'innovation et le développement durable
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
                Cette diversité de compétences nous permet d'aborder les problématiques complexes du développement durable sous différents angles et de proposer des solutions innovantes et adaptées au contexte local.
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
            Notre laboratoire est dirigé par des chercheurs de renommée, spécialistes des technologies IoT et du développement durable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Director */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl">
              <div className="h-64 bg-gradient-to-b from-emerald-400 to-emerald-600 flex items-center justify-center overflow-hidden">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-emerald-600">AC</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Prof. Anne Marie CHANA</h3>
                <p className="text-emerald-600 font-medium mb-4">-</p>
                <p className="text-gray-600 mb-6">
                  Spécialiste en électronique et en IoT, le Dr. CHANA dirige le laboratoire depuis sa création. 
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
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-emerald-600">RM</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Dr. Robert MBOU</h3>
                <p className="text-emerald-600 font-medium mb-4">Directeur Adjoint - Énergie</p>
                <p className="text-gray-600 mb-6">
                  Expert en systèmes énergétiques et en électronique de puissance, Dr. MBOU dirige l'axe de recherche sur les solutions énergétiques durables.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-emerald-100 transition">
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
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-emerald-600">FB</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Dr. Fatima BENDO</h3>
                <p className="text-emerald-600 font-medium mb-4">Directrice Adjointe - Santé</p>
                <p className="text-gray-600 mb-6">
                  Spécialiste en santé publique et en technologie médicale, Dr. BENDO coordonne nos projets liés à la santé, dont le programme CAM-MALARIA.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-emerald-100 transition">
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
            Notre laboratoire est organisé en quatre équipes spécialisées, chacune dédiée à un domaine d'application des technologies IoT.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Energy Team */}
            <div className="bg-white border border-emerald-100 rounded-xl shadow-md overflow-hidden transform transition hover:shadow-lg">
              <div className="border-b border-emerald-100">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-emerald-700">Équipe Énergie</h3>
                  <p className="text-gray-600 mb-4">
                    Développement de solutions énergétiques durables et accessibles pour les zones rurales et urbaines du Cameroun.
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold mb-4 text-gray-700">Membres clés</h4>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-medium">RM</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Dr. Robert MBOU</p>
                      <p className="text-sm text-gray-500">Chef d'équipe</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-medium">JM</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Jean MAKONGO</p>
                      <p className="text-sm text-gray-500">Ingénieur électronique</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-medium">FN</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Fanta NDIAYE</p>
                      <p className="text-sm text-gray-500">Ingénieure électronique</p>
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
                  <h3 className="text-xl font-bold mb-2 text-emerald-700">Équipe Santé</h3>
                  <p className="text-gray-600 mb-4">
                    Applications de l'IoT pour améliorer l'accès aux soins de santé et lutter contre les maladies endémiques.
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold mb-4 text-gray-700">Membres clés</h4>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-medium">FB</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Dr. Fatima BENDO</p>
                      <p className="text-sm text-gray-500">Chef d'équipe</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-medium">MM</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Dr. Michel MANGA</p>
                      <p className="text-sm text-gray-500">Épidémiologiste</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-medium">SK</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Sophie KAMGA</p>
                      <p className="text-sm text-gray-500">Ingénieure logiciel</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6">
                <h4 className="font-semibold mb-4 text-gray-700">Projets</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    <a href="/projects/malaria-cam" className="text-emerald-600 hover:text-emerald-700 transition">
                      CAM-MALARIA
                    </a>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    <a href="/projects/pregnant-women-monitoring" className="text-emerald-600 hover:text-emerald-700 transition">
                      Suivi des femmes enceintes
                    </a>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                    <a href="/projects/balafon" className="text-emerald-600 hover:text-emerald-700 transition">
                      Prothèse auditive Balafon
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Agriculture Team */}
            <div className="bg-white border border-emerald-100 rounded-xl shadow-md overflow-hidden transform transition hover:shadow-lg">
              <div className="border-b border-emerald-100">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-emerald-700">Équipe Agriculture</h3>
                  <p className="text-gray-600 mb-4">
                    Technologies IoT pour l'amélioration de la production agricole et la sécurité alimentaire.
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold mb-4 text-gray-700">Membres clés</h4>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-medium">PT</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Dr. Paul TAMO</p>
                      <p className="text-sm text-gray-500">Chef d'équipe</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-medium">EF</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Émilie FOUDA</p>
                      <p className="text-sm text-gray-500">Ingénieure agronome</p>
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
                </ul>
              </div>
            </div>
            
            {/* Infrastructure Team */}
            <div className="bg-white border border-emerald-100 rounded-xl shadow-md overflow-hidden transform transition hover:shadow-lg">
              <div className="border-b border-emerald-100">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-emerald-700">Équipe Infrastructure</h3>
                  <p className="text-gray-600 mb-4">
                    Solutions IoT pour la sécurité routière et le développement d'infrastructures intelligentes.
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold mb-4 text-gray-700">Membres clés</h4>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-medium">LN</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Léon NGOM</p>
                      <p className="text-sm text-gray-500">Chef d'équipe</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-medium">CK</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Claire KENGNE</p>
                      <p className="text-sm text-gray-500">Ingénieure civile</p>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Students & Collaborators */}
      <div className="py-16 bg-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">Étudiants et Collaborateurs</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Notre laboratoire accueille régulièrement des étudiants en master et doctorat, ainsi que des chercheurs invités pour des collaborations ponctuelles.
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-xl font-bold mb-6 text-emerald-700">Étudiants actuels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 border border-gray-100 rounded-lg">
                <p className="font-medium text-gray-800">Aline Mbarga</p>
                <p className="text-sm text-gray-500 mb-2">Doctorante - Systèmes énergétiques</p>
                <p className="text-xs text-gray-600">Projet: Optimisation des systèmes MPPT</p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg">
                <p className="font-medium text-gray-800">Thomas Ekambi</p>
                <p className="text-sm text-gray-500 mb-2">Doctorant - Santé publique</p>
                <p className="text-xs text-gray-600">Projet: Extension du système CAM-MALARIA</p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg">
                <p className="font-medium text-gray-800">Marie Atangana</p>
                <p className="text-sm text-gray-500 mb-2">Master 2 - Informatique</p>
                <p className="text-xs text-gray-600">Projet: Algorithmes d'IA pour la prédiction du paludisme</p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg">
                <p className="font-medium text-gray-800">Paul Ndongo</p>
                <p className="text-sm text-gray-500 mb-2">Master 2 - Électronique</p>
                <p className="text-xs text-gray-600">Projet: Amélioration des onduleurs MLI</p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg">
                <p className="font-medium text-gray-800">Sarah Meka</p>
                <p className="text-sm text-gray-500 mb-2">Master 2 - Génie civil</p>
                <p className="text-xs text-gray-600">Projet: Surveillance IoT des infrastructures routières</p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg">
                <p className="font-medium text-gray-800">Jean-Marc Fopa</p>
                <p className="text-sm text-gray-500 mb-2">Master 2 - Agronomie</p>
                <p className="text-xs text-gray-600">Projet: Capteurs IoT pour l'agriculture intelligente</p>
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
                  <p className="text-sm text-gray-600 mb-2">Collaboration sur le projet I2HM</p>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 transition text-sm flex items-center">
                    En savoir plus <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-emerald-600 font-medium">MIT</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">MIT D-Lab, États-Unis</p>
                  <p className="text-sm text-gray-600 mb-2">Collaboration sur les solutions énergétiques à faible coût</p>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 transition text-sm flex items-center">
                    En savoir plus <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-emerald-600 font-medium">UCT</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Université du Cap (UCT), Afrique du Sud</p>
                  <p className="text-sm text-gray-600 mb-2">Collaboration sur les systèmes de surveillance du paludisme</p>
                  <a href="#" className="text-emerald-600 hover:text-emerald-700 transition text-sm flex items-center">
                    En savoir plus <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-emerald-600 font-medium">PSL</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Université PSL, France</p>
                  <p className="text-sm text-gray-600 mb-2">Collaboration sur les prothèses auditives à faible coût</p>
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
            Nous sommes toujours à la recherche de talents passionnés pour contribuer à notre mission.
            Si vous êtes intéressé par notre travail, explorez nos opportunités de collaboration !
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