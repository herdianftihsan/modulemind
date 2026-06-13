# Gunakan versi Node.js yang ringan
FROM node:18-alpine

# Set folder kerja di dalam kontainer
WORKDIR /app

# Copy file package dan install library
COPY package*.json ./
RUN npm install

# Copy seluruh kode backend Anda
COPY . .

# Buka port 7860 untuk Hugging Face
EXPOSE 7860
ENV PORT=7860

# Jalankan server
CMD ["node", "server.js"]