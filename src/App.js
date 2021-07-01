import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import MyParticles from './components/MyParticles/MyParticles';
import AboutMe from './components/AboutMe/AboutMe';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <>
      <MyParticles />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
    </>
  );
}

export default App;
