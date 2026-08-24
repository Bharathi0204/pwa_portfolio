# Bharathi E — Progressive Web App (PWA) Portfolio

> **Full Stack Python Developer | AI/ML & Voice AI Engineer | MCA @ SRM IST (9.90 CGPA)**

A high-performance, mobile-first **Progressive Web Application (PWA)** showcasing real software systems, award-winning IoT architectures (**AGRIMISTRO** — ₹50,000 1st Prize Winner), Multilingual Voice AI concierges (**ULAVI VOCIS**), 4 industry internships, and 100+ LeetCode DSA patterns.

---

## 🚀 Key Features

* **📱 Progressive Web App (PWA) Standalone**:
  * Installable directly on **Android / iOS Safari ("Add to Home Screen") / Desktop Chrome & Edge**.
  * Offline browsing enabled via Service Worker (`sw.js`) and Cache API.
  * Custom install prompt modal with step-by-step device guidance.
  * Network status awareness banner (online/offline toast notifications).
* **⚡ Grounded Portfolio AI Assistant**:
  * Real-time conversational AI grounded in verified blueprint knowledge.
  * Client-side search engine answering questions about projects, internships, DSA milestones, and skills offline without API keys or token leaks.
* **🔬 Interactive Architecture Modals**:
  * Step-by-step end-to-end diagrams for **AGRIMISTRO** (ESP32 IoT -> FastAPI -> Supabase -> React -> GenAI in 22 Indian languages), **ULAVI VOCIS** (Whisper STT -> Express -> OpenAI -> Twilio/SendGrid), **TaskOS** (Docker sandboxing micro-OS), and **NUTRIFY** (Scikit-Learn ML).
* **🧠 DSA Pattern Visualizer**:
  * Milestone breakdown of 100 solved LeetCode problems (43 Easy, 52 Medium, 5 Hard, 88.6% acceptance rate) with core pattern formulas (Tree Traversals, BST, Sliding Window, Two Pointers).
* **🎨 Modern Cyberpunk / Obsidian Design System**:
  * Glassmorphism with `backdrop-filter: blur(16px)`.
  * Glowing neon accents (`#0284C7`, `#10B981`, `#818CF8`, `#F59E0B`).
  * Live animated developer terminal with `neofetch` system stats.
  * Confetti celebrations on the ₹50k 1st prize championship card!

---

## 🛠️ Tech Stack

* **Frontend**: React 18, TypeScript, Tailwind/Vanilla CSS Design System, Lucide React, Canvas Confetti.
* **PWA & Performance**: Web App Manifest (`manifest.webmanifest`), Service Worker with Stale-While-Revalidate caching, Mobile Viewport optimizations.
* **Build Tooling**: Vite 6, TypeScript Compiler (`tsc`).

---

## 📦 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Bharathi0204/pwa_portfolio.git
   cd pwa_portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local dev server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Test Production PWA Build**:
   ```bash
   npm run build
   npm run preview
   ```

---

## ☁️ Instant Cloud Deployment (Mobile Testing)

### Option 1: Vercel (Recommended)
1. Push this repository to GitHub: `https://github.com/Bharathi0204/pwa_portfolio.git`
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your `pwa_portfolio` repository.
4. Framework Preset: **Vite** (auto-detected).
5. Click **Deploy**.
6. **Scan the generated QR Code on your mobile phone** to test the PWA installation and offline mode immediately!

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com) and connect your GitHub repository.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy**.

---

## 📄 License
MIT License © 2026 Bharathi E.
