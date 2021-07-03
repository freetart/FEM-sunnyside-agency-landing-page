import Globals from './abstracts/Globals';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TransformBrand from './components/TransformBrand';

function App() {
  return (
    <>
      <Globals />
      <Navbar />
      <Header />
      <main>
        <TransformBrand />
      </main>
    </>
  );
}

export default App;
