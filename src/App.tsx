import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HomeCollection from './components/HomeCollection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <HomeCollection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
