import { AlertTriangle, Cpu, ArrowRight, ChevronRight } from "lucide-react";
import { SAMPLE_PROMPTS } from "../../constants/data";

export default function GeneratorForm({ 
  prompt, setPrompt, loading, error, setError, handleGenerate, textareaRef 
}) { return(
     <div className="max-w-2xl mx-auto">
              <div className="rounded-xl border border-zinc-700 bg-zinc-900 overflow-hidden">
                <div className="p-5">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-3 font-mono">
                    Ide Studi Kasus
                  </label>
                  <textarea
                    ref={textareaRef}
                    value={prompt}
                    onChange={(e) => {
                      setPrompt(e.target.value);
                      if (error) setError(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) handleGenerate();
                    }}
                    placeholder="Contoh: REST API untuk sistem manajemen perpustakaan dengan Express.js..."
                    className="w-full bg-transparent text-zinc-200 text-[15px] placeholder:text-zinc-700 outline-none resize-none min-h-[110px] leading-relaxed"
                    disabled={loading}
                  />
                </div>

                {error && (
                  <div className="mx-5 mb-4 px-4 py-3 rounded-md bg-red-950/60 border border-red-900 text-sm text-red-400 flex items-center gap-2.5">
                    <AlertTriangle size={14} className="shrink-0" />
                    {error}
                  </div>
                )}

                <div className="flex items-center justify-between px-5 py-3.5 border-t border-zinc-800 bg-zinc-900/80">
                  <span className="text-[11px] text-zinc-600 font-mono">
                    {prompt.length > 0 ? `${prompt.length} karakter` : "Ctrl+Enter untuk generate"}
                  </span>
                  <button
                    onClick={handleGenerate}
                    disabled={!prompt.trim()}
                    className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-zinc-100 hover:bg-white text-zinc-900 active:scale-95"
                  >
                    <Cpu size={13} />
                    Generate Pack
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>

              <div className="mt-4 space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-zinc-700 font-mono px-1 mb-2">
                  Coba contoh ini
                </p>
                {SAMPLE_PROMPTS.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => setPrompt(p)}
                    className="w-full text-left text-xs text-zinc-500 hover:text-zinc-200 flex items-center gap-2.5 px-3 py-2.5 rounded-md hover:bg-zinc-800/70 transition-all group border border-transparent hover:border-zinc-700"
                  >
                    <ChevronRight size={11} className="shrink-0 text-zinc-700 group-hover:text-emerald-400 transition-colors" />
                    {p}
                  </button>
                ))}
              </div>
            </div>
);
}