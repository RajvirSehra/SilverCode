import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import Outcomes from './components/Outcomes';
import Differentiator from './components/Differentiator';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import SocialProof from './components/SocialProof';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#040d1a' }}>
      <Nav />
      <main>
        <Hero />
        <div className="section-line" />
        <Services />
        <div className="section-line" />
        <Outcomes />
        <div className="section-line" />
        <Differentiator />
        <div className="section-line" />
        <HowItWorks />
        <div className="section-line" />
        <UseCases />
        <div className="section-line" />
        <SocialProof />
        <div className="section-line" />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
