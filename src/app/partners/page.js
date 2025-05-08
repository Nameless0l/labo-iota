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
            {/* Partner 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gray-100 md:h-auto h-32 flex items-center justify-center p-4">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-700">UGA</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Université Grenoble Alpes</h3>
                  <p className="text-gray-600 mb-4">
                    Collaboration sur le projet I2HM pour la surveillance et la prédiction du paludisme.
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
            
            {/* Partner 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gray-100 md:h-auto h-32 flex items-center justify-center p-4">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-700">MIT</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">MIT D-Lab</h3>
                  <p className="text-gray-600 mb-4">
                    Collaboration sur les solutions énergétiques à faible coût pour les communautés rurales.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded">États-Unis</span>
                    <a href="#" className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center">
                      Voir le partenariat <ExternalLink className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Partner 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gray-100 md:h-auto h-32 flex items-center justify-center p-4">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-700">UCT</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Université du Cap</h3>
                  <p className="text-gray-600 mb-4">
                    Collaboration sur les systèmes de surveillance du paludisme et formation doctorale.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded">Afrique du Sud</span>
                    <a href="#" className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center">
                      Voir le partenariat <ExternalLink className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Partner 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-gray-100 md:h-auto h-32 flex items-center justify-center p-4">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-700">PSL</span>
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Université PSL</h3>
                  <p className="text-gray-600 mb-4">
                    Collaboration sur les prothèses auditives à faible coût et technologies d'assistance.
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
            {/* Industry Partner 1 */}
            <div className="bg-gray-50 rounded-lg p-6 transform transition hover:shadow-lg">
              <div className="mb-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-xl font-bold text-emerald-700">BE</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">BENDO</h3>
              <p className="text-gray-600 mb-4">
                Entreprise camerounaise spécialisée dans les solutions solaires. Partenaire du projet MPPT.
              </p>
              <a href="#" className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center">
                Voir le partenariat <ArrowRight className="ml-1 w-3 h-3" />
              </a>
            </div>
            
            {/* Industry Partner 2 */}
            <div className="bg-gray-50 rounded-lg p-6 transform transition hover:shadow-lg">
              <div className="mb-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-xl font-bold text-emerald-700">EC</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">EnergyCam</h3>
              <p className="text-gray-600 mb-4">
                Entreprise spécialisée dans les infrastructures énergétiques. Collaboration sur l'onduleur MLI.
              </p>
              <a href="#" className="text-emerald-600 hover:text-emerald-700 text-sm flex items-center">
                Voir le partenariat <ArrowRight className="ml-1 w-3 h-3" />
              </a>
            </div>
            
            {/* Industry Partner 3 */}
            <div className="bg-gray-50 rounded-lg p-6 transform transition hover:shadow-lg">
              <div className="mb-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-xl font-bold text-emerald-700">AA</span>
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">AgroAnalytics</h3>
              <p className="text-gray-600 mb-4">
                Entreprise spécialisée dans l'agriculture de précision. Partenaire sur les projets agricoles.
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
                      <span className="font-bold text-emerald-700">OMS</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Organisation Mondiale de la Santé</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Soutien technique sur les projets de santé, notamment CAM-MALARIA.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-emerald-700">UE</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Union Européenne</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Financement de projets de recherche dans le cadre des programmes Horizon Europe.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-emerald-700">AUF</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Agence Universitaire de la Francophonie</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Soutien à la mobilité des chercheurs et aux programmes de formation.
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
                        Collaboration sur les projets de santé et déploiement du système CAM-MALARIA.
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
                        Soutien aux projets d'électrification rurale avec les solutions solaires.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="font-bold text-emerald-700">MA</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Ministère de l'Agriculture et du Développement Rural</h3>
                      <p className="text-gray-600 text-sm mb-2">
                        Partenaire sur les projets d'agriculture intelligente et de recommandation de cultures.
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