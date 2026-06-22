import React, { useState } from "react";
import { X } from "lucide-react";

const photos = [
    {
        url: "https://images.unsplash.com/photo-1594069758873-e79e9075eb7d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxhbHBpbmUlMjBtb3VudGFpbiUyMHZpbGxhZ2UlMjBzdW1tZXJ8ZW58MHx8fHwxNzgyMTYzNjc1fDA&ixlib=rb-4.1.0&q=85",
        legende: "Édition 2024 — Procession dans le village",
        span: "lg:col-span-8 lg:row-span-2",
    },
    {
        url: "https://images.unsplash.com/photo-1562066229-db055c0bc8c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwyfHxydXN0aWMlMjB2aWxsYWdlJTIwZmVzdGl2YWwlMjBvdXRkb29yfGVufDB8fHx8MTc4MjE2MzY3NXww&ixlib=rb-4.1.0&q=85",
        legende: "2023 — Bal champêtre sur la place de l'église",
        span: "lg:col-span-4",
    },
    {
        url: "https://images.pexels.com/photos/27355656/pexels-photo-27355656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        legende: "2022 — Tablée du grand repas de village",
        span: "lg:col-span-4",
    },
    {
        url: "https://images.unsplash.com/photo-1558858534-45db5c111047?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxtb3VudGFpbiUyMGZpcmV3b3JrcyUyMG5pZ2h0fGVufDB8fHx8MTc4MjE2MzY3NXww&ixlib=rb-4.1.0&q=85",
        legende: "2024 — Feu d'artifice depuis le Verney",
        span: "lg:col-span-6",
    },
    {
        url: "https://images.pexels.com/photos/8350659/pexels-photo-8350659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        legende: "2023 — Diots et polenta",
        span: "lg:col-span-6",
    },
    {
        url: "https://images.unsplash.com/photo-1631179234473-f48fedffed9a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjB2aWxsYWdlJTIwZmVzdGl2YWwlMjBvdXRkb29yfGVufDB8fHx8MTc4MjE2MzY3NXww&ixlib=rb-4.1.0&q=85",
        legende: "2022 — Préparatifs de la fête",
        span: "lg:col-span-12",
    },
];

export default function Galerie() {
    const [zoom, setZoom] = useState(null);

    return (
        <section
            id="galerie"
            data-testid="galerie-section"
            className="py-24 lg:py-32 bg-[#F3EFE7]"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-3xl mb-14">
                    <span className="ornament">Souvenirs</span>
                    <h2
                        data-testid="galerie-title"
                        className="font-serif-display text-[#2C4C3B] text-4xl md:text-5xl lg:text-6xl tracking-tight mt-5"
                    >
                        Galerie des
                        <em className="not-italic text-[#A4302F]"> éditions passées</em>
                    </h2>
                    <p className="mt-6 text-lg text-[#4A5D52] leading-relaxed">
                        Quelques instants volés à la fête : sourires d'enfants,
                        tablées partagées, ciels embrasés par les feux du 15
                        août.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-12 auto-rows-[180px] lg:auto-rows-[220px] gap-4">
                    {photos.map((p, i) => (
                        <button
                            key={i}
                            data-testid={`galerie-photo-${i}`}
                            onClick={() => setZoom(p)}
                            className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-700 ${p.span || "col-span-1"}`}
                        >
                            <img
                                src={p.url}
                                alt={p.legende}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A23]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <p className="absolute bottom-4 left-4 right-4 text-white font-serif-display text-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 text-left">
                                {p.legende}
                            </p>
                        </button>
                    ))}
                </div>
            </div>

            {zoom && (
                <div
                    data-testid="galerie-lightbox"
                    className="fixed inset-0 z-[60] bg-[#1E2A23]/95 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in"
                    onClick={() => setZoom(null)}
                >
                    <button
                        data-testid="galerie-lightbox-close"
                        onClick={() => setZoom(null)}
                        className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 backdrop-blur"
                        aria-label="Fermer la galerie"
                    >
                        <X size={24} />
                    </button>
                    <figure
                        className="max-w-5xl w-full max-h-[80vh] overflow-hidden flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={zoom.url}
                            alt={zoom.legende}
                            className="w-full max-h-[80vh] object-contain rounded-xl"
                        />
                        <figcaption className="text-center mt-4 text-white/80 font-serif-display text-xl italic">
                            {zoom.legende}
                        </figcaption>
                    </figure>
                </div>
            )}
        </section>
    );
}