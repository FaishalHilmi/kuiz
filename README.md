# 🚀 Kuiz – Modern Computer Science Quiz App

**Kuiz** adalah platform ujian digital berbasis web yang interaktif, cepat, dan modern. Dibangun menggunakan **React.js** dan **Tailwind CSS**, aplikasi ini menghadirkan pengalaman pengerjaan kuis yang mulus dengan fitur pencatatan progres otomatis (*state persistence*).

---

## ✨ Fitur Unggulan

- 🎯 **Real-time Quiz Engine**  
  Pengambilan soal kuis secara dinamis dari **Open Trivia Database API**.

- ⏳ **Intelligent Timer**  
  Countdown selama 110 detik yang tetap berjalan meskipun halaman di-refresh.

- 💾 **Auto-Resume Progress**  
  Progres pengerjaan dan sisa waktu tersimpan aman menggunakan **LocalStorage**.

- 📊 **Performance Analytics**  
  Hasil skor instan lengkap dengan:
  - Persentase nilai
  - Jumlah jawaban benar dan salah
  - Status kelulusan

- 🛡️ **Secure Navigation**  
  Proteksi rute halaman untuk mencegah akses ilegal ke halaman hasil kuis.

- 📱 **Ultra Responsive UI**  
  Tampilan optimal di perangkat mobile, tablet, dan desktop.

- 🔔 **Dynamic Confirmation Modals**  
  Modal interaktif untuk aksi krusial seperti:
  - Start Quiz
  - Restart Quiz
  - Logout

---

## 🛠️ Tech Stack

| Teknologi | Penggunaan |
|---------|------------|
| **React.js** | Core UI Library |
| **Tailwind CSS** | Styling & Responsive Design |
| **React Router DOM v6** | Client-side Routing |
| **Context API** | Global State Management |
| **Axios** | HTTP Client / API Fetching |
| **React Icons** | UI Iconography |

---

## 📦 Struktur Proyek

```plaintext
src/
├── components/   # Reusable components (Modal, Navbar, Button)
├── context/      # Global state (AuthContext, QuizContext)
├── hooks/        # Custom hooks (useQuiz, useAuth)
├── layouts/      # Layout wrapper (MainLayout)
├── pages/        # Login, Dashboard, Quiz, Result
└── utils/        # API helpers & utility functions

```
### Instalasi

1. Clone repository:

   ```bash
   https://github.com/FaishalHilmi/kuiz.git

   ```

2. Masuk direktori proyek

   ```bash
   cd kuiz

   ```

3. Install dependensi yang diperlukan:

   ```bash
   npm install

   ```

4. Buat file .env untuk konfigurasi API, dan tambahkan variabel berikut:

   ```bash
   VITE_API_URL = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple'

   ```

5. Jalakan server

   ```bash
   npm run dev

   ```

6. Akses aplikasi di browser pada:

   ```bash
   http://localhost:5173/

   ```

7. Untuk membuat build produksi:

   ```bash
   npm run build
   ```
