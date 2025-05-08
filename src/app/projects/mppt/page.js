import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Users, Clock, PenTool  } from 'lucide-react';

export default function MPPTProjectPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Project Header */}
      <div className="bg-emerald-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-2">
            <Link href="/projects" className="flex items-center text-emerald-200 hover:text-white transition">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Retour aux projets
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-4">Conception et réalisation d'un régulateur de charge solaire MPPT</h1>
          <div className="flex flex-wrap items-center text-emerald-100 mb-6">
            <div className="flex items-center mr-6 mb-2">
              <Users className="w-5 h-5 mr-2" />
              <span>Équipe Énergie</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <Clock className="w-5 h-5 mr-2" />
              <span>2023-2024</span>
            </div>
            <div className="flex items-center mb-2">
              <PenTool  className="w-5 h-5 mr-2" />
              <span>Énergie Solaire</span>
            </div>
          </div>
          <div className="bg-emerald-800 inline-block px-3 py-1 rounded">
            ODD 7: Énergie propre et abordable
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
                  Au Cameroun, les coupures de courant intempestives et fréquentes sont une source importante 
                  de frustration et de difficultés pour les consommateurs. Ces défaillances du réseau électrique 
                  perturbent les foyers et les entreprises, entraînant des pertes économiques et une réduction 
                  de la qualité de vie. Bien que l'énergie solaire photovoltaïque offre une solution prometteuse, 
                  le faible rendement des panneaux solaires (16-23%) limite les performances globales du système. 
                  Afin de renforcer ces performances, il devient impératif d'utiliser un régulateur de charge 
                  solaire MPPT (Maximum Power Point Tracking).
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-800">Problématique</h2>
                <p className="text-gray-700 mb-6">
                  Le faible rendement des panneaux solaires limite la production photovoltaïque, ce qui restreint 
                  le rendement global des installations photovoltaïques. Afin d'améliorer les performances des 
                  installations photovoltaïques, une stratégie serait l'amélioration des performances du régulateur 
                  de charge MPPT. C'est dans cette optique que l'entreprise BENDO a initié une réflexion sur la 
                  conception et la réalisation d'un chargeur solaire MPPT en utilisant les technologies endogènes. 
                  L'étude des régulateurs MPPT classiques, menée par l'entreprise, ont relevé des failles dans la 
                  mesure.
                </p>

                <h2 className="text-2xl font-bold mb-4 text-gray-800">Objectifs</h2>
                <p className="text-gray-700 mb-2">
                  Ce projet visait à concevoir et à réaliser un régulateur de charge solaire MPPT amélioré qui 
                  corrige les limitations des conceptions existantes. Les principaux objectifs étaient les suivants :
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li className="mb-2">
                    Concevoir un convertisseur abaisseur pour adapter le niveau de tension des panneaux solaires 
                    aux exigences de charge de la batterie.
                  </li>
                  <li className="mb-2">
                    Développer un algorithme pour optimiser la charge de la batterie tout en suivant le point de 
                    puissance maximale (PPM) du panneau solaire.
                  </li>
                  <li className="mb-2">
                    Concevoir un système de commande pour gérer le convertisseur sur la base de l'algorithme MPPT.
                  </li>
                  <li className="mb-2">
                    Simuler le comportement du régulateur de charge à l'aide du logiciel Proteus.
                  </li>
                  <li className="mb-2">
                    Mettre en œuvre une gestion thermique à l'aide de dissipateurs thermiques.
                  </li>
                  <li className="mb-2">
                    Réaliser et tester le système complet.
                  </li>
                  <li>
                    Améliorer le circuit de mesure des régulateurs MPPT classiques afin d'améliorer leurs performances.
                  </li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-gray-800">Résultats</h2>
                <p className="text-gray-700 mb-2">
                  Le projet a abouti avec succès à la conception et à la réalisation d'un prototype de régulateur 
                  de charge MPPT. Les principaux résultats sont les suivants :
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li className="mb-2">
                    Une conception fonctionnelle de convertisseur abaisseur capable d'adapter la tension d'entrée 
                    d'un panneau solaire de 15V-70V pour charger des batteries de 12V ou 24V.
                  </li>
                  <li className="mb-2">
                    Mise en œuvre d'un algorithme MPPT de type "Perturbation et Observation" (P&O) pour suivre 
                    dynamiquement le point de puissance maximale.
                  </li>
                  <li className="mb-2">
                    Conception d'un circuit de mesure de tension qui assure une isolation galvanique entre les 
                    circuits de puissance et de commande, réduisant ainsi l'impact des interférences de masse 
                    sur la précision des mesures.
                  </li>
                  <li className="mb-2">
                    Des résultats de simulation validant les performances du convertisseur abaisseur et de 
                    l'algorithme MPPT.
                  </li>
                  <li className="mb-2">
                    Une solution de gestion thermique utilisant des dissipateurs thermiques pour réguler la 
                    température des composants.
                  </li>
                  <li>
                    Un PCB réalisé et un prototype de régulateur de charge assemblé
                  </li>
                </ul>
              </div>
            </div>

            {/* Project Gallery */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Galerie du Projet</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Schéma bloc du régulateur MPPT</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Algorithme MPPT</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Circuit de mesure en tension avec isolation galvanique</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Simulation du fonctionnement du convertisseur CC-CC</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Face avant du Typon réalisé</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Face arrière du typon réalisé</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Circuit imprimé avant la pose des composants</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <p className="text-gray-500">Circuit imprimé après la pose des composants</p>
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
                    <p>Énergie Solaire</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600">Durée</h4>
                    <p>12 mois</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600">Statut</h4>
                    <p>Complété</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600">Partenaire</h4>
                    <p>Entreprise BENDO</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Électronique de puissance</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Microcontrôleurs</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">MPPT</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Proteus</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Convertisseur DC-DC</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Isolation galvanique</span>
                </div>
              </div>
            </div>

            {/* Team */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Équipe</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-medium">DR</span>
                    </div>
                    <div>
                      <p className="font-medium">Dr. Robert Mbou</p>
                      <p className="text-sm text-gray-500">Chef de projet</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-medium">JM</span>
                    </div>
                    <div>
                      <p className="font-medium">Jean Makongo</p>
                      <p className="text-sm text-gray-500">Ingénieur électronique</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-medium">FN</span>
                    </div>
                    <div>
                      <p className="font-medium">Fanta Ndiaye</p>
                      <p className="text-sm text-gray-500">Ingénieure électronique</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Publications */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Publications</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="flex items-start">
                      <FileText className="w-5 h-5 text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium mb-1">Amélioration des performances des régulateurs MPPT pour installations photovoltaïques</p>
                        <p className="text-sm text-gray-500">Conférence internationale sur les énergies renouvelables, 2023</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start">
                      <FileText className="w-5 h-5 text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium mb-1">Conception d'un circuit de mesure avec isolation galvanique pour régulateurs MPPT</p>
                        <p className="text-sm text-gray-500">Journal of Power Electronics, 2024</p>
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