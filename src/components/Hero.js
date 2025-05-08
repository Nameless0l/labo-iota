// components/Hero.js
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Fond avec superposition de couleur */}
      <div className="absolute inset-0">
        <Image
          src="/images/electronics-lab-bg.jpg"
          alt="Laboratoire d'électronique"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-green-800/70"></div>
      </div>
      
      {/* Contenu */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Innovation en Électronique pour un Développement Durable
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Notre laboratoire conçoit des solutions électroniques innovantes pour répondre aux défis du développement durable au Cameroun et en Afrique.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md font-medium transition-colors">
              Découvrir nos projets
            </button>
            <button className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-md font-medium hover:bg-white/10 transition-colors">
              Collaborer avec nous
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/ResearchAreas.js
import { RiPlantLine, RiHealthBookLine, RiRoadMapLine, RiLightbulbLine } from 'react-icons/ri';

export default function ResearchAreas() {
  const areas = [
    {
      icon: <RiHealthBookLine className="w-10 h-10" />,
      title: "Santé",
      description: "Technologies IoT pour la surveillance de la santé et la lutte contre le paludisme."
    },
    {
      icon: <RiPlantLine className="w-10 h-10" />,
      title: "Sécurité alimentaire",
      description: "Solutions pour l'agriculture intelligente et l'analyse des sols."
    },
    {
      icon: <RiRoadMapLine className="w-10 h-10" />,
      title: "Sécurité routière",
      description: "Systèmes de surveillance et d'alerte pour améliorer la sécurité routière."
    },
    {
      icon: <RiLightbulbLine className="w-10 h-10" />,
      title: "Énergie",
      description: "Régulateurs solaires MPPT et onduleurs pour une énergie durable."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos domaines de recherche</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Nous développons des technologies qui contribuent aux Objectifs de Développement Durable à travers plusieurs domaines d'application.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-green-500 mb-4">{area.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// components/ProjectsSection.js
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Régulateur de charge solaire MPPT",
      category: "Énergie",
      image: "/images/mppt-regulator.jpg",
      slug: "regulateur-charge-solaire-mppt",
      description: "Conception et réalisation d'un régulateur de charge solaire MPPT amélioré adaptant des tensions de 15V-70V pour des batteries de 12V ou 24V."
    },
    {
      title: "Onduleur MLI à onde sinusoïdale pure",
      category: "Énergie",
      image: "/images/pure-sine-inverter.jpg",
      slug: "onduleur-mli-onde-sinusoidale",
      description: "Convertisseur 12V CC en 230V CA avec une architecture en deux étages et une sortie sinusoïdale pure à 50 Hz."
    },
    {
      title: "Système de veille sanitaire contre le paludisme",
      category: "Santé",
      image: "/images/malaria-cam.jpg",
      slug: "malaria-cam",
      description: "Réseau de capteurs pour la surveillance des paramètres environnementaux favorables au développement du paludisme."
    },
    {
      title: "Sécurité routière intelligente",
      category: "Transport",
      image: "/images/road-safety.jpg",
      slug: "securite-routiere-intelligente",
      description: "Réseau de capteurs pour la surveillance de la circulation dans des zones dangereuses, notamment la falaise de Dschang."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos projets innovants</h2>
            <p className="text-gray-600 max-w-2xl">
              Découvrez nos projets qui répondent aux défis énergétiques, sanitaires et de sécurité au Cameroun.
            </p>
          </div>
          <Link href="/projects" className="mt-6 md:mt-0 text-green-600 font-medium flex items-center">
            Voir tous les projets
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white text-sm font-medium py-1 px-3 rounded-full">
                  {project.category}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link href={`/projects/${project.slug}`} className="text-green-600 font-medium flex items-center">
                En savoir plus
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}