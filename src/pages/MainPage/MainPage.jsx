import React from "react";
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
        </>
    )
}

export default MainPage