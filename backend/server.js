import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Groq from 'groq-sdk';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Inisialisasi Groq Client
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.post('/api/v1/generate-pack', async (req, res) => {
    try {
        const { topic, difficulty, duration } = req.body;

        if (!topic || !difficulty || !duration) {
            return res.status(400).json({ error: "Payload tidak lengkap." });
        }

       const prompt = `
Anda adalah "Senior Tech Lead" dan instruktur coding tingkat lanjut.
Tugas Anda: Buatkan modul latihan coding (boilerplate) untuk topik: "${topic}" (Level: ${difficulty}, Durasi: ${duration}).

ATURAN KETAT:
1. DETEKSI BAHASA: Analisis topik untuk mengetahui bahasa/framework yang diminta. Sesuaikan nama file output secara dinamis (misal: App.jsx, main.go, index.js).
2. BUG LOGIKA: Starter code HARUS BEBAS dari syntax error dan bisa di-run. Sisipkan 2-3 bug logika bisnis yang mengedukasi pemula. Berikan komentar "// TODO: Siswa perlu mengecek area ini" di dekat lokasi bug.
3. DIAGRAM RAMAH PEMULA: Buat arsitektur yang mudah dipahami menggunakan pengelompokan sistem.
4. KEMBALIKAN HANYA OBJEK JSON VALID. Dilarang keras memberikan teks, pembuka/penutup markdown (\`\`\`json atau \`\`\`mermaid), di luar JSON.

Skema JSON:
{
  "business_requirement": "Konteks masalah bisnis dan daftar Acceptance Criteria dengan format poin-poin yang profesional.",
  "diagram_mermaid": "Sintaks murni Mermaid.js tipe 'flowchart TD'. ATURAN: 1) Gunakan 'subgraph' untuk mengelompokkan area (misal: subgraph Frontend, subgraph Backend, subgraph Database). 2) Gunakan panah standar (A --> B) atau berlabel (A -->|Request| B). 3) DILARANG KERAS menggunakan simbol '>' setelah label. Kembalikan HANYA sintaksnya.",
  "starter_code": {
    "nama_file_utama.ext": "Kode utama boilerplate yang mengandung // TODO dan bug logika.",
    "nama_file_config.ext": "File package/dependency yang relevan jika ada (package.json, go.mod, dsb)."
  },
  "secret_bug_list": [
    "Area/Baris X: Penjelasan detail bug logika pertama dan petunjuk solusinya.",
    "Area/Baris Y: Penjelasan detail bug logika kedua dan petunjuk solusinya."
  ]
}
`;

        // GANTI BAGIAN INI DI server.js
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant that ALWAYS outputs in strictly valid JSON format."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            model: "llama-3.3-70b-versatile", // <--- UBAH KE INI
            temperature: 0.5,
            response_format: { type: "json_object" },
        });

        // Ekstrak respons dan parse ke object
        const responseText = chatCompletion.choices[0]?.message?.content;
        const parsedData = JSON.parse(responseText);

        return res.status(200).json({
            status: "success",
            data: parsedData
        });

    } catch (error) {
        console.error("Error AI:", error);
        return res.status(500).json({
            status: "error",
            message: "Gagal memproses permintaan ke API AI. Silakan coba lagi.",
            error_details: error.message
        });
    }
});

app.get('/', (req, res) => {
    res.status(200).json({ 
        status: "success", 
        message: "ModuleMind API is running perfectly on Vercel! 🚀",
        author: "Herdian Immanuel"
    });
});

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log(`Server lokal berjalan di http://localhost:${PORT}`);
    });
}

const PORT = process.env.PORT || 7860;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`ModuleMind API is running on port ${PORT}`);
});