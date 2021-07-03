import Globals from './abstracts/Globals';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TransformBrand from './components/TransformBrand';
import StandOut from './components/StandOut';

function App() {
  return (
    <>
      <Globals />
      <Navbar />
      <Header />
      <main>
        <TransformBrand />
        <StandOut />
      </main>
    </>
  );
}

export default App;
