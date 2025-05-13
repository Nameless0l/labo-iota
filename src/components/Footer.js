import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/images/logo-iot.png" alt="IoTA Logo" className="h-10 w-auto" />
              <span className="ml-2 font-bold text-xl text-white">IoTA</span>
            </div>
            <p className="mb-4">
              IoT & Applications est un laboratoire dédié au développement de solutions technologiques innovantes pour répondre aux défis du développement durable au Cameroun.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-emerald-400 transition">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-emerald-400 transition">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-emerald-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-emerald-400 transition">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-emerald-400 transition">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:text-emerald-400 transition">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-emerald-400 transition">
                  Équipe
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-emerald-400 transition">
                  Partenaires
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Projets</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects/regulateur-charge-solaire-mppt" className="hover:text-emerald-400 transition">
                  Régulateur MPPT
                </Link>
              </li>
              <li>
                <Link href="/projects/onduleur-mli" className="hover:text-emerald-400 transition">
                  Onduleur MLI
                </Link>
              </li>
              <li>
                <Link href="/projects/malaria-cam" className="hover:text-emerald-400 transition">
                  CAM-MALARIA
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition">
                  Suivi des femmes enceintes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition">
                  Sécurité routière
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition">
                  Agriculture intelligente
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-emerald-400 flex-shrink-0 mt-1" />
                <span>Ecole Nationale Superieure de Polytecnique Yaounde, Département du GI(Genie Informatique),BP 9390,Melen, Yaoundé, Cameroun</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span>+237 677 487 700</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a href="mailto:anne.chana@univ-yaounde1.cm" className="hover:text-emerald-400 transition">
                  anne.chana@univ-yaounde1.cm
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} IoT & Applications. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;