import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Projects from './components/Projects';
import ScollToTop from './components/ScollToTop';


function App() {
  return (
    <div className="font-Poppins ">
      <Navbar />
      <Home />
      <About/>
      <Projects />
      <ScollToTop />
    </div>
  );
}

export default App;
