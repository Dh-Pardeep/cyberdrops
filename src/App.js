import './App.css';
import './Root.css';
import Hero from './components/Hero';
import MyNav from './components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import OurMission from './components/OurMission';
import Partners from './components/Partners';
import OurAlgo from './components/OurAlgo';
import What from './components/What';
import HowWorksCard from './components/HowWorksCard';
import TeamSlider from './components/TeamSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RoadMap from './components/RoadMap';
import MyAccordion from './components/MyAccordion';
import MyFooter from './components/MyFooter';
import MyPreloader from './components/MyPreloader';
import BackToTop from './components/BackToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, [])
  return (
    <>
      <div className='bg-black'>
        <BackToTop />
        <MyPreloader />
        <MyNav />
        <Hero />
        <OurMission />
        <Partners />
        <OurAlgo />
        <What />
        <HowWorksCard />
        <TeamSlider />
        <RoadMap />
        <MyAccordion />
        <MyFooter />
      </div>
    </>
  );
}

export default App;
