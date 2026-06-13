import {
  Terminal, Cpu, Download, Shield, Users, TrendingUp, Code2, Bug, FileText
} from "lucide-react";

export const SAMPLE_PROMPTS = [
  "REST API inventori barang dengan Express.js",
  "To-Do List dengan React.js dan Local Storage",
  "Autentikasi JWT (Login/Register) di Node.js",
];

export const TABS = [
  { id: "requirement", label: "Brief", icon: FileText },
  { id: "flowchart", label: "Flowchart", icon: Cpu },
  { id: "code", label: "Starter Code", icon: Code2 },
  { id: "bugs", label: "Bug List", icon: Bug },
];

export const HOW_IT_WORKS = [
  {
    icon: Terminal,
    step: "01",
    title: "Deskripsikan Studi Kasus",
    desc: "Tulis ide proyek — sekompleks apa pun. Cukup satu kalimat sudah cukup untuk memulai.",
    accent: "text-zinc-300",
    border: "border-zinc-700",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI Merancang Modul",
    desc: "Sistem menganalisis topik lalu menyusun requirement bisnis, kode awal, dan menyisipkan bug-bug pilihan secara strategis.",
    accent: "text-emerald-400",
    border: "border-zinc-700",
  },
  {
    icon: Download,
    step: "03",
    title: "Langsung Digunakan",
    desc: "Unduh paket ZIP-nya. Bagikan ke siswa. Pegang kunci jawaban bug-nya sendiri. Sesi latihan siap dalam hitungan detik.",
    accent: "text-zinc-300",
    border: "border-zinc-700",
  },
];

export const EXAMPLE_CASES = [
  {
    topic: "REST API Manajemen Perpustakaan",
    tech: "Node.js · Express · MongoDB",
    bugs: 4,
    duration: "2 Jam",
    difficulty: "Menengah",
    preview: "Sistem CRUD untuk data buku, anggota, dan peminjaman. Siswa diminta memperbaiki error validasi dan race condition pada endpoint return buku.",
    tag: "Backend",
    tagColor: "bg-blue-950 text-blue-400 border-blue-800",
  },
  {
    topic: "Dashboard Keuangan Personal",
    tech: "React · Chart.js · LocalStorage",
    bugs: 3,
    duration: "1.5 Jam",
    difficulty: "Pemula",
    preview: "Aplikasi pencatat pemasukan dan pengeluaran dengan visualisasi grafik. Bug disembunyikan pada logika kalkulasi saldo dan filter tanggal.",
    tag: "Frontend",
    tagColor: "bg-violet-950 text-violet-400 border-violet-800",
  },
  {
    topic: "Sistem Autentikasi JWT",
    tech: "Node.js · Express · JWT · bcrypt",
    bugs: 5,
    duration: "2.5 Jam",
    difficulty: "Lanjutan",
    preview: "Implementasi login, register, dan refresh token. Siswa harus menemukan celah keamanan berupa token yang tidak di-invalidate saat logout.",
    tag: "Security",
    tagColor: "bg-red-950 text-red-400 border-red-900",
  },
];

export const WHY_IT_MATTERS = [
  {
    icon: Shield,
    title: "Belajar Dari Kesalahan Nyata",
    desc: "Bug yang disisipkan terinspirasi dari error yang ditemukan di proyek production sungguhan — bukan soal akademik yang artifisial.",
  },
  {
    icon: Users,
    title: "Hemat Waktu Mentor",
    desc: "Membuat soal debugging yang berkualitas bisa memakan 2–3 jam. ModuleMind memangkasnya menjadi kurang dari 30 detik.",
  },
  {
    icon: TrendingUp,
    title: "Mendorong Berpikir Kritis",
    desc: "Alih-alih menghafal sintaks, siswa berlatih membaca, memahami, dan memperbaiki kode — skill yang paling dicari industri.",
  },
];