import SectionLabel from "../ui/SectionLabel";
import { WHY_IT_MATTERS } from "../../constants/data";

export default function Vision() {
  return (
    <section id="visi" className="scroll-mt-20">
          <SectionLabel>Mengapa Ini Penting</SectionLabel>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden">
            {/* Header */}
            <div className="px-8 py-12 text-center border-b border-zinc-800">
              <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-500 font-mono mb-3">
                Visi &amp; Filosofi
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 max-w-xl mx-auto leading-snug mb-4">
                Menjembatani kreasi dan ideasi
              </h2>
              <p className="text-zinc-500 text-sm max-w-lg mx-auto leading-relaxed">
                Di era di mana AI bisa menulis kode, kemampuan paling berharga justru bukan menulis kode dari nol — melainkan memahami, membaca, dan memperbaikinya. ModuleMind dibangun untuk melatih skill tersebut.
              </p>
            </div>

            {/* Cards */}
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800">
              {WHY_IT_MATTERS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-7">
                  <div className="w-9 h-9 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4">
                    <Icon size={16} className="text-zinc-400" />
                  </div>
                  <h3 className="font-bold text-zinc-100 text-sm mb-2">{title}</h3>
                  <p className="text-zinc-500 text-[13px] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  )}