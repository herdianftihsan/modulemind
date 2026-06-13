import { BookOpen, ArrowRight, Terminal, Copy, CheckCheck, Bug, Download, RotateCcw } from "lucide-react";
import { TABS } from "../../constants/data";
import TypewriterText from "../ui/TypewriterText";

export default function ResultView({
  prompt, result, activeTab, setActiveTab, copied, setCopied, handleReset, handleDownloadZip
}) {
  return (
    <section className="space-y-0 animate-in fade-in zoom-in-95 duration-300">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 font-mono mb-1">
                    Hasil Generate
                  </p>
                  <h2 className="text-lg font-bold text-zinc-100 line-clamp-1 max-w-sm">{prompt}</h2>
                </div>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-200 px-3.5 py-2 rounded-md border border-zinc-700 hover:border-zinc-500 transition-all"
                >
                  <RotateCcw size={12} />
                  Buat Baru
                </button>
              </div>

              {/* Tab bar */}
              <div className="flex items-center gap-0 border border-zinc-700 rounded-lg mb-0.5 w-fit bg-zinc-900 overflow-hidden">
                {TABS.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold transition-all border-r border-zinc-800 last:border-r-0 ${
                      activeTab === id
                        ? "bg-zinc-100 text-zinc-900"
                        : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800"
                    }`}
                  >
                    <Icon size={12} />
                    {label}
                    {id === "bugs" && (
                      <span className="ml-1 w-4 h-4 rounded-full bg-red-900 text-red-400 text-[10px] flex items-center justify-center font-bold">
                        {result.secret_bug_list?.length || 0}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="rounded-xl border border-zinc-700 overflow-hidden bg-zinc-900">

                {activeTab === "requirement" && (
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                        <BookOpen size={12} className="text-zinc-400" />
                      </div>
                      <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest font-mono">
                        Instruksi untuk Siswa
                      </span>
                    </div>
                    <div className="bg-zinc-950 rounded-lg p-5 border border-zinc-800">
                      <p className="text-sm text-zinc-300 leading-[1.8]">
                        <TypewriterText text={result.business_requirement} />
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveTab("code")}
                      className="mt-4 flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-zinc-100 transition-colors"
                    >
                      Lihat starter code <ArrowRight size={12} />
                    </button>
                  </div>
                )}

                {activeTab === "flowchart" && (
                  <div className="bg-zinc-950 p-8 rounded-xl flex items-center justify-center overflow-x-auto min-h-[300px]">
                    {result?.diagram_mermaid ? (
                      <div
                        className="mermaid"
                        key={result.diagram_mermaid}
                      >
                        {result.diagram_mermaid
                          .replace(/```mermaid/gi, "")
                          .replace(/```/g, "")
                          .trim()}
                      </div>
                    ) : (
                      <div className="text-zinc-600 text-sm">Diagram alur tidak tersedia untuk studi kasus ini.</div>
                    )}
                  </div>
                )}

                {activeTab === "code" && (
                  <div className="space-y-3 p-4">
                    {result.starter_code && Object.entries(result.starter_code).map(([filename, code], idx) => (
                      <div key={idx} className="rounded-lg border border-zinc-700 overflow-hidden">
                        {/* Titlebar */}
                        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-800 border-b border-zinc-700">
                          <div className="flex items-center gap-3">
                            <div className="flex gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                              <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                              <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                            </div>
                            <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                              <Terminal size={11} />
                              {filename}
                            </span>
                          </div>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(code || "");
                              setCopied(filename);
                              setTimeout(() => setCopied(null), 2000);
                            }}
                            className="flex items-center gap-1.5 text-[11px] font-semibold text-zinc-500 hover:text-zinc-200 transition-colors px-2.5 py-1 rounded-md hover:bg-zinc-700"
                          >
                            {copied === filename ? (
                              <>
                                <CheckCheck size={12} className="text-emerald-400" /> Disalin!
                              </>
                            ) : (
                              <>
                                <Copy size={12} /> Salin Kode
                              </>
                            )}
                          </button>
                        </div>
                        <div className="p-5 overflow-x-auto max-h-[480px] overflow-y-auto bg-zinc-950">
                          <pre className="text-[13px] text-emerald-300 font-mono leading-[1.75] whitespace-pre">
                            <code>{code}</code>
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "bugs" && (
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-md bg-red-950 border border-red-900 flex items-center justify-center">
                        <Bug size={12} className="text-red-400" />
                      </div>
                      <span className="text-xs font-bold text-red-500 uppercase tracking-widest font-mono">
                        Rahasia Mentor
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-600 mb-5">
                      Bug berikut sengaja disisipkan. Jangan tampilkan ke siswa.
                    </p>
                    <div className="space-y-2.5">
                      {result.secret_bug_list?.map((bug, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3.5 p-4 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-red-900/60 transition-colors"
                        >
                          <span className="shrink-0 w-5 h-5 rounded-md bg-red-950 border border-red-900 text-red-400 text-[10px] font-black flex items-center justify-center mt-0.5">
                            {idx + 1}
                          </span>
                          <p className="text-sm text-zinc-300 leading-relaxed">{bug}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-5">
                <p className="text-[11px] text-zinc-600 font-mono">
                  {result.starter_code ? Object.keys(result.starter_code).length : 0} file ·{" "}
                  {result.secret_bug_list?.length || 0} bug tersembunyi
                </p>
                <button
                  onClick={handleDownloadZip}
                  className="flex items-center gap-2 px-4 py-2.5 bg-zinc-100 hover:bg-white rounded-md text-sm font-semibold text-zinc-900 transition-all active:scale-95"
                >
                  <Download size={14} />
                  Download .ZIP
                </button>
              </div>
            </section>
  )
}