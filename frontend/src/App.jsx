import { useState, useEffect, useRef } from "react";
import mermaid from "mermaid";
import "./App.css"
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import Examples from "./components/sections/Examples";
import Vision from "./components/sections/Vision";
import GeneratorForm from "./components/generator/GeneratorForm";
import ResultView from "./components/generator/ResultView";
import SectionLabel from "./components/ui/SectionLabel";
import LoadingSkeleton from "./components/ui/LoadingSkeleton";

export default function App() {
  // --- STATE MANAGEMENT ---
  const [isDark, setIsDark] = useState(() => {
    try { const s = localStorage.getItem("modulemind-theme"); return s ? s === "dark" : true; } catch { return true; }
  });
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(null);
  const [activeTab, setActiveTab] = useState("requirement");
  
  const textareaRef = useRef(null);
  const generateRef = useRef(null);

  // --- USE EFFECTS ---
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    try { localStorage.setItem("modulemind-theme", isDark ? "dark" : "light"); } catch { }
  }, [isDark]);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      securityLevel: 'loose',
      themeVariables: {
        primaryColor: '#18181b',
        primaryTextColor: '#a1a1aa',
        primaryBorderColor: '#3f3f46',
        lineColor: '#52525b',
        secondaryColor: '#27272a',
        tertiaryColor: '#09090b'
      }
    });
  }, []);

  useEffect(() => {
    if (activeTab === "flowchart" && result?.diagram_mermaid) {
      const timer = setTimeout(() => {
        try {
          mermaid.run({ querySelector: '.mermaid' });
        } catch (err) {
          console.error("Gagal merender diagram Mermaid:", err);
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [result, activeTab]);

  // --- HANDLERS ---
  const handleGenerate = async () => {
    if (!prompt.trim() || loading) return;
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await fetch("https://modulemind.vercel.app/api/v1/generate-pack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: prompt, difficulty: "Menengah", duration: "2 Jam" }),
      });
      const data = await response.json();
      if (data.status === "success") {
        setResult(data.data);
        setActiveTab("requirement");
      } else throw new Error(data.message);
    } catch {
      setError("Server tidak merespons. Periksa koneksi dan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadZip = async () => {
    if (!result) return;
    const JSZip = (await import('jszip')).default;
    const { saveAs } = await import('file-saver');

    const zip = new JSZip();
    const readmeContent = `# Business Requirement\n${result.business_requirement}\n\n---\n# Secret Bug List (Mentor Only)\n${result.secret_bug_list.map((bug, i) => `${i + 1}. ${bug}`).join("\n")}`;

    zip.file("README.md", readmeContent.trim());
    Object.entries(result.starter_code).forEach(([filename, code]) => zip.file(filename, code));

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "ModuleMind-Starter-Pack.zip");
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
    setPrompt("");
    setTimeout(() => textareaRef.current?.focus(), 50);
  };

  const scrollToGenerate = () => {
    generateRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  // --- RENDER UI (Sudah bersih dari tanda kutip pada variabel) ---
  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-100 selection:bg-emerald-500/20 flex flex-col">
      <Navbar isDark={isDark} setIsDark={setIsDark} scrollToGenerate={scrollToGenerate} />

      <main className="relative flex-1 max-w-5xl mx-auto w-full px-6 py-16 space-y-24">
        <Hero scrollToGenerate={scrollToGenerate} />
        
        <HowItWorks />

        <section ref={generateRef} id="generator" className="scroll-mt-20">
          <SectionLabel>Generator</SectionLabel>

          {!result && !loading && (
            <GeneratorForm 
              prompt={prompt} 
              setPrompt={setPrompt} 
              loading={loading} 
              error={error} 
              setError={setError} 
              handleGenerate={handleGenerate} 
              textareaRef={textareaRef} 
            />
          )}

          {loading && <LoadingSkeleton />}

          {result && !loading && (
            <ResultView 
              prompt={prompt} 
              result={result} 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
              copied={copied} 
              setCopied={setCopied} 
              handleReset={handleReset} 
              handleDownloadZip={handleDownloadZip} 
            />
          )}
        </section>

        <Examples setPrompt={setPrompt} scrollToGenerate={scrollToGenerate} />
        <Vision />
      </main>

      <Footer />
    </div>
  );
}