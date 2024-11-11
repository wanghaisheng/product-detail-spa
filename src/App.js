import {AiOutlineMenu} from 'react-icons/ai'
import Button from "./components/Button";
import About from './components/About';
import Features from './components/Features';
import Menu from './components/Menu';
import Banner from './components/Banner';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'



function App() {
  document.body.style.backgroundColor = '#FFFBF6';
  useEffect(()=>{
    AOS.init({duration: 1000})
  },[])
  return (
    <>
    <section id='home' className='landing-section'>
      <div className="dark-overlay">
        <div className="container">
          <nav id='main-nav' className='navbar navbar-expand-md py-4' data-aos="fade-right">
            <a href="#home" className="navbar-brand">
              <h3>Creme<span>Brew</span></h3>
            </a>

            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <AiOutlineMenu color="#9D6740" />
            </button>

            <div id="navbarCollapse" className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-items">
                  <a href="#home" className="nav-link">Home</a>
                </li>
                <li className="nav-items">
                  <a href="#about" className="nav-link">About</a>
                </li>
                <li className="nav-items">
                  <a href="#menu" className="nav-link">Menu</a>
                </li>
                <li className="nav-items">
                  <a href="#gallery" className="nav-link">Gallery</a>
                </li>
                <li className="nav-items">
                  <a href="#contact" className="nav-link">Contact</a>
                </li>
              </ul>
            </div>

          </nav>

          <div className="row pt-5 d-flex" id="headline">
            <div className="offset-lg-5 col-lg-7 text-right" data-aos="fade-left">
              <h1 className="text-capitalize">The perfect cup of <span>coffee</span></h1>
              <p className="text-right">A place that guarantees a perfect cup of your favorite blend because life is too short to drink bad coffee</p>
              
              <div className="btn-half ml-auto">
                <Button hash={'#menu'} variant={'primary'}>CHECK OUR MENU</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className='pt-5'>
      <About />
    </section>

    <section id="features" className='py-5'>
      <div className="dark-overlay w-100 d-flex align-items-center">
        <Features />
      </div>
    </section>


    <section id='menu' className='pt-5'>
        <Menu />
    </section>

    <section id="banner">
        <Banner />
    </section>

    <section id='testimonials'>
      <Testimonials />
    </section>

    <section id='gallery'>
      <Gallery />
    </section>

    <section id='contact'>
      <Contact />
    </section>
    
    </>
    
  );
}

export default App;
