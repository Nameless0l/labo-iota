import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Users, FileText } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-700 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Nous serions ravis de discuter de vos projets et d'explorer des collaborations potentielles
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Info & Form */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Envoyez-nous un message</h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          name="firstName" 
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="Votre prénom" 
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          name="lastName" 
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          placeholder="Votre nom" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Votre adresse email" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                      <select 
                        id="subject" 
                        name="subject" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="collaboration">Proposition de collaboration</option>
                        <option value="student">Demande de stage/doctorat</option>
                        <option value="project">Question sur un projet</option>
                        <option value="press">Demande de presse</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows="5" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Votre message" 
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="consent" 
                        name="consent" 
                        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded" 
                      />
                      <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                        J'accepte que mes données soient traitées conformément à la politique de confidentialité.
                      </label>
                    </div>
                    
                    <div>
                      <button type="button" className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-emerald-700 transition flex items-center justify-center">
                        Envoyer le message <Send className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Informations de contact</h2>
              
              <div className="mb-8">
                <div className="flex items-start mb-6">
                  <div className="bg-emerald-100 p-3 rounded-full mr-4">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      Ecole Nationale Superieure de Polytecnique Yaounde,<br/> 
                      Département du GI(Genie Informatique),BP 9390,<br/>
                      Melen, Yaoundé, Cameroun
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-emerald-100 p-3 rounded-full mr-4">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Téléphone</h3>
                    <p className="text-gray-600">+237 677 487 700</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-emerald-100 p-3 rounded-full mr-4">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">anne.chana@univ-yaounde1.cm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-full mr-4">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Heures d'ouverture</h3>
                    <p className="text-gray-600">Lundi - Vendredi: 8h00 - 16h00</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-800 mb-4">Contactez-nous pour :</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Collaborations avec des chercheurs ou des institutions</span>
                  </li>
                  <li className="flex items-start">
                    <FileText className="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Opportunités de stage ou de doctorat</span>
                  </li>
                  <li className="flex items-start">
                    <Send className="w-5 h-5 text-emerald-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">Demandes de présentation de nos projets</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-emerald-700 text-white rounded-xl p-6">
                <h3 className="font-semibold mb-3">Rendez-nous visite</h3>
                <p className="mb-4">
                  Notre laboratoire est situé au sein de la Faculté des Sciences de l'Université de Yaoundé I. 
                  N'hésitez pas à prendre rendez-vous pour visiter nos installations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Questions fréquentes</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full flex justify-between items-center p-6 text-left font-semibold text-gray-800 hover:bg-gray-50 transition">
                <span>Comment puis-je collaborer avec le laboratoire IoTA ?</span>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  Nous sommes ouverts à différentes formes de collaboration, que ce soit avec des chercheurs, des institutions académiques, des entreprises ou des organisations non gouvernementales. Envoyez-nous un message via notre formulaire de contact en précisant votre domaine d'intérêt et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full flex justify-between items-center p-6 text-left font-semibold text-gray-800 hover:bg-gray-50 transition">
                <span>Proposez-vous des stages ou des opportunités pour les étudiants ?</span>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  Oui, nous accueillons régulièrement des stagiaires de niveau master et des doctorants. Les opportunités sont généralement publiées sur notre site web et sur nos réseaux sociaux. Vous pouvez également nous contacter directement pour nous faire part de votre intérêt.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full flex justify-between items-center p-6 text-left font-semibold text-gray-800 hover:bg-gray-50 transition">
                <span>Proposez-vous des services de consultation pour les entreprises ?</span>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  Oui, notre équipe peut fournir des services de consultation dans nos domaines d'expertise, notamment l'IoT, l'énergie solaire, la santé connectée et l'agriculture intelligente. Contactez-nous pour discuter de vos besoins spécifiques.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button className="w-full flex justify-between items-center p-6 text-left font-semibold text-gray-800 hover:bg-gray-50 transition">
                <span>Vos technologies sont-elles disponibles pour une utilisation commerciale ?</span>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  Certaines de nos technologies peuvent être commercialisées via des accords de licence. D'autres sont développées en open source pour maximiser leur impact. Contactez-nous pour discuter des possibilités de transfert de technologie et de partenariat commercial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter */}
      <div className="py-16 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Restez informé</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Abonnez-vous à notre newsletter pour recevoir des mises à jour sur nos projets, événements et publications.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none"
              />
              <button 
                type="button" 
                className="bg-emerald-800 hover:bg-emerald-900 px-6 py-3 rounded-lg font-medium transition"
              >
                S'abonner
              </button>
            </div>
            <p className="text-sm mt-4 text-emerald-200">
              En vous abonnant, vous acceptez de recevoir nos emails. Vous pouvez vous désabonner à tout moment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;