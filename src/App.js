import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Carousel from './Carousel';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Projects/>
      <Carousel/>
    </div>
  );
}

export default App;
