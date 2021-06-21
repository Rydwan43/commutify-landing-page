import './App.css';

import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Advantages from './components/Advantages/Advantages';
import OurTeam from './components/OurTeam/OurTeam';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Hero />
      <Features />
      <Advantages />
      <OurTeam />
      <Footer />
    </div>
  );
}

export default App;
