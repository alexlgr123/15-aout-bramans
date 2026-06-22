import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Presentation from "@/components/Presentation";
import Programme from "@/components/Programme";
import Comite from "@/components/Comite";
import Galerie from "@/components/Galerie";
import Infos from "@/components/Infos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <main
            data-testid="home-page"
            className="relative min-h-screen bg-[#FDFBF7] text-[#1E2A23] overflow-x-hidden"
        >
            <Navbar scrolled={scrolled} />
            <Hero />
            <Presentation />
            <Programme />
            <Comite />
            <Galerie />
            <Infos />
            <Contact />
            <Footer />
        </main>
    );
}