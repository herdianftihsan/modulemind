import { Code2, Link, Send, AtSign } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 bg-zinc-950">
            <div className="max-w-5xl mx-auto px-6 py-10">
                <div className="grid sm:grid-cols-4 gap-10 mb-10">
                    {/* Brand */}
                    <div className="sm:col-span-2">
                        <div className="flex items-center gap-2.5 mb-3">
                            <div className="w-7 h-7 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                                <Code2 size={13} className="text-emerald-400" />
                            </div>
                            <span className="font-bold text-zinc-100 text-[15px]">ModuleMind</span>
                        </div>
                        <p className="text-zinc-600 text-[13px] leading-relaxed max-w-xs">
                            Platform AI untuk menciptakan modul latihan debugging yang bermakna. Dibuat untuk mentor, instruktur, dan siapa pun yang percaya belajar dari kesalahan adalah cara terbaik.
                        </p>
                        <div className="flex items-center gap-2 mt-5">
                            {[
                                { icon: Link, label: "GitHub" },
                                { icon: Send, label: "Twitter" },
                                { icon: AtSign, label: "Email" },
                            ].map(({ icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="w-8 h-8 rounded-md border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-600 flex items-center justify-center transition-all"
                                >
                                    <Icon size={13} className="text-zinc-500" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-700 font-mono mb-4">
                            Produk
                        </p>
                        <ul className="space-y-2.5">
                            {["Generator Modul", "Cara Kerja", "Contoh Studi Kasus", "Panduan Penggunaan"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-[13px] text-zinc-600 hover:text-zinc-200 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-700 font-mono mb-4">
                            Hubungi Kami
                        </p>
                        <ul className="space-y-2.5">
                            {[
                                { label: "hello@modulemind.dev", icon: AtSign },
                                { label: "@modulemind", icon: Send },
                                { label: "github.com/modulemind", icon: Link },
                            ].map(({ label, icon: Icon }) => (
                                <li key={label}>
                                    <a href="#" className="flex items-center gap-2 text-[13px] text-zinc-600 hover:text-zinc-200 transition-colors">
                                        <Icon size={12} />
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[11px] text-zinc-700 font-mono">
                        © 2026 ModuleMind · Dibangun dengan ♥
                    </p>
                    <div className="flex items-center gap-5 text-[11px] text-zinc-700 font-mono">
                        <a href="#" className="hover:text-zinc-300 transition-colors">
                            Kebijakan Privasi
                        </a>
                        <a href="#" className="hover:text-zinc-300 transition-colors">
                            Syarat Penggunaan
                        </a>
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Semua sistem normal
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}