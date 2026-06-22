import React, { useState } from "react";
import { Clock, MapPin } from "lucide-react";

const journees = [
    {
        id: "j1",
        date: "Jeudi 14 août",
        titre: "Veillée d'ouverture",
        evenements: [
            {
                heure: "18:30",
                titre: "Apéritif d'accueil",
                lieu: "Place de l'église",
                desc: "Vin chaud, diots et accordéon — la fête s'ouvre dans la convivialité.",
            },
            {
                heure: "20:30",
                titre: "Concert folk savoyard",
                lieu: "Parvis",
                desc: "L'ensemble « Les Chants de la Maurienne » fait résonner les airs d'antan.",
            },
            {
                heure: "22:30",
                titre: "Retraite aux flambeaux",
                lieu: "Départ église",
                desc: "Procession illuminée dans les ruelles, suivie d'un chocolat chaud.",
            },
        ],
    },
    {
        id: "j2",
        date: "Vendredi 15 août — Assomption",
        titre: "Jour de fête",
        evenements: [
            {
                heure: "10:30",
                titre: "Messe solennelle",
                lieu: "Église Saint-Pierre",
                desc: "Office présidé par M. le curé, chants liturgiques et bénédiction.",
            },
            {
                heure: "11:45",
                titre: "Procession & bénédiction",
                lieu: "Centre du village",
                desc: "Procession traditionnelle de la Vierge à travers les ruelles fleuries.",
            },
            {
                heure: "12:30",
                titre: "Grand repas champêtre",
                lieu: "Pré communal",
                desc: "Diots-polenta, tomme de Savoie, génépi — sur réservation. 18 € adulte.",
            },
            {
                heure: "15:00",
                titre: "Jeux & animations",
                lieu: "Place du marché",
                desc: "Course en sac, tir à la corde, manège — pour les petits et les grands.",
            },
            {
                heure: "17:00",
                titre: "Bal champêtre",
                lieu: "Place de l'église",
                desc: "Orchestre live, valses, polkas et danses folkloriques.",
            },
            {
                heure: "22:30",
                titre: "Feu d'artifice musical",
                lieu: "Hameau du Verney",
                desc: "Le clou de la fête : 20 minutes de magie pyrotechnique sous les étoiles.",
            },
        ],
    },
    {
        id: "j3",
        date: "Samedi 16 août",
        titre: "Clôture en douceur",
        evenements: [
            {
                heure: "09:00",
                titre: "Marché des producteurs",
                lieu: "Place du village",
                desc: "Fromages, charcuteries, miels et confitures de la vallée.",
            },
            {
                heure: "11:00",
                titre: "Randonnée commentée",
                lieu: "Sentier de l'alpage",
                desc: "Balade familiale guidée jusqu'au chalet d'alpage avec dégustation.",
            },
            {
                heure: "19:00",
                titre: "Repas de clôture & remerciements",
                lieu: "Salle des fêtes",
                desc: "Buffet partagé — chaque famille apporte son plat. Discours du Comité.",
            },
        ],
    },
];

const FIREWORKS =
    "https://images.unsplash.com/photo-1514876246314-d9a231ea21db?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGZpcmV3b3JrcyUyMG5pZ2h0fGVufDB8fHx8MTc4MjE2MzY3NXww&ixlib=rb-4.1.0&q=85&h=650&w=940";

const FOOD =
    "https://images.pexels.com/photos/8350659/pexels-photo-8350659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

export default function Programme() {
    const [active, setActive] = useState("j2");
    const current = journees.find((j) => j.id === active);

    return (
        <section
            id="programme"
            data-testid="programme-section"
            className="py-24 lg:py-32 bg-[#F3EFE7]"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-3xl">
                    <span className="ornament">Trois journées</span>
                    <h2
                        data-testid="programme-title"
                        className="font-serif-display text-[#2C4C3B] text-4xl md:text-5xl lg:text-6xl tracking-tight mt-5"
                    >
                        Le programme
                        <em className="not-italic text-[#A4302F]"> 2025</em>
                    </h2>
                    <p className="mt-6 text-lg text-[#4A5D52] leading-relaxed">
                        De la veillée d'ouverture au repas de clôture, chaque
                        instant a sa saveur. Voici le déroulé complet de nos
                        trois jours de fête.
                    </p>
                </div>

                <div className="mt-12 flex flex-wrap gap-3 lg:gap-6" data-testid="programme-tabs">
                    {journees.map((j) => (
                        <button
                            key={j.id}
                            data-testid={`programme-tab-${j.id}`}
                            onClick={() => setActive(j.id)}
                            className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all border ${
                                active === j.id
                                    ? "bg-[#2C4C3B] text-white border-[#2C4C3B] shadow-md"
                                    : "bg-white text-[#2C4C3B] border-[#E8DFD0] hover:border-[#2C4C3B]/40 hover:shadow-lg"
                            }`}
                        >
                            {j.date}
                        </button>
                    ))}
                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-7" data-testid={`programme-content-${current.id}`}>
                        <p className="font-serif-display italic text-[#A4302F] text-2xl lg:text-3xl tracking-tight">
                            {current.titre}
                        </p>
                        <div className="mt-6 space-y-4">
                            {current.evenements.map((e, i) => (
                                <article
                                    key={i}
                                    data-testid={`programme-event-${current.id}-${i}`}
                                    className="group bg-white rounded-2xl p-6 lg:p-7 border border-[#E8DFD0] hover:border-[#A4302F]/40 hover:shadow-lg transition-all"
                                >
                                    <div className="flex flex-wrap items-start gap-5">
                                        <div className="shrink-0 flex flex-col items-center justify-center w-20 h-20 rounded-xl bg-[#FDFBF7] border border-[#E8DFD0] group-hover:bg-[#A4302F] group-hover:text-white transition-colors">
                                            <Clock
                                                size={14}
                                                className="opacity-70 mb-1"
                                            />
                                            <span className="font-serif-display text-xl font-semibold leading-none">
                                                {e.heure}
                                            </span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-serif-display text-2xl text-[#2C4C3B] font-semibold tracking-tight">
                                                {e.titre}
                                            </h3>
                                            <p className="flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-[#A4302F] font-semibold mt-1">
                                                <MapPin size={12} />
                                                {e.lieu}
                                            </p>
                                            <p className="text-[#4A5D52] mt-3 leading-relaxed">
                                                {e.desc}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    <aside className="lg:col-span-5 space-y-6">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src={FOOD}
                                alt="Repas traditionnel savoyard"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#1E2A23]/90 to-transparent">
                                <p className="text-white/70 text-xs uppercase tracking-[0.22em]">
                                    Repas champêtre
                                </p>
                                <p className="font-serif-display text-white text-2xl mt-1">
                                    La table est dressée pour tout le village
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src={FIREWORKS}
                                alt="Feu d'artifice en montagne"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#1E2A23]/90 to-transparent">
                                <p className="text-white/70 text-xs uppercase tracking-[0.22em]">
                                    22h30
                                </p>
                                <p className="font-serif-display text-white text-2xl mt-1">
                                    Feu d'artifice musical
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}