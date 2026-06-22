import React from "react";
import { Mail, Phone, Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer
            data-testid="footer"
            className="bg-[#1E2A23] text-[#F3EFE7]/80 py-16"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3">
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#A4302F] text-white font-serif-display text-xl font-bold">
                                15
                            </span>
                            <span className="font-serif-display text-white text-2xl leading-none">
                                Fête du 15 août — Bramans
                            </span>
                        </div>
                        <p className="mt-5 max-w-md leading-relaxed text-sm">
                            Association loi 1901 — Comité des fêtes de Bramans.
                            Une tradition villageoise au cœur de la Haute-Maurienne.
                        </p>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-[#D4A373] font-semibold">
                            Contact
                        </p>
                        <ul className="mt-4 space-y-3 text-sm text-[#F3EFE7]/80">
                            <li className="flex items-center gap-2">
                                <Mail size={14} />
                                <a
                                    href="mailto:contact@fete-bramans.fr"
                                    data-testid="footer-email"
                                    className="hover:text-white transition"
                                >
                                    contact@fete-bramans.fr
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={14} />
                                <span>04 79 05 12 34</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-[#D4A373] font-semibold">
                            Suivez-nous
                        </p>
                        <div className="mt-4 flex gap-3">
                            <a
                                href="#"
                                aria-label="Facebook"
                                data-testid="footer-facebook"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#A4302F] hover:border-[#A4302F] transition"
                            >
                                <Facebook size={16} />
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram"
                                data-testid="footer-instagram"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#A4302F] hover:border-[#A4302F] transition"
                            >
                                <Instagram size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/50">
                    <p>
                        © {new Date().getFullYear()} Association Fête du 15
                        août — Bramans. Tous droits réservés.
                    </p>
                    <p className="font-serif-display italic text-[#D4A373]">
                        « Ad Mariam per montes »
                    </p>
                </div>
            </div>
        </footer>
    );
}