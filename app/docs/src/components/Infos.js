import React from "react";
import { MapPin, Car, Bus, Tent } from "lucide-react";

const infos = [
    {
        icon: MapPin,
        titre: "Adresse",
        lignes: [
            "Place de l'église",
            "73500 Bramans",
            "Haute-Maurienne, Savoie",
        ],
    },
    {
        icon: Car,
        titre: "En voiture",
        lignes: [
            "A43 sortie n°30 Modane",
            "Puis D1006 direction Lanslebourg",
            "Parking gratuit au village",
        ],
    },
    {
        icon: Bus,
        titre: "Transports en commun",
        lignes: [
            "Gare SNCF de Modane à 12 km",
            "Navette gratuite le 15 août",
            "Départ toutes les 30 mins de 10h à 23h",
        ],
    },
    {
        icon: Tent,
        titre: "Hébergement",
        lignes: [
            "Camping municipal du Planay",
            "Gîtes et chambres d'hôtes",
            "Office de tourisme : 04 79 05 99 06",
        ],
    },
];

export default function Infos() {
    return (
        <section
            id="infos"
            data-testid="infos-section"
            className="py-24 lg:py-32 bg-[#FDFBF7]"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-3xl mb-14">
                    <span className="ornament">Pour venir</span>
                    <h2
                        data-testid="infos-title"
                        className="font-serif-display text-[#2C4C3B] text-4xl md:text-5xl lg:text-6xl tracking-tight mt-5"
                    >
                        Infos pratiques
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {infos.map((info, i) => {
                        const Icon = info.icon;
                        return (
                            <div
                                key={i}
                                data-testid={`infos-card-${i}`}
                                className="bg-white border border-[#E8DFD0] rounded-2xl p-7 hover:border-[#A4302F]/40 hover:shadow-lg transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#A4302F]/10 text-[#A4302F] flex items-center justify-center">
                                    <Icon size={22} />
                                </div>
                                <h3 className="font-serif-display text-2xl text-[#2C4C3B] mt-5">
                                    {info.titre}
                                </h3>
                                <ul className="mt-4 space-y-1.5 text-[#4A5D52] text-sm leading-relaxed">
                                    {info.lignes.map((l, j) => (
                                        <li key={j}>{l}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                <div
                    data-testid="infos-map"
                    className="mt-10 rounded-2xl overflow-hidden border border-[#E8DFD0] shadow-md"
                >
                    <iframe
                        title="Carte de Bramans"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=6.756%2C45.215%2C6.806%2C45.245&layer=mapnik&marker=45.23%2C6.78"
                        className="w-full h-[400px]"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}