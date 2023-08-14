import React from 'react'
import Hero from '../Hero'
import OurMission from '../OurMission'
import OurAlgo from '../OurAlgo'
import What from '../What'
import HowWorksCard from '../HowWorksCard'
import TeamSlider from '../TeamSlider'
import RoadMap from '../RoadMap'
import MyAccordion from '../MyAccordion'
import MyFooter from '../MyFooter'
import Partners from '../Partners'
import BackToTop from '../BackToTop'
import MyPreloader from '../MyPreloader'
const HomePage = () => {
    return (
        <div className='bg-black overflow-hidden'>
            <BackToTop />
            <MyPreloader />
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
    )
}

export default HomePage