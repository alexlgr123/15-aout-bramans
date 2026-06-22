import React from "react";
import { ChevronDown } from "lucide-react";

const HERO_IMG =
    "https://images.unsplash.com/photo-1729010733988-637a20cc5e37?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxhbHBpbmUlMjBtb3VudGFpbiUyMHZpbGxhZ2UlMjBzdW1tZXJ8ZW58MHx8fHwxNzgyMTYzNjc1fDA&ixlib=rb-4.1.0&q=85";

export default function Hero() {
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative min-h-[100svh] w-full flex items-end overflow-hidden"
        >
            <div className="absolute inset-0">
                <img
                    src={HERO_IMG}
                    alt="Village alpin de Bramans en été"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1E2A23]/30 via-[#1E2A23]/30 to-[#1E2A23]/85" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pb-20 pt-32 lg:pb-32">
                <div className="max-w-3xl reveal">
                    <span
                        data-testid="hero-eyebrow"
                        className="ornament text-white"
                        style={{ color: "#F3EFE7" }}
                    >
                        <span style={{ color: "#F3EFE7" }}>
                            Association · Haute-Maurienne
                        </span>
                    </span>
                    <h1
                        data-testid="hero-title"
                        className="font-serif-display text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight mt-6 text-balance"
                    >
                        La Fête du{" "}
                        <em className="not-italic text-[#D4A373]">15 août</em>
                        <br />à Bramans
                    </h1>
                    <p
                        data-testid="hero-subtitle"
                        className="mt-8 text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed font-light"
                    >
                        Trois jours de tradition, de musique, de gastronomie
                        savoyarde et de feu d'artifice au cœur des Alpes —
                        autour de l'Assomption, l'âme de notre village se
                        rassemble.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#programme"
                            data-testid="hero-cta-programme"
                            className="inline-flex items-center px-7 py-3.5 rounded-full bg-[#A4302F] text-white font-semibold hover:bg-[#8B2625] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#A4302F]/30"
                        >
                            Découvrir le programme
                        </a>
                        <a
                            href="#contact"
                            data-testid="hero-cta-benevole"
                            className="inline-flex items-center px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold border border-white/30 hover:bg-white/20 hover:-translate-y-0.5 transition-all shadow-lg shadow-white/20"
                        >
                            Devenir bénévole
                        </a>
                    </div>

                    <div className="mt-16 flex flex-wrap items-end gap-x-12 gap-y-6">
                        <div data-testid="hero-stat-dates">
                            <p className="text-white/60 text-xs uppercase tracking-[0.22em] font-medium">
                                Dates
                            </p>
                            <p className="font-serif-display text-white text-3xl md:text-4xl mt-1">
                                14 — 16 août
                            </p>
                        </div>
                        <div data-testid="hero-stat-lieu">
                            <p className="text-white/60 text-xs uppercase tracking-[0.22em] font-medium">
                                Lieu
                            </p>
                            <p className="font-serif-display text-white text-3xl md:text-4xl mt-1">
                                Bramans — 73500
                            </p>
                        </div>
                        <div data-testid="hero-stat-entree">
                            <p className="text-white/60 text-xs uppercase tracking-[0.22em] font-medium">
                                Entrée
                            </p>
                            <p className="font-serif-display text-white text-3xl md:text-4xl mt-1">
                                Libre & gratuite
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <a
                href="#presentation"
                aria-label="Faire défiler"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white animate-bounce"
            >
                <ChevronDown size={28} />
            </a>
        </section>
    );
}