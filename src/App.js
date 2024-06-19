import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Work from './components/Work';
import Testimonial from './components/Testimonial'
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className='container'>
      <Navbar/>
      <MainContent/>
      <Work/>
      <Testimonial/>
      <Contact />
      <Footer/>
    </div>
    
    </>
  );
}

export default App;
