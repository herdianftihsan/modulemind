import { Play, ArrowRight, ChevronDown } from "lucide-react";

export default function Hero({ scrollToGenerate }) {
    return (
        <section className="space-y-8 pt-4">
            {/* Headline */}
            <div className="max-w-3xl space-y-4">
                <h1 className="text-4xl sm:text-[54px] font-black leading-[1.06] tracking-tight text-zinc-50">
                    Ide jadi modul latihan{" "}
                    <br />
                    <span className="text-emerald-400">siap pakai dalam detik.</span>
                </h1>
                <p className="text-zinc-400 text-[16px] max-w-lg leading-relaxed">
                    Generator studi kasus coding dengan starter code berisi bug tersembunyi. Untuk mentor yang ingin sesi debugging yang bermakna — bukan soal pilihan ganda.
                </p>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3 pt-1">
                <button
                    onClick={scrollToGenerate}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-zinc-100 hover:bg-white text-zinc-900 transition-all active:scale-95"
                >
                    <Play size={13} />
                    Coba Sekarang
                    <ArrowRight size={13} />
                </button>
                <a
                    href="#cara-kerja"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold text-zinc-400 border border-zinc-700 hover:border-zinc-500 hover:text-zinc-200 transition-all"
                >
                    Lihat Cara Kerja
                    <ChevronDown size={13} />
                </a>
            </div>

            {/* Stats strip */}
            <div className="flex items-center gap-px pt-4 border-t border-zinc-800 w-fit">
                {[
                    { value: "< 30 detik", label: "waktu generate" },
                    { value: "3–7 bug", label: "per modul" },
                    { value: "100%", label: "siap pakai" },
                ].map(({ value, label }, i) => (
                    <div key={label} className={`px-6 ${i > 0 ? "border-l border-zinc-800" : ""}`}>
                        <p className="text-base font-bold text-zinc-100">{value}</p>
                        <p className="text-[11px] text-zinc-600 mt-0.5 font-mono">{label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}