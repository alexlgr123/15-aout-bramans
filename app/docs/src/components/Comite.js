import React from "react";

const members = [
    {
        nom: "Marie Dubois-Arnaud",
        role: "Présidente",
        bio: "Coordonne l'association depuis 2018, enfant du pays.",
        initiales: "MD",
    },
    {
        nom: "Jean-Pierre Mollard",
        role: "Vice-président",
        bio: "Ancien maire-adjoint, gardien des traditions.",
        initiales: "JP",
    },
    {
        nom: "Camille Tournier",
        role: "Trésorière",
        bio: "Comptable de profession, mémoire de l'association.",
        initiales: "CT",
    },
    {
        nom: "Lucas Faure",
        role: "Secrétaire",
        bio: "Anime la communication et les réseaux.",
        initiales: "LF",
    },
    {
        nom: "Hélène Garin",
        role: "Responsable repas",
        bio: "Cheffe d'orchestre du grand repas champêtre.",
        initiales: "HG",
    },
    {
        nom: "Antoine Réguis",
        role: "Responsable animations",
        bio: "Programmation musicale, bal et jeux pour enfants.",
        initiales: "AR",
    },
    {
        nom: "Père Étienne Bouvard",
        role: "Aumônier",
        bio: "Préside la messe et la procession de l'Assomption.",
        initiales: "ÉB",
    },
    {
        nom: "Sophie Albrand",
        role: "Coordinatrice bénévoles",
        bio: "Accueille et organise notre équipe de 65 bénévoles.",
        initiales: "SA",
    },
];

const palettes = [
    "from-[#A4302F] to-[#8B2625]",
    "from-[#2C4C3B] to-[#1E3A2C]",
    "from-[#D4A373] to-[#B98856]",
    "from-[#4A5D52] to-[#2C4C3B]",
];

export default function Comite() {
    return (
        <section
            id="comite"
            data-testid="comite-section"
            className="py-24 lg:py-32 bg-[#FDFBF7]"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14">
                    <div className="lg:col-span-7">
                        <span className="ornament">Notre équipe</span>
                        <h2
                            data-testid="comite-title"
                            className="font-serif-display text-[#2C4C3B] text-4xl md:text-5xl lg:text-6xl tracking-tight mt-5"
                        >
                            Le Comité des fêtes
                        </h2>
                    </div>
                    <p className="lg:col-span-5 text-lg text-[#4A5D52] leading-relaxed">
                        Huit bénévoles passionnés, soutenus par une équipe
                        élargie, font vivre la fête tout au long de l'année.
                        Sans eux, rien ne serait possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {members.map((m, i) => (
                        <article
                            key={m.nom}
                            data-testid={`comite-member-${i}`}
                            className="group bg-white rounded-2xl p-7 border border-[#E8DFD0] hover:-translate-y-1 hover:shadow-xl transition-all duration-500"
                        >
                            <div
                                className={`w-16 h-16 rounded-full bg-gradient-to-br ${palettes[i % 4]} flex items-center justify-center text-white font-serif-display text-xl font-semibold shadow-md`}
                            >
                                {m.initiales}
                            </div>
                            <h3 className="font-serif-display text-2xl text-[#2C4C3B] mt-5 leading-tight">
                                {m.nom}
                            </h3>
                            <p className="text-xs uppercase tracking-[0.2em] text-[#A4302F] font-semibold mt-2">
                                {m.role}
                            </p>
                            <p className="text-[#4A5D52] mt-4 leading-relaxed text-sm">
                                {m.bio}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}