# 🖥️ CTF Writeup Generator

> A hacker-aesthetic, terminal-styled web app to document, preview, and push CTF / wargame writeups to GitHub — one Markdown file per level.

![Made with React](https://img.shields.io/badge/Made%20with-React-61dafb?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Bundled%20with-Vite-646cff?style=flat-square&logo=vite)
![License: MIT](https://img.shields.io/badge/License-MIT-39ff14?style=flat-square)

---

## ✨ Features

- **Write tab** — fill in structured fields per level: objective, initial thoughts, approach, commands used, learnings, flag, category, and difficulty
- **Preview tab** — see the generated Markdown for any level before you push
- **Git Script tab** — auto-generates a `push.sh` bash script that creates `.md` files and pushes them to your GitHub repo
- One `.md` file per level, cleanly named (e.g. `level-01-bandit0.md`)
- Terminal/hacker aesthetic with scanline overlay, neon green glow, and monospace fonts
- No backend, no database — runs entirely in the browser

---

## 📁 Project Structure

```
ctf-writeup-generator/
├── public/
│   └── favicon.ico
├── src/
│   ├── App.jsx          ← main app (all UI + logic)
│   └── main.jsx         ← React entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node)

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/ctf-writeup-generator.git
cd ctf-writeup-generator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```bash
npm run build
```

Output goes to the `dist/` folder. You can deploy it on GitHub Pages, Vercel, Netlify, etc.

---

## 🛠️ How to Use

### Write Tab
1. Click **+ Add Level** for each CTF level you want to document
2. Fill in the fields — Level Number, Name, Category, Difficulty, Objective, Thoughts, Approach, Commands, Learnings, Flag
3. Status auto-updates: `○ EMPTY` → `~ WIP` → `✓ DONE`

### Preview Tab
- Switch between levels using the tab bar at the top
- See the exact Markdown that will be saved as your `.md` file
- Hit **COPY** to copy it manually if needed

### Git Script Tab
1. Set your **Repository Name** and **Branch**
2. A `push.sh` script is auto-generated
3. Click **⬇ Download push.sh** — save it in your writeup folder
4. Run:

```bash
chmod +x push.sh
# Edit YOUR_USERNAME inside the script
./push.sh
```

The script will:
- Init a git repo if one doesn't exist
- Create individual `.md` files for each level
- Commit with a descriptive message
- Push to your GitHub repo

---

## 📄 Example Output

Running the tool on a level produces a Markdown file like this:

```markdown
# Level 0 — bandit0

> **Category:** ssh | **Difficulty:** Easy

## 🎯 Objective

Log into the game server using SSH.

## 💭 Initial Thoughts

Pretty straightforward intro level. Just need to figure out the default credentials.

## 💻 Commands Used

\`\`\`bash
ssh bandit0@bandit.labs.overthewire.org -p 2220
cat readme
\`\`\`

## 📚 What I Learned

- How SSH connections work with custom ports (-p flag)
- Credentials are sometimes stored in a readme file in the home directory

## 🚩 Flag

\`\`\`
NH2SXQwcBdpmTEzi3bvBHMM9H66vVXjL
\`\`\`
```

---

## 🌐 Deploy to GitHub Pages (optional)

```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Add to `vite.config.js`:

```js
base: '/ctf-writeup-generator/'
```

Then run:

```bash
npm run deploy
```

---

## 🤝 Contributing

Pull requests are welcome! Ideas for improvement:

- [ ] Export all levels as a ZIP of `.md` files
- [ ] LocalStorage persistence so work isn't lost on refresh
- [ ] Dark/light theme toggle
- [ ] Support for screenshots / image attachments per level
- [ ] Import from existing `.md` files

---

## 📜 License

MIT — use it, fork it, share it.

---

*Built for the CTF community. Happy hacking.* 🏴
