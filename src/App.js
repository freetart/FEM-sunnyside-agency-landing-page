import Globals from './abstracts/Globals';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TransformBrand from './components/TransformBrand';
import StandOut from './components/StandOut';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';

function App() {
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
    </>
  );
}

export default App;
