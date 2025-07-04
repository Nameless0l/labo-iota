import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'IoTA - IoT & Applications | Laboratoire d\'électronique',
  description: 'IoT & Applications est un laboratoire dédié au développement de solutions technologiques innovantes pour répondre aux défis du développement durable au Cameroun.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}