import React from "react";
import AboutHotel from "../../components/About/AboutHotel";
import Activities from "../../components/Activities/Activities";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Map from "../../components/Map/Map";
import Nav from "../../components/Nav/Nav";
import Rooms from "../../components/Rooms/Rooms";
import Services from "../../components/Services/Services";
import './MainPage.css'
import Contact from "../../components/Contact/Contact";
const MainPage=()=>{
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
      }
    return(
        <>
            <Header />
            <Hero />
            <Nav />
            <Services />
            <Rooms />
            <AboutHotel />
            <Activities />
            <Contact />
            <Map location={location}/>
            <Footer />

        </>
    )
}

export default MainPage