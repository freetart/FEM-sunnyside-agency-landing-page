import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import Globals from './abstracts/Globals';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TransformBrand from './components/TransformBrand';
import StandOut from './components/StandOut';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Tag from './components/Tag';

function App() {
  AOS.init({ offset: 100, duration: 1000, once: true });
  return (
    <>
      <Globals />
      <Navbar />
      <Header />
      <main>
        <TransformBrand />
        <StandOut />
        <Services />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
      <Tag />
    </>
  );
}

export default App;
