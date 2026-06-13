import SectionLabel from "../ui/SectionLabel";
import { HOW_IT_WORKS } from "../../constants/data";

export default function HowItWorks() {
    return (
        <section id="cara-kerja" className="scroll-mt-20">
            <SectionLabel>Cara Kerja</SectionLabel>
            <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-3">
                    Tiga langkah, satu tujuan
                </h2>
                <p className="text-zinc-500 text-sm max-w-md mx-auto leading-relaxed">
                    Dari ide kasar ke paket materi latihan yang siap dibagikan ke siswa — tanpa perlu menulis satu baris pun secara manual.
                </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 rounded-xl overflow-hidden">
                {HOW_IT_WORKS.map(({ icon: Icon, step, title, desc, accent, border }) => (
                    <div
                        key={step}
                        className="relative bg-zinc-950 p-7 hover:bg-zinc-900 transition-colors group"
                    >
                        <span className="absolute top-5 right-6 text-[48px] font-black text-zinc-800 leading-none select-none group-hover:text-zinc-700 transition-colors">
                            {step}
                        </span>
                        <div className="w-9 h-9 rounded-md bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-5">
                            <Icon size={16} className={accent} />
                        </div>
                        <h3 className="font-bold text-zinc-100 text-sm mb-2">{title}</h3>
                        <p className="text-zinc-500 text-[13px] leading-relaxed">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}