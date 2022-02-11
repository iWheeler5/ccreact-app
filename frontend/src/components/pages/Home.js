import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection'
import HomeTopClubsSection from '../HomeTopClubsSection';
import HomeCityCarousel from '../HomeCityCarousel';

function Home() {
    return(
        <>
        <HeroSection/>
        
        <HomeCityCarousel/>

        <HomeTopClubsSection/>

        </>
    );
}

export default Home;