import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { href: "#presentation", label: "La Fête" },
    { href: "#programme", label: "Programme" },
    { href: "#comite", label: "Le Comité" },
    { href: "#galerie", label: "Galerie" },
    { href: "#infos", label: "Infos pratiques" },
    { href: "#contact", label: "Bénévoles" },
];

export default function Navbar({ scrolled }) {
    const [open, setOpen] = useState(false);

    return (
        <header
            data-testid="navbar"
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E8DFD0] shadow-sm"
                    : "bg-transparent border-b border-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
                <a
                    href="#top"
                    data-testid="nav-logo"
                    className="flex items-center gap-3"
                >
                    <span
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-full font-serif-display text-lg font-bold transition-colors ${
                            scrolled
                                ? "bg-[#A4302F] text-white"
                                : "bg-white/90 text-[#A4302F]"
                        }`}
                    >
                        15
                    </span>
                    <span
                        className={`font-serif-display text-xl leading-none transition-colors ${
                            scrolled ? "text-[#2C4C3B]" : "text-white"
                        }`}
                    >
                        Bramans
                        <span className="block text-[10px] tracking-[0.28em] uppercase mt-0.5 font-sans">
                            15 août
                        </span>
                    </span>
                </a>

                <nav className="hidden lg:flex items-center gap-8">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            data-testid={`nav-link-${l.href.slice(1)}`}
                            href={l.href}
                            className={`text-sm font-medium tracking-wide transition-colors hover:text-[#A4302F] ${
                                scrolled ? "text-[#2C4C3B]" : "text-white/95"
                            }`}
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        data-testid="nav-cta-benevole"
                        className="ml-2 inline-flex items-center px-5 py-2.5 rounded-full bg-[#A4302F] text-white text-sm font-semibold tracking-wide hover:bg-[#8B2625] hover:-translate-y-0.5 transition-all"
                    >
                        Devenir bénévole
                    </a>
                </nav>

                <button
                    data-testid="nav-mobile-toggle"
                    aria-label="Ouvrir le menu"
                    onClick={() => setOpen(!open)}
                    className={`lg:hidden p-2 rounded-full ${
                        scrolled ? "text-[#2C4C3B]" : "text-white"
                    }`}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {open && (
                <div
                    data-testid="nav-mobile-menu"
                    className="lg:hidden bg-[#FDFBF7] border-t border-[#E8DFD0] px-6 py-6 space-y-4"
                >
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpen(false)}
                            data-testid={`nav-mobile-link-${l.href.slice(1)}`}
                            className="block text-[#2C4C3B] font-medium tracking-wide hover:text-[#A4302F] transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}