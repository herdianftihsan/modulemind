import SectionLabel from "../ui/SectionLabel";
import { EXAMPLE_CASES } from "../../constants/data";
import { Terminal, Bug, Clock, Settings, ArrowRight } from "lucide-react";

export default function Examples({ setPrompt, scrollToGenerate }) {
    return (
        <section id="contoh" className="scroll-mt-20">
            <SectionLabel>Inspirasi</SectionLabel>
            <div className="flex items-end justify-between mb-10">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-2">
                        Apa yang sudah pernah dibuat?
                    </h2>
                    <p className="text-zinc-500 text-sm max-w-md leading-relaxed">
                        Contoh modul nyata yang dihasilkan ModuleMind. Klik topik apa pun untuk menjadikannya prompt.
                    </p>
                </div>
                <span className="hidden sm:flex items-center gap-1.5 text-[11px] text-zinc-600 border border-zinc-700 bg-zinc-900 px-3 py-1.5 rounded-md font-mono">
                    <Terminal size={11} className="text-zinc-500" />
                    Contoh nyata
                </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
                {EXAMPLE_CASES.map(({ topic, tech, bugs, duration, difficulty, preview, tag, tagColor }) => (
                    <button
                        key={topic}
                        onClick={() => {
                            setPrompt(topic);
                            scrollToGenerate();
                        }}
                        className="text-left rounded-xl border border-zinc-800 bg-zinc-900 p-5 hover:border-zinc-600 hover:bg-zinc-800 transition-all group"
                    >
                        <div className="flex items-start justify-between mb-3">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border font-mono ${tagColor}`}>
                                {tag}
                            </span>
                            <span className="text-[10px] text-zinc-600 flex items-center gap-1 font-mono">
                                <Bug size={10} className="text-red-600" />
                                {bugs} bug
                            </span>
                        </div>
                        <h3 className="font-bold text-zinc-100 text-sm mb-1 group-hover:text-emerald-400 transition-colors">
                            {topic}
                        </h3>
                        <p className="text-[11px] text-zinc-600 font-mono mb-3">{tech}</p>
                        <p className="text-[12px] text-zinc-500 leading-relaxed line-clamp-3">{preview}</p>
                        <div className="flex items-center gap-3 mt-4 pt-3 border-t border-zinc-800">
                            <span className="flex items-center gap-1 text-[10px] text-zinc-600 font-mono">
                                <Clock size={10} />
                                {duration}
                            </span>
                            <span className="flex items-center gap-1 text-[10px] text-zinc-600 font-mono">
                                <Settings size={10} />
                                {difficulty}
                            </span>
                            <span className="ml-auto text-[10px] text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                Gunakan prompt ini <ArrowRight size={10} />
                            </span>
                        </div>
                    </button>
                ))}
            </div>
        </section>

    )
}