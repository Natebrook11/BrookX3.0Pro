import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Carousel from './Carousel';
import ThemeToggle from "./ThemeToggle"
import Contact from "./Contact"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Projects/>
      <Carousel/>
      <ThemeToggle/>
      <Contact/>
    </div>
  );
}

export default App;
