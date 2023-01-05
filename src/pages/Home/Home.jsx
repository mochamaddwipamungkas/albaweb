import React from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/NavBar/NavBar";
import Portfolio from "../../components/Portfolio/portfolio";
import Services from "../../components/Services/Services";
import Testimonials from "../../components/Testimonials/testimonials";
import './Home.css'

export default function Home() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Services />
            <Portfolio />
            <Testimonials />
            <Footer />
        </div>

    )
}