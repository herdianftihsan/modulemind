import { Code2, Sun, Moon, GraduationCap } from "lucide-react";

export default function Navbar({ isDark, setIsDark, scrollToGenerate }) {
  return (
    <nav className="relative z-20 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-sm sticky top-0">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {/* Logo mark — terminal bracket motif */}
            <div className="w-7 h-7 rounded-md bg-zinc-800 border border-zinc-700 flex items-center justify-center">
              <Code2 size={13} className="text-emerald-400" />
            </div>
            <span className="font-bold text-zinc-100 text-[15px] tracking-tight">ModuleMind</span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-xs text-zinc-500">
            <button onClick={scrollToGenerate} className="hover:text-zinc-200 transition-colors">
              Generator
            </button>
            <a href="#cara-kerja" className="hover:text-zinc-200 transition-colors">
              Cara Kerja
            </a>
            <a href="#contoh" className="hover:text-zinc-200 transition-colors">
              Contoh
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <button
              onClick={() => setIsDark(d => !d)}
              className="w-8 h-8 rounded-md border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-500 flex items-center justify-center transition-all"
              aria-label="Toggle dark/light mode"
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark
                ? <Sun size={14} className="text-zinc-400 hover:text-yellow-400 transition-colors" />
                : <Moon size={14} className="text-zinc-400 hover:text-blue-400 transition-colors" />
              }
            </button>
            <GraduationCap size={13} />
            <span className="hidden sm:inline">AI Coding Trainer</span>
          </div>
        </div>
      </nav>
  )}