import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Impact from './components/Impact';
import Vision from './components/Vision';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0F]">
      <Hero />
      <Problem />
      <Solution />
      <Impact />
      <Vision />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
