// app/about/page.js
import Image from 'next/image';

export const metadata = {
  title: 'À propos | Laboratoire IoTA',
  description: 'Découvrez notre laboratoire dédié à l\'Internet des Objets et aux Technologies Adaptées pour le développement durable au Cameroun.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* En-tête */}
      <section className="relative h-80 flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-iot.png"
            alt="Laboratoire IoTA"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-teal-800/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            À propos de notre laboratoire
          </h1>
          <p className="text-white/90 text-xl max-w-3xl">
            Un centre d'innovation dédié à résoudre les défis du développement durable à travers l'IoT et les technologies adaptées.
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
                Notre laboratoire IoTA (Internet des Objets et Technologies Adaptées) a pour mission de concevoir et développer des solutions 
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
                artificielle pour développer des solutions robustes, accessibles et durables, alignées sur les Objectifs de Développement Durable (ODD) des Nations Unies.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/mission.jpg"
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
                Développement Durable (ODD) des Nations Unies, particulièrement l'ODD 2 (Faim "zéro"), l'ODD 3 (Bonne santé et bien-être), 
                l'ODD 7 (Énergie propre et d'un coût abordable) et l'ODD 11 (Villes et communautés durables).
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="/images/vision.png"
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
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200"></div>
                
                {/* Événements */}
                <div className="relative z-10">
                  {/* Événement 1 */}
                  <div className="flex items-center mb-12">
                    <div className="w-1/2 pr-8 text-right">
                      <h3 className="text-xl font-semibold mb-2">2015</h3>
                      <p className="text-gray-700">
                        Création du laboratoire IoTA au sein de l'École Nationale Supérieure Polytechnique de Yaoundé, 
                        avec une équipe initiale concentrée sur les systèmes embarqués et l'électronique de puissance.
                      </p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                  
                  {/* Événement 2 */}
                  <div className="flex items-center mb-12">
                    <div className="w-1/2 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="w-1/2 pl-8">
                      <h3 className="text-xl font-semibold mb-2">2018</h3>
                      <p className="text-gray-700">
                        Premier projet majeur : développement d'un régulateur de charge solaire MPPT optimisé pour 
                        améliorer le rendement des installations photovoltaïques au Cameroun.
                      </p>
                    </div>
                  </div>
                  
                  {/* Événement 3 */}
                  <div className="flex items-center mb-12">
                    <div className="w-1/2 pr-8 text-right">
                      <h3 className="text-xl font-semibold mb-2">2020</h3>
                      <p className="text-gray-700">
                        Lancement du projet I2HM (Internet of Things and Artificial Intelligence for Health Monitoring) 
                        en collaboration avec l'Université Grenoble Alpes et le Centre Pasteur de Yaoundé.
                      </p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                  
                  {/* Événement 4 */}
                  <div className="flex items-center mb-12">
                    <div className="w-1/2 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="w-1/2 pl-8">
                      <h3 className="text-xl font-semibold mb-2">2022</h3>
                      <p className="text-gray-700">
                        Conception de la prothèse auditive Balafon et développement du DHAFES (Dynamic Hearing Aid Fitting Expert System), 
                        un système expert basé sur l'ontologie pour l'ajustement personnalisé des prothèses auditives.
                      </p>
                    </div>
                  </div>

                  {/* Événement 5 */}
                  <div className="flex items-center mb-12">
                    <div className="w-1/2 pr-8 text-right">
                      <h3 className="text-xl font-semibold mb-2">2023</h3>
                      <p className="text-gray-700">
                        Développement de l'onduleur MLI pur sinus et déploiement du réseau de capteurs I2HM avec l'Institut MIAI de Grenoble 
                        pour la surveillance environnementale et la prédiction du paludisme au Cameroun.
                      </p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                  
                  {/* Événement 6 */}
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="w-1/2 pl-8">
                      <h3 className="text-xl font-semibold mb-2">2024</h3>
                      <p className="text-gray-700">
                        Extension de nos activités à la sécurité routière avec le déploiement d'un système d'alerte automatique 
                        pour les automobilistes dans les zones dangereuses, notamment la falaise de Dschang.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Axes de recherche */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Axes de recherche</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Énergie durable</h3>
                <p className="text-gray-700 text-center">
                  Développement de solutions innovantes pour l'énergie solaire, notamment des régulateurs MPPT et des onduleurs MLI 
                  adaptés au contexte africain.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Santé connectée</h3>
                <p className="text-gray-700 text-center">
                  Conception de dispositifs médicaux innovants et de systèmes de surveillance épidémiologique basés sur l'IoT, comme CAM-MALARIA 
                  et la prothèse auditive Balafon.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Agriculture intelligente</h3>
                <p className="text-gray-700 text-center">
                  Analyse de la qualité des sols et systèmes de recommandation de cultures grâce à des réseaux de capteurs 
                  connectés pour améliorer la sécurité alimentaire.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Infrastructures sécurisées</h3>
                <p className="text-gray-700 text-center">
                  Développement de systèmes d'alerte et de surveillance pour les zones à risque, notamment pour la sécurité routière 
                  et la prévention des catastrophes naturelles.
                </p>
              </div>
            </div>
          </div>

          {/* Valeurs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center">Nos valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Innovation adaptée</h3>
                <p className="text-gray-700 text-center">
                  Nous développons des solutions qui répondent spécifiquement aux besoins et contraintes du contexte africain, 
                  en privilégiant l'accessibilité et la durabilité.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Impact social</h3>
                <p className="text-gray-700 text-center">
                  Nos recherches et innovations sont guidées par leur capacité à générer un impact positif 
                  concret sur les communautés et l'environnement, en alignement avec les ODD.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                  <h3 className="text-xl font-semibold mb-3">Laboratoire d'électronique et de systèmes embarqués</h3>
                  <p className="text-gray-700">
                    Notre laboratoire principal est équipé d'instruments de pointe pour la conception, 
                    le prototypage et les tests de circuits électroniques, permettant le développement de solutions comme 
                    les régulateurs MPPT et les prothèses auditives Balafon.
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
                  <h3 className="text-xl font-semibold mb-3">Atelier IoT et réseaux de capteurs</h3>
                  <p className="text-gray-700">
                    Notre centre dédié à l'Internet des Objets dispose d'un large éventail de capteurs, de passerelles LoRaWAN 
                    et d'équipements de test pour le développement des projets comme CAM-MALARIA 
                    et les systèmes de surveillance environnementale.
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
                    MPPT et les onduleurs MLI pur sinus dans diverses conditions.
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
                  <h3 className="text-xl font-semibold mb-3">Laboratoire d'IA et d'analyse de données</h3>
                  <p className="text-gray-700">
                    Notre infrastructure informatique comprend des stations de travail performantes pour le 
                    développement des algorithmes d'apprentissage automatique utilisés dans nos projets de santé connectée 
                    et d'agriculture intelligente, notamment le système expert DHAFES.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}