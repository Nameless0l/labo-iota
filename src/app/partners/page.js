import React from 'react';
import { Globe, School, Building, ExternalLink, Users, Handshake, ArrowRight, Mail } from 'lucide-react';

const PartnersPage = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-700 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Partenaires
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Découvrez les institutions et organisations avec lesquelles nous collaborons
            </p>
          </div>
        </div>
      </div>
      
      {/* Partners Introduction */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Une approche collaborative</h2>
              <p className="text-lg text-gray-700 mb-6">
                Le laboratoire IoTA collabore avec un réseau diversifié de partenaires nationaux et internationaux 
                pour développer des solutions technologiques innovantes et adaptées aux défis locaux.
              </p>
              <p className="text-lg text-gray-700">
                Nos partenariats incluent des institutions académiques, des organismes de recherche, des entreprises 
                privées et des organisations gouvernementales et non gouvernementales, qui nous apportent expertise, 
                ressources et perspectives complémentaires.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-6 rounded-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <School className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Institutions académiques</h3>
                <p className="text-gray-600">Universités et centres de recherche</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Building className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Entreprises</h3>
                <p className="text-gray-600">Secteur privé et industriel</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Organisations internationales</h3>
                <p className="text-gray-600">ONG et organismes de développement</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Institutions publiques</h3>
                <p className="text-gray-600">Ministères et agences gouvernementales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Academic Partners */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <School className="w-8 h-8 text-emerald-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Partenaires académiques</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Partner 1 - Université Grenoble Alpes */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gray-100 md:h-auto h-32 flex items-center justify-center p-4">
                  <img 
                    src="/images/parteners/naples.svg" 
                    alt="Logo Université Grenoble Alpes" 
                    className="max-w-full h-20 object-contain"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Université Grenoble Alpes</h3>
                  <p className="text-gray-600 mb-4">
                    Collaboration sur le projet I2HM (Internet of Things and Artificial Intelligence for Health Monitoring) pour la surveillance et la prédiction du paludisme.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded">France</span>
                    <a href="https://www.liglab.fr/fr/presentation/toute-lactualite/faits-marquants/archives-faits-marquants/annee-2023/projet-i2hm-internet-things-and-artificial-i" className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center">
                      Voir le partenariat <ExternalLink className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Partner 2 - Université de Nice Côte d'Azur */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gray-100 md:h-auto h-32 flex items-center justify-center p-4">
                  <img 
                    src="/images/parteners/UniCA.png" 
                    alt="Logo Université Nice Côte d'Azur" 
                    className="max-w-full h-20 object-contain"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Université Nice Côte d'Azur</h3>
                  <p className="text-gray-600 mb-4">
                    Partenaire dans le projet I2HM pour le développement de capteurs environnementaux et l'analyse de données pour la lutte contre le paludisme.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded">France</span>
                    <a href="#" className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center">
                      Voir le partenariat <ExternalLink className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Partner 3 - MIAI Grenoble */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gray-100 md:h-auto h-32 flex items-center justify-center p-4">
                  <img 
                    src="https://neovision.fr/wp-content/uploads/2020/04/Logo-MIAI-300x150.jpg" 
                    alt="Logo Institut MIAI Grenoble" 
                    className="max-w-full h-20 object-contain"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Institut MIAI Grenoble</h3>
                  <p className="text-gray-600 mb-4">
                    Soutien financier et technique pour le déploiement du réseau de capteurs et stations LoRa du projet I2HM.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded">France</span>
                    <a href="#" className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center">
                      Voir le partenariat <ExternalLink className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Partner 4 - École Nationale Supérieure Polytechnique */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gray-100 md:h-auto h-32 flex items-center justify-center p-4">
                  <img 
                    src="/images/parteners/enspy.png" 
                    alt="Logo École Nationale Supérieure Polytechnique de Yaoundé" 
                    className="max-w-full h-20 object-contain"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">École Nationale Supérieure Polytechnique de Yaoundé</h3>
                  <p className="text-gray-600 mb-4">
                    Formation des élèves-ingénieurs sur les technologies IoT et déploiement de capteurs microclimat pour plusieurs projets.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded">Cameroun</span>
                    <a href="#" className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center">
                      Voir le partenariat <ExternalLink className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Partner 5 - Hôpital Régional de Bertoua */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gray-100 md:h-auto h-32 flex items-center justify-center p-4">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-700">HRB</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Hôpital Régional de Bertoua</h3>
                  <p className="text-gray-600 mb-4">
                    Collaboration sur le projet DHAFES pour le développement et l'évaluation des prothèses auditives Balafon.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded">Cameroun</span>
                    <a href="#" className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center">
                      Voir le partenariat <ExternalLink className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Industry Partners */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <Building className="w-8 h-8 text-emerald-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">Partenaires industriels</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Industry Partner 1 - BENDO */}
            <div className="bg-gray-50 rounded-lg p-6 transform transition hover:shadow-lg">
              <div className="mb-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-xl font-bold text-emerald-700">BE</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">BENDO</h3>
              <p className="text-gray-600 mb-4">
                Entreprise camerounaise spécialisée dans les solutions énergétiques. Développement conjoint du régulateur MPPT et de l'onduleur MLI.
              </p>
              <a href="#" className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center">
                Voir le partenariat <ArrowRight className="ml-1 w-3 h-3" />
              </a>
            </div>
            
            {/* Industry Partner 2 - Polytech Grenoble */}
            <div className="bg-gray-50 rounded-lg p-6 transform transition hover:shadow-lg">
              <div className="mb-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-xl font-bold text-emerald-700">PG</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Polytech Grenoble</h3>
              <p className="text-gray-600 mb-4">
                Collaboration avec des élèves-ingénieurs 5ème année des filières TIS, IESE et INFO pour le développement des capteurs I2HM.
              </p>
              <a href="#" className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center">
                Voir le partenariat <ArrowRight className="ml-1 w-3 h-3" />
              </a>
            </div>
            
            {/* Industry Partner 3 - FabMaSTIC */}
            <div className="bg-gray-50 rounded-lg p-6 transform transition hover:shadow-lg">
              <div className="mb-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-xl font-bold text-emerald-700">FM</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">FabMaSTIC</h3>
              <p className="text-gray-600 mb-4">
                Soutien technique pour la configuration des capteurs microclimat utilisés dans la formation des ingénieurs.
              </p>
              <a href="#" className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center">
                Voir le partenariat <ArrowRight className="ml-1 w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* International & Government Partners */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* International Organizations */}
            <div>
              <div className="flex items-center mb-8">
                <Globe className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Organisations internationales</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-emerald-700">CPY</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Centre Pasteur de Yaoundé</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Partenaire clé dans le projet I2HM pour la surveillance et la lutte contre le paludisme.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-emerald-700">CNRP</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Centre National de Référence du Paludisme</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Collaboration sur l'analyse des données et les stratégies de lutte contre le paludisme.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-emerald-700">PSNP</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Plan Stratégique National de lutte contre le paludisme</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Cadre institutionnel pour l'intégration des technologies de surveillance et de prédiction du paludisme.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Government Partners */}
            <div>
              <div className="flex items-center mb-8">
                <Users className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Institutions publiques</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-emerald-700">MS</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Ministère de la Santé Publique du Cameroun</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Collaboration sur les projets de santé, notamment Malaria-CAM et le suivi des femmes enceintes.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-emerald-700">ME</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Ministère de l'Énergie et de l'Eau</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Soutien aux projets d'électrification rurale avec les régulateurs MPPT et onduleurs MLI.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-emerald-700">MT</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Ministère des Transports</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Partenaire du projet de surveillance routière de la falaise de Dschang pour améliorer la sécurité.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Partner With Us */}
      <div className="py-16 bg-emerald-700 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Handshake className="w-8 h-8 text-emerald-700" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-6">Devenir partenaire</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Vous êtes une institution, une entreprise ou une organisation intéressée par nos travaux ? 
            Explorons ensemble les possibilités de collaboration pour développer des solutions innovantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-emerald-700 hover:bg-emerald-100 transition px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center">
              <Mail className="mr-2 w-5 h-5" />
              Nous contacter
            </a>
            <a href="/projects" className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-700 transition px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center">
              Découvrir nos projets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;