import './app.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects.tsx';
import TechStack from './components/TechStack/TechStack.tsx';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
       <Header/> 
       <Hero/> 
       <Projects/> 
       <Experience/>
       <TechStack/> 
       <Education/>
       <Contact/> 
       <Footer/>
    </>
  );
}

export default App;
