import React from 'react'
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Fruits from "../components/home/Fruits";
import Pricing from "../components/home/Pricing";
import Contact from "../components/home/Contact";

function Home() {
    return (
        <div className="main">
            <Hero/>
            <About/>
            <Fruits/>
            <Pricing/>
            <Contact/>
        </div>
    )
}

export default Home
