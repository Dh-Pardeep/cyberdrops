import './App.css';
import './Root.css';
import React from 'react';
import Hero from './components/Hero';
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
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/views/HomePage';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, [])
  return (
    <>
      <React.Fragment>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Team' element={<TeamSlider />} />
          <Route path='/Partners' element={<Partners />} />
          <Route path='/Roadmap' element={<RoadMap />} />
          <Route path='/about' element={<MyFooter />} />
        </Routes>
      </React.Fragment>
    </>
  );
}

export default App;
