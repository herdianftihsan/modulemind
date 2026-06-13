<div align="center">
  <h1>🧠 ModuleMind</h1>
  <p><strong>AI Coding Trainer & Boilerplate Generator</strong></p>
  <p>Menjembatani ideasi dan kreasi dengan menghasilkan studi kasus coding interaktif dalam hitungan detik.</p>
  
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](#)
  [![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](#)
  [![Groq LPU](https://img.shields.io/badge/AI_Powered-Groq_Llama_3-f57c00?style=for-the-badge)](#)
</div>

---

## 💡 Tentang Proyek
Di era di mana AI dapat menulis kode dari nol, kemampuan yang paling dicari oleh industri saat ini adalah **membaca, memahami, dan melakukan debugging** pada kode yang sudah ada. 

**ModuleMind** dirancang khusus untuk para mentor dan instruktur. Hanya dengan satu kalimat *prompt*, sistem ini akan merancang studi kasus bisnis, menulis *starter code* (boilerplate) yang rapi, dan secara cerdas menyisipkan cacat logika (*business logic bugs*) tersembunyi untuk melatih daya pikir kritis siswa.

---

## ✨ Fitur Utama
- **⚡ Ekstraksi Instan:** Menghasilkan modul *coding* lengkap kurang dari 30 detik berkat tenaga Groq LPU.
- **🗺️ Flowchart Dinamis:** Memvisualisasikan alur logika sistem secara *real-time* menggunakan rendering Mermaid.js.
- **🐛 Smart Logic Bugs:** Bug yang disisipkan bukanlah sekadar *syntax error*, melainkan *race condition*, *security flaw*, atau kalkulasi salah yang biasa terjadi di level *Production*.
- **📦 1-Click Export:** Mengekspor *business requirement*, petunjuk rahasia mentor, dan seluruh file kode ke dalam arsip `.ZIP` siap pakai.
- **🌗 Tema Responsif:** Tampilan antarmuka *Glassmorphism* yang elegan, dilengkapi dengan *Dark Mode* dan *Light Mode*.

---

## 🛠️ Tech Stack & Arsitektur

### Frontend (Client-Side)
- **Framework:** React.js (menggunakan Vite)
- **Styling:** Tailwind CSS
- **Diagraming:** Mermaid.js
- **Icons:** Lucide-React
- **Hosting:** Vercel

### Backend (API-Side)
- **Runtime:** Node.js
- **Framework:** Express.js
- **AI Integration:** Groq API (Llama 3.3)
- **Containerization:** Docker
- **Hosting:** Hugging Face Spaces

---

## 📂 Struktur Repositori (Monorepo)
Proyek ini mengadopsi pola *Feature-Sliced Design* untuk skalabilitas struktur komponen:

```text
📦 ModuleMind
 ┣ 📂 backend
 ┃ ┣ 📜 Dockerfile           # Konfigurasi container untuk Hugging Face
 ┃ ┣ 📜 server.js            # Entry point Express API & Prompting AI
 ┃ ┣ 📜 package.json
 ┃ ┗ 📜 .env                 # (Diabaikan di Git) Kunci API Groq
 ┣ 📂 frontend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┃ ┣ 📂 generator        # Logika Form Input & Tampilan Hasil Tab
 ┃ ┃ ┃ ┣ 📂 layout           # Navbar & Footer
 ┃ ┃ ┃ ┣ 📂 sections         # Hero, How It Works, Vision, Examples
 ┃ ┃ ┃ ┗ 📂 ui               # Reusable atomic UI (Loading, Typography)
 ┃ ┃ ┣ 📂 constants
 ┃ ┃ ┃ ┗ 📜 data.js          # Penyimpanan data statis & konfigurasi teks
 ┃ ┃ ┣ 📜 App.jsx            # State Manager & Root Component Tree
 ┃ ┃ ┣ 📜 index.css          # Konfigurasi Tailwind & Override Tema
 ┃ ┃ ┗ 📜 main.jsx
 ┃ ┣ 📜 package.json
 ┃ ┗ 📜 vite.config.js       # Konfigurasi Code Splitting Build
 ┣ 📜 .gitignore
 ┗ 📜 README.md

