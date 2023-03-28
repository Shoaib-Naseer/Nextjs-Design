import React from "react";
import AboutHotel from "../../components/About/AboutHotel";
import Activities from "../../components/Activities/Activities";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";
import Rooms from "../../components/Rooms/Rooms";
import Services from "../../components/Services/Services";
import './MainPage.css'
const MainPage=()=>{
    return(
        <>
            <Header />
            <Hero />
            <Nav />
            <Services />
            <Rooms />
            <AboutHotel />
            <Activities />
        </>
    )
}

export default MainPage