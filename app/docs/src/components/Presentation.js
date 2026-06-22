import React from "react";

const IMG =
    "https://images.unsplash.com/photo-1631179234473-f48fedffed9a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjB2aWxsYWdlJTIwZmVzdGl2YWwlMjBvdXRkb29yfGVufDB8fHx8MTc4MjE2MzY3NXww&ixlib=rb-4.1.0&q=85&w=1600";

export default function Presentation() {
    return (
        <section
            id="presentation"
            data-testid="presentation-section"
            className="relative py-24 lg:py-32 bg-[#FDFBF7]"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={IMG}
                                alt="Fête de village traditionnelle"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-[#D4A373]/30 rounded-2xl pointer-events-none" />
                        </div>
                        <div className="hidden lg:block absolute -mt-24 ml-auto right-0 lg:right-auto lg:ml-[18rem] bg-[#2C4C3B] text-[#FDFBF7] rounded-2xl p-6 max-w-[220px] shadow-xl">
                            <p className="font-serif-display text-4xl leading-none">
                                Depuis
                                <br />
                                <span className="text-[#D4A373]">1923</span>
                            </p>
                            <p className="text-xs uppercase tracking-[0.22em] mt-3 text-white/70">
                                Un siècle de fête
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <span className="ornament text-[#A4302F] font-serif-display text-lg md:text-xl tracking-[0.18em] uppercase">
                            Notre histoire
                        </span>
                        <h2
                            data-testid="presentation-title"
                            className="font-serif-display text-[#2C4C3B] text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mt-5"
                        >
                            Une tradition vivante,
                            <br />
                            <em className="not-italic text-[#A4302F]">
                                célébrée chaque été
                            </em>
                        </h2>
                        <div className="mt-8 space-y-5 text-[#4A5D52] text-lg leading-relaxed">
                            <p>
                                Chaque 15 août, jour de l'Assomption, le village
                                de Bramans se pare de ses plus beaux atours pour
                                célébrer sa fête patronale. Une tradition
                                séculaire qui rassemble habitants, anciens,
                                amis et visiteurs autour de l'église baroque et
                                des hameaux d'alpage.
                            </p>
                            <p>
                                Notre association, animée par une équipe de
                                bénévoles passionnés, perpétue cet héritage en
                                proposant trois jours d'animations mêlant
                                spiritualité, musique, gastronomie de la
                                Maurienne et grand feu d'artifice sous les
                                étoiles.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-[#E8DFD0]">
                            <div data-testid="stat-visiteurs">
                                <p className="font-serif-display text-[#A4302F] text-4xl md:text-5xl">
                                    +2&nbsp;000
                                </p>
                                <p className="text-xs uppercase tracking-[0.18em] mt-1 text-[#4A5D52]">
                                    Visiteurs
                                </p>
                            </div>
                            <div data-testid="stat-benevoles">
                                <p className="font-serif-display text-[#A4302F] text-4xl md:text-5xl">
                                    65
                                </p>
                                <p className="text-xs uppercase tracking-[0.18em] mt-1 text-[#4A5D52]">
                                    Bénévoles
                                </p>
                            </div>
                            <div data-testid="stat-editions">
                                <p className="font-serif-display text-[#A4302F] text-4xl md:text-5xl">
                                    102e
                                </p>
                                <p className="text-xs uppercase tracking-[0.18em] mt-1 text-[#4A5D52]">
                                    Édition
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}