import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Send, Heart } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
    const [form, setForm] = useState({
        nom: "",
        email: "",
        telephone: "",
        sujet: "",
        message: "",
        benevole: true,
    });
    const [loading, setLoading] = useState(false);

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const submit = async (e) => {
        e.preventDefault();
        if (!form.nom || !form.email || !form.sujet || !form.message) {
            toast.error("Merci de remplir tous les champs obligatoires.");
            return;
        }
        setLoading(true);
        try {
            await axios.post(`${API}/contact`, form);
            toast.success(
                form.benevole
                    ? "Merci ! Votre inscription bénévole a été reçue. Nous vous recontactons rapidement."
                    : "Merci ! Votre message a été envoyé.",
            );
            setForm({
                nom: "",
                email: "",
                telephone: "",
                sujet: "",
                message: "",
                benevole: true,
            });
        } catch (err) {
            toast.error("Une erreur est survenue. Merci de réessayer.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="py-24 lg:py-32 bg-[#2C4C3B] text-[#FDFBF7] relative overflow-hidden"
        >
            <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 20% 30%, #D4A373 0, transparent 50%), radial-gradient(circle at 80% 70%, #A4302F 0, transparent 50%)",
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    <div className="lg:col-span-5">
                        <span className="ornament" style={{ color: "#D4A373" }}>
                            Rejoignez-nous
                        </span>
                        <h2
                            data-testid="contact-title"
                            className="font-serif-display text-white text-4xl md:text-5xl lg:text-6xl tracking-tight mt-5 leading-[1.05]"
                        >
                            Devenez{" "}
                            <em className="not-italic text-[#D4A373]">
                                bénévole
                            </em>{" "}
                            de la fête
                        </h2>
                        <p className="mt-6 text-lg text-[#F3EFE7]/90 leading-relaxed">
                            Service au repas, tenue d'un stand, montage des
                            chapiteaux, accueil des visiteurs : il y a une place
                            pour chacun. Remplissez ce formulaire et nous vous
                            recontactons.
                        </p>

                        <div className="mt-10 space-y-4 text-[#F3EFE7]/90 text-sm leading-relaxed">
                            <p className="flex items-start gap-3">
                                <Heart
                                    size={18}
                                    className="text-[#D4A373] mt-1 shrink-0"
                                />
                                <span>
                                    <strong className="text-white">
                                        Pas besoin d'expérience.
                                    </strong>{" "}
                                    Bonne humeur et envie de partager suffisent.
                                </span>
                            </p>
                            <p className="flex items-start gap-3">
                                <Heart
                                    size={18}
                                    className="text-[#D4A373] mt-1 shrink-0"
                                />
                                <span>
                                    <strong className="text-white">
                                        Repas offerts
                                    </strong>{""}
                                    aux bénévoles pendant leur service.
                                </span>
                            </p>
                            <p className="flex items-start gap-3">
                                <Heart
                                    size={18}
                                    className="text-[#D4A373] mt-1 shrink-0"
                                />
                                <span>
                                    <strong className="text-white">
                                        Créneaux flexibles
                                    </strong>{" } "}
                                    selon vos disponibilités.
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <form
                            data-testid="contact-form"
                            onSubmit={submit}
                            className="bg-[#FDFBF7] text-[#1E2A23] rounded-3xl p-8 lg:p-10 shadow-2xl"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <Field
                                    label="Nom complet *"
                                    name="nom"
                                    value={form.nom}
                                    onChange={onChange}
                                    placeholder="Marie Dupont"
                                    testId="contact-input-nom"
                                />
                                <Field
                                    label="Email *"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={onChange}
                                    placeholder="marie@exemple.fr"
                                    testId="contact-input-email"
                                />
                                <Field
                                    label="Téléphone"
                                    name="telephone"
                                    value={form.telephone}
                                    onChange={onChange}
                                    placeholder="06 12 34 56 78"
                                    testId="contact-input-telephone"
                                />
                                <Field
                                    label="Sujet *"
                                    name="sujet"
                                    value={form.sujet}
                                    onChange={onChange}
                                    placeholder="Bénévolat — service au repas"
                                    testId="contact-input-sujet"
                                />
                            </div>

                            <div className="mt-5">
                                <label
                                    htmlFor="message"
                                    className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#4A5D52] mb-2"
                                >
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    data-testid="contact-input-message"
                                    rows={5}
                                    value={form.message}
                                    onChange={onChange}
                                    placeholder="Dites-nous quand vous êtes disponible et ce qui vous intéresse…"
                                    className="w-full px-4 py-3 rounded-xl bg-[#F3EFE7] border border-[#E8DFD0] focus:border-[#A4302F] focus:ring-2 focus:ring-[#A4302F]/20 focus:outline-none transition resize-none text-[#1E2A23]"
                                />
                            </div>

                            <label
                                data-testid="contact-checkbox-benevole-label"
                                className="mt-5 flex items-start gap-3 cursor-pointer group"
                            >
                                <input
                                    type="checkbox"
                                    name="benevole"
                                    data-testid="contact-checkbox-benevole"
                                    checked={form.benevole}
                                    onChange={onChange}
                                    className="mt-1 w-5 h-5 rounded border-[#E8DFD0] text-[#A4302F] focus:ring-[#A4302F] focus:ring-2 focus:outline-none transition cursor-pointer"
                                />
                                <span className="text-sm text-[#4A5D52] leading-relaxed">
                                    Je souhaite m'inscrire comme bénévole pour
                                    aider à l'organisation de la fête.
                                </span>
                            </label>

                            <button
                                type="submit"
                                data-testid="contact-submit"
                                disabled={loading}
                                className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#A4302F] text-white font-semibold hover:bg-[#8B2625] hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:translate-y-0 shadow-lg shadow-[#A4302F]/30"
                            >
                                <Send size={18} />
                                {loading ? "Envoi en cours…" : "Envoyer mon message"}
                            </button>

                            <p className="mt-4 text-xs text-[#4A5D52]/80 leading-relaxed">
                                Vos données restent confidentielles et ne sont
                                utilisées que par le Comité des fêtes.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Field({ label, name, type = "text", value, onChange, placeholder, testId }) {
    return (
        <div>
            <label
                htmlFor={name}
                className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#4A5D52] mb-2"
            >
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                data-testid={testId}
                className="w-full px-4 py-3 rounded-xl bg-[#F3EFE7] border border-[#E8DFD0] focus:border-[#A4302F] focus:ring-2 focus:ring-[#A4302F]/20 focus:outline-none transition text-[#1E2A23]"
            />
        </div>
    );
}