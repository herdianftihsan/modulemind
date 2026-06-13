import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function checkModels() {
    console.log("⏳ Sedang mengambil daftar model dari Google...");
    try {
        // Mengambil instance model default untuk memanggil API list
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`);
        const data = await response.json();
        
        console.log("✅ Model yang tersedia untuk API Key kamu:");
        data.models.forEach(m => {
            // Kita hanya mencari model yang mendukung generateContent
            if (m.supportedGenerationMethods.includes("generateContent")) {
                // Mengambil nama pendeknya saja (menghilangkan awalan 'models/')
                console.log(`- ${m.name.replace('models/', '')}`);
            }
        });
    } catch (error) {
        console.error("Gagal mengambil model:", error);
    }
}

checkModels();