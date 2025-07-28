import { Navigation, Footer } from '@/components/layout';
import {
  HeroSection,
  AboutSection,
  TeamSection,
  ServicesSection,
  PortfolioSection,
  ContactSection,
} from '@/components/sections';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
