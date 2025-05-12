// app/about/page.js
import Image from 'next/image';

export const metadata = {
  title: 'À propos | Laboratoire d\'Électronique',
  description: 'Découvrez notre laboratoire d\'électronique dédié à l\'innovation technologique pour le développement durable au Cameroun.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* En-tête */}
      <section className="relative h-80 flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/lab-overview.jpg"
            alt="Laboratoire d'électronique"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-green-800/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            À propos de notre laboratoire
          </h1>
          <p className="text-white/90 text-xl max-w-3xl">
            Un centre d'innovation en électronique dédié à résoudre les défis du développement durable.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div> 
              <h2 className="text-3xl font-bold mb-6 section-heading">Notre mission</h2>
              <p className="text-gray-700 mb-4">
                Notre laboratoire d'électronique a pour mission de concevoir et développer des solutions 
                technologiques innovantes qui répondent aux défis spécifiques du développement durable au 
                Cameroun et en Afrique en général.
              </p>
              <p className="text-gray-700 mb-4">
                Face aux problématiques cruciales telles que l'accès à l'énergie, la santé publique, 
                la sécurité alimentaire et la sécurité routière, nous combinons recherche fondamentale 
                et applications pratiques pour créer des technologies adaptées au contexte local.
              </p>
              <p className="text-gray-700">
                Notre approche intègre systématiquement l'Internet des Objets (IoT) et l'intelligence 
                artificielle pour développer des solutions robustes, accessibles et durables.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/lab-mission.jpg"
                alt="Notre mission"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:flex-row-reverse">
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 section-heading">Notre vision</h2>
              <p className="text-gray-700 mb-4">
                Nous aspirons à devenir un centre d'excellence reconnu internationalement dans le 
                domaine de l'innovation technologique au service du développement durable en Afrique.
              </p>
              <p className="text-gray-700 mb-4">
                Notre vision s'articule autour de la création de technologies endogènes, conçues 
                localement et adaptées aux réalités socio-économiques de notre continent, tout en 
                maintenant des standards internationaux de qualité et de performance.
              </p>
              <p className="text-gray-700">
                À travers nos innovations, nous contribuons activement à l'atteinte des Objectifs de 
                Développement Durable (ODD) des Nations Unies, particulièrement dans les domaines de la 
                santé, de l'énergie propre, de la sécurité alimentaire et des villes durables.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="/images/lab-vision.jpg"
                alt="Notre vision"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Histoire et évolution */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Notre histoire</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Ligne de temps verticale */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
                
                {/* Événements */}
                <div className="relative z-10">
                  {/* Événement 1 */}
                  <div className="flex items-center mb-12">
                    <div className="w-1/2 pr-8 text-right">
                      <h3 className="text-xl font-semibold mb-2">2015</h3>
                      <p className="text-gray-700">
                        Création du laboratoire au sein de l'Université de Yaoundé I, avec une équipe initiale 
                        de trois chercheurs spécialisés en électronique et systèmes embarqués.
                      </p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                  
                  {/* Événement 2 */}
                  <div className="flex items-center mb-12">
                    <div className="w-1/2 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="w-1/2 pl-8">
                      <h3 className="text-xl font-semibold mb-2">2018</h3>
                      <p className="text-gray-700">
                        Premier projet majeur : développement d'un régulateur solaire MPPT adapté aux conditions 
                        africaines, marquant notre engagement dans le domaine des énergies renouvelables.
                      </p>
                    </div>
                  </div>
                  
                  {/* Événement 3 */}
                  <div className="flex items-center mb-12">
                    <div className="w-1/2 pr-8 text-right">
                      <h3 className="text-xl font-semibold mb-2">2020</h3>
                      <p className="text-gray-700">
                        Lancement de notre première collaboration internationale avec l'Université Grenoble Alpes 
                        pour le projet I2HM de surveillance du paludisme utilisant l'IoT.
                      </p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                  
                  {/* Événement 4 */}
                  <div className="flex items-center mb-12">
                    <div className="w-1/2 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="w-1/2 pl-8">
                      <h3 className="text-xl font-semibold mb-2">2022</h3>
                      <p className="text-gray-700">
                        Développement de la prothèse auditive Balafon, notre première innovation dans le domaine 
                        médical, avec l'ambition de rendre les aides auditives accessibles en Afrique.
                      </p>
                    </div>
                  </div>
                  
                  {/* Événement 5 */}
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <h3 className="text-xl font-semibold mb-2">2024</h3>
                      <p className="text-gray-700">
                        Extension de nos activités de recherche à la sécurité routière avec le déploiement de 
                        capteurs IoT pour la surveillance des zones à risque, notamment la falaise de Dschang.
                      </p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Valeurs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Nos valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Innovation</h3>
                <p className="text-gray-700 text-center">
                  Nous encourageons la créativité et l'exploration de solutions originales pour résoudre 
                  les défis complexes du développement durable en Afrique.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Impact social</h3>
                <p className="text-gray-700 text-center">
                  Nos recherches et innovations sont guidées par leur capacité à générer un impact positif 
                  concret sur les communautés et l'environnement.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Collaboration</h3>
                <p className="text-gray-700 text-center">
                  Nous valorisons les partenariats interdisciplinaires et internationaux qui enrichissent 
                  notre vision et amplifient la portée de nos innovations.
                </p>
              </div>
            </div>
          </div>

          {/* Installations et équipements */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Nos installations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/lab-electronics.jpg"
                    alt="Laboratoire d'électronique"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Laboratoire d'électronique</h3>
                  <p className="text-gray-700">
                    Notre laboratoire principal est équipé d'instruments de pointe pour la conception, 
                    le prototypage et les tests de circuits électroniques, notamment des oscilloscopes, 
                    des générateurs de signaux et des analyseurs de spectre.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/lab-iot.jpg"
                    alt="Atelier IoT"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Atelier IoT et prototypage</h3>
                  <p className="text-gray-700">
                    Notre atelier dédié à l'Internet des Objets dispose d'un large éventail de capteurs, 
                    d'actuateurs, de microcontrôleurs et de passerelles de communication, ainsi que 
                    d'imprimantes 3D pour le prototypage rapide.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/lab-renewable.jpg"
                    alt="Centre d'énergie renouvelable"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Centre d'énergie renouvelable</h3>
                  <p className="text-gray-700">
                    Cet espace est dédié aux recherches sur les systèmes d'alimentation solaire et 
                    dispose d'équipements pour tester les panneaux solaires, les régulateurs de charge 
                    et les convertisseurs de puissance dans diverses conditions.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/lab-software.jpg"
                    alt="Laboratoire logiciel"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Laboratoire logiciel et IA</h3>
                  <p className="text-gray-700">
                    Notre infrastructure informatique comprend des stations de travail performantes 
                    pour le développement logiciel, la modélisation, la simulation et l'analyse de 
                    données, avec une capacité de calcul adaptée aux algorithmes d'IA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );    }