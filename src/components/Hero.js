// components/Hero.js
import Image from 'next/image';
import Link from 'next/link';

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
            <Link href="/projects" className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md font-medium transition-colors inline-block">
              Découvrir nos projets
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-md font-medium hover:bg-white/10 transition-colors inline-block">
              Collaborer avec nous
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
