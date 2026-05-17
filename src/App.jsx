import { useState } from "react";

const GOOGLE_FONT = `@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap');`;

const css = `
${GOOGLE_FONT}

* { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0a0c0f;
  --surface: #0f1318;
  --border: #1e2d1e;
  --green: #39ff14;
  --green-dim: #1a7a08;
  --green-glow: rgba(57,255,20,0.15);
  --amber: #ffb700;
  --red: #ff3c3c;
  --text: #c8e6c9;
  --muted: #4a6741;
  --font-mono: 'Share Tech Mono', monospace;
  --font-display: 'Orbitron', sans-serif;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-mono);
  min-height: 100vh;
}

.scanlines {
  position: fixed; inset: 0; pointer-events: none; z-index: 999;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0,0,0,0.07) 2px,
    rgba(0,0,0,0.07) 4px
  );
}

.app {
  max-width: 860px;
  margin: 0 auto;
  padding: 32px 20px 80px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  position: relative;
}

.header-title {
  font-family: var(--font-display);
  font-size: clamp(18px, 4vw, 28px);
  font-weight: 900;
  color: var(--green);
  text-shadow: 0 0 20px var(--green), 0 0 40px rgba(57,255,20,0.4);
  letter-spacing: 4px;
  text-transform: uppercase;
}

.header-sub {
  color: var(--muted);
  font-size: 12px;
  letter-spacing: 3px;
  margin-top: 6px;
}

.blink {
  animation: blink 1.1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }

/* Tabs */
.tabs {
  display: flex;
  gap: 0;
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 28px;
}
.tab {
  flex: 1;
  padding: 10px 0;
  background: transparent;
  border: none;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  border-right: 1px solid var(--border);
  text-transform: uppercase;
  transition: all 0.2s;
}
.tab:last-child { border-right: none; }
.tab:hover { color: var(--text); background: rgba(57,255,20,0.04); }
.tab.active {
  background: var(--green-glow);
  color: var(--green);
  text-shadow: 0 0 8px var(--green);
}

/* Card */
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 24px;
  margin-bottom: 20px;
  position: relative;
  transition: border-color 0.2s;
}
.card:hover { border-color: var(--green-dim); }

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.card-title {
  font-family: var(--font-display);
  font-size: 11px;
  color: var(--green);
  letter-spacing: 3px;
  text-transform: uppercase;
}
.card-badge {
  font-size: 10px;
  padding: 2px 8px;
  border: 1px solid var(--green-dim);
  color: var(--green-dim);
  border-radius: 2px;
  letter-spacing: 1px;
}

/* Form elements */
label {
  display: block;
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 6px;
}

input, textarea, select {
  width: 100%;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 3px;
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 13px;
  padding: 10px 12px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  resize: vertical;
}
input:focus, textarea:focus, select:focus {
  border-color: var(--green-dim);
  box-shadow: 0 0 0 2px var(--green-glow);
}
select option { background: var(--bg); }

.field { margin-bottom: 16px; }

.row { display: flex; gap: 16px; }
.row .field { flex: 1; }

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 3px;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: all 0.15s;
}
.btn-primary {
  background: var(--green);
  color: #000;
  font-weight: bold;
}
.btn-primary:hover {
  box-shadow: 0 0 16px var(--green), 0 0 32px rgba(57,255,20,0.3);
  transform: translateY(-1px);
}
.btn-ghost {
  background: transparent;
  color: var(--muted);
  border: 1px solid var(--border);
}
.btn-ghost:hover { color: var(--text); border-color: var(--muted); }
.btn-danger {
  background: transparent;
  color: var(--red);
  border: 1px solid rgba(255,60,60,0.3);
  font-size: 11px;
  padding: 6px 12px;
}
.btn-danger:hover { background: rgba(255,60,60,0.08); }

.btn-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 8px;
}

/* Level list */
.level-list { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
.level-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s;
}
.level-item:hover { border-color: var(--green-dim); background: var(--green-glow); }
.level-item.selected { border-color: var(--green); background: var(--green-glow); }
.level-num {
  font-family: var(--font-display);
  font-size: 11px;
  color: var(--green);
  min-width: 28px;
}
.level-name { flex: 1; font-size: 13px; }
.level-status {
  font-size: 10px;
  letter-spacing: 1px;
}
.level-status.done { color: var(--green); }
.level-status.wip { color: var(--amber); }
.level-status.empty { color: var(--muted); }

/* Output area */
.output-block {
  background: #060809;
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 20px;
  font-size: 12px;
  line-height: 1.7;
  white-space: pre-wrap;
  word-break: break-all;
  color: var(--text);
  max-height: 420px;
  overflow-y: auto;
  position: relative;
}
.output-block .comment { color: var(--muted); }
.output-block .cmd { color: var(--green); }
.output-block .heading { color: var(--amber); font-weight: bold; }

.copy-btn {
  position: absolute;
  top: 10px; right: 10px;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 10px;
  padding: 4px 10px;
  border-radius: 2px;
  cursor: pointer;
  letter-spacing: 1px;
}
.copy-btn:hover { color: var(--green); border-color: var(--green-dim); }

/* Difficulty dots */
.diff-row { display: flex; gap: 6px; margin-top: 8px; }
.diff-dot {
  width: 22px; height: 22px;
  border-radius: 50%;
  border: 2px solid var(--border);
  cursor: pointer;
  transition: all 0.15s;
}
.diff-dot.active { border-color: transparent; }
.diff-dot[data-d="1"].active { background: #39ff14; box-shadow: 0 0 8px #39ff14; }
.diff-dot[data-d="2"].active { background: #8fff14; }
.diff-dot[data-d="3"].active { background: #ffb700; box-shadow: 0 0 8px #ffb700; }
.diff-dot[data-d="4"].active { background: #ff7700; }
.diff-dot[data-d="5"].active { background: #ff3c3c; box-shadow: 0 0 8px #ff3c3c; }

.section-title {
  font-family: var(--font-display);
  font-size: 10px;
  color: var(--muted);
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 14px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}

.empty-state {
  text-align: center;
  padding: 40px 20px;
  color: var(--muted);
  font-size: 13px;
  letter-spacing: 1px;
}

.tag { color: var(--green); }
.prompt { color: var(--amber); }

/* Toast */
.toast {
  position: fixed;
  bottom: 30px; right: 30px;
  background: var(--green);
  color: #000;
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 2px;
  padding: 10px 20px;
  border-radius: 3px;
  font-weight: bold;
  animation: slideIn 0.2s ease;
  z-index: 1000;
}
@keyframes slideIn { from { opacity:0; transform: translateY(10px); } to { opacity:1; transform: none; } }
`;

const DIFFICULTIES = [1,2,3,4,5];
const DIFF_LABELS = ["","Easy","Medium","Hard","Expert","Insane"];

const emptyLevel = (num) => ({
  id: Date.now() + num,
  number: num,
  name: "",
  category: "",
  difficulty: 0,
  objective: "",
  thoughts: "",
  approach: "",
  commands: "",
  learnings: "",
  flag: "",
  status: "empty",
});

function generateMarkdown(level) {
  const diff = level.difficulty ? DIFF_LABELS[level.difficulty] : "—";
  const lines = [];
  lines.push(`# Level ${level.number}${level.name ? ` — ${level.name}` : ""}`);
  lines.push(``);
  if (level.category || level.difficulty) {
    lines.push(`> **Category:** ${level.category || "—"} &nbsp;|&nbsp; **Difficulty:** ${diff}`);
    lines.push(``);
  }
  if (level.objective) {
    lines.push(`## 🎯 Objective`);
    lines.push(``);
    lines.push(level.objective);
    lines.push(``);
  }
  if (level.thoughts) {
    lines.push(`## 💭 Initial Thoughts`);
    lines.push(``);
    lines.push(level.thoughts);
    lines.push(``);
  }
  if (level.approach) {
    lines.push(`## 🧩 Approach`);
    lines.push(``);
    lines.push(level.approach);
    lines.push(``);
  }
  if (level.commands) {
    lines.push(`## 💻 Commands Used`);
    lines.push(``);
    lines.push("```bash");
    lines.push(level.commands);
    lines.push("```");
    lines.push(``);
  }
  if (level.learnings) {
    lines.push(`## 📚 What I Learned`);
    lines.push(``);
    lines.push(level.learnings);
    lines.push(``);
  }
  if (level.flag) {
    lines.push(`## 🚩 Flag`);
    lines.push(``);
    lines.push("```");
    lines.push(level.flag);
    lines.push("```");
    lines.push(``);
  }
  lines.push(`---`);
  lines.push(`*Written as part of a CTF/wargame writeup series.*`);
  return lines.join("\n");
}

function generateGitScript(levels, repoName, branch) {
  const done = levels.filter(l => l.status !== "empty");
  const lines = [];
  lines.push(`#!/bin/bash`);
  lines.push(`# CTF Writeup — Git Push Script`);
  lines.push(`# Generated: ${new Date().toISOString().split("T")[0]}`);
  lines.push(``);
  lines.push(`REPO="${repoName || "ctf-writeups"}"`);
  lines.push(`BRANCH="${branch || "main"}"`);
  lines.push(``);
  lines.push(`# 1. Init repo if not already done`);
  lines.push(`if [ ! -d ".git" ]; then`);
  lines.push(`  git init`);
  lines.push(`  git remote add origin git@github.com:YOUR_USERNAME/$REPO.git`);
  lines.push(`fi`);
  lines.push(``);
  lines.push(`# 2. Create writeup files`);
  done.forEach(l => {
    const fname = `level-${String(l.number).padStart(2,"0")}${l.name ? "-" + l.name.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"") : ""}.md`;
    lines.push(`cat > "${fname}" << 'HEREDOC'`);
    lines.push(generateMarkdown(l));
    lines.push(`HEREDOC`);
    lines.push(``);
  });
  lines.push(`# 3. Stage and commit`);
  lines.push(`git add .`);
  lines.push(`git commit -m "writeup: add level ${done.map(l=>l.number).join(", ")} solutions"`);
  lines.push(``);
  lines.push(`# 4. Push`);
  lines.push(`git push -u origin $BRANCH`);
  lines.push(``);
  lines.push(`echo "✅ Done! Check your repo at https://github.com/YOUR_USERNAME/$REPO"`);
  return lines.join("\n");
}

export default function App() {
  const [tab, setTab] = useState("edit");
  const [levels, setLevels] = useState([emptyLevel(0)]);
  const [selectedId, setSelectedId] = useState(levels[0].id);
  const [repoName, setRepoName] = useState("ctf-writeups");
  const [branch, setBranch] = useState("main");
  const [toast, setToast] = useState(null);
  const [outputTab, setOutputTab] = useState("md");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  const selected = levels.find(l => l.id === selectedId);

  const updateLevel = (field, val) => {
    setLevels(prev => prev.map(l => {
      if (l.id !== selectedId) return l;
      const updated = { ...l, [field]: val };
      // auto-set status
      const filled = updated.thoughts || updated.commands || updated.learnings;
      const complete = updated.flag || (updated.learnings && updated.commands);
      updated.status = complete ? "done" : filled ? "wip" : "empty";
      return updated;
    }));
  };

  const addLevel = () => {
    const nums = levels.map(l => l.number);
    const next = levels.length > 0 ? Math.max(...nums) + 1 : 0;
    const newL = emptyLevel(next);
    setLevels(prev => [...prev, newL]);
    setSelectedId(newL.id);
  };

  const removeLevel = (id) => {
    const remaining = levels.filter(l => l.id !== id);
    if (!remaining.length) return;
    setLevels(remaining);
    if (selectedId === id) setSelectedId(remaining[0].id);
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text).then(() => showToast("COPIED"));
  };

  const mdOutput = selected ? generateMarkdown(selected) : "";
  const gitOutput = generateGitScript(levels, repoName, branch);

  return (
    <>
      <style>{css}</style>
      <div className="scanlines" />
      <div className="app">
        {/* Header */}
        <div className="header">
          <div className="header-title">
            CTF WRITEUP GENERATOR <span className="blink">_</span>
          </div>
          <div className="header-sub">// document → commit → push → pwned</div>
        </div>

        {/* Main tabs */}
        <div className="tabs">
          {[
            ["edit", "✎ Write"],
            ["preview", "◉ Preview MD"],
            ["git", "⬆ Git Script"],
          ].map(([key, label]) => (
            <button
              key={key}
              className={`tab${tab === key ? " active" : ""}`}
              onClick={() => setTab(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ─── EDIT TAB ─── */}
        {tab === "edit" && (
          <div>
            {/* Level selector */}
            <div className="card">
              <div className="card-header">
                <span className="card-title">// Levels</span>
                <button
                  className="btn btn-ghost"
                  style={{ fontSize: "11px", padding: "6px 14px" }}
                  onClick={addLevel}
                >
                  + Add Level
                </button>
              </div>
              <div className="level-list">
                {levels.map((l) => (
                  <div
                    key={l.id}
                    className={`level-item${l.id === selectedId ? " selected" : ""}`}
                    onClick={() => setSelectedId(l.id)}
                  >
                    <span className="level-num">
                      {String(l.number).padStart(2, "0")}
                    </span>
                    <span className="level-name">
                      {l.name || (
                        <span style={{ color: "var(--muted)" }}>unnamed</span>
                      )}
                    </span>
                    <span className={`level-status ${l.status}`}>
                      {l.status === "done"
                        ? "✓ DONE"
                        : l.status === "wip"
                          ? "~ WIP"
                          : "○ EMPTY"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Level form */}
            {selected && (
              <div className="card">
                <div className="card-header">
                  <span className="card-title">// Level {selected.number}</span>
                  {levels.length > 1 && (
                    <button
                      className="btn btn-danger"
                      onClick={() => removeLevel(selected.id)}
                    >
                      ✕ Remove
                    </button>
                  )}
                </div>

                <div className="row">
                  <div className="field">
                    <label>Level Number</label>
                    <input
                      type="number"
                      min="0"
                      value={selected.number}
                      onChange={(e) =>
                        updateLevel(
                          "number",
                          Math.max(0, parseInt(e.target.value) || 0),
                        )
                      }
                    />
                  </div>
                  <div className="field">
                    <label>Level Name / Title</label>
                    <input
                      type="text"
                      placeholder="e.g. bandit0, sanity check..."
                      value={selected.name}
                      onChange={(e) => updateLevel("name", e.target.value)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="field">
                    <label>Category</label>
                    <input
                      type="text"
                      placeholder="e.g. web, pwn, crypto, misc"
                      value={selected.category}
                      onChange={(e) => updateLevel("category", e.target.value)}
                    />
                  </div>
                  <div className="field">
                    <label>Difficulty</label>
                    <div className="diff-row">
                      {DIFFICULTIES.map((d) => (
                        <div
                          key={d}
                          className={`diff-dot${selected.difficulty === d ? " active" : ""}`}
                          data-d={d}
                          title={DIFF_LABELS[d]}
                          onClick={() =>
                            updateLevel(
                              "difficulty",
                              d === selected.difficulty ? 0 : d,
                            )
                          }
                        />
                      ))}
                      <span
                        style={{
                          fontSize: "11px",
                          color: "var(--muted)",
                          marginLeft: 4,
                          alignSelf: "center",
                        }}
                      >
                        {selected.difficulty
                          ? DIFF_LABELS[selected.difficulty]
                          : "pick"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label>Objective / Challenge Description</label>
                  <textarea
                    rows={2}
                    placeholder="What does the challenge ask you to do?"
                    value={selected.objective}
                    onChange={(e) => updateLevel("objective", e.target.value)}
                  />
                </div>

                <div className="field">
                  <label>Initial Thoughts</label>
                  <textarea
                    rows={3}
                    placeholder="What was your first read on this? What did you notice?"
                    value={selected.thoughts}
                    onChange={(e) => updateLevel("thoughts", e.target.value)}
                  />
                </div>

                <div className="field">
                  <label>Approach / Steps Taken</label>
                  <textarea
                    rows={4}
                    placeholder="How did you go about solving it? What did you try?"
                    value={selected.approach}
                    onChange={(e) => updateLevel("approach", e.target.value)}
                  />
                </div>

                <div className="field">
                  <label>Commands Used</label>
                  <textarea
                    rows={5}
                    placeholder="ls -la&#10;cat readme&#10;ssh bandit1@localhost -p 2220"
                    value={selected.commands}
                    onChange={(e) => updateLevel("commands", e.target.value)}
                    style={{ fontFamily: "var(--font-mono)", color: "#39ff14" }}
                  />
                </div>

                <div className="field">
                  <label>What I Learned</label>
                  <textarea
                    rows={3}
                    placeholder="Key takeaways, new tools, techniques, concepts..."
                    value={selected.learnings}
                    onChange={(e) => updateLevel("learnings", e.target.value)}
                  />
                </div>

                <div className="field">
                  <label>Flag (optional)</label>
                  <input
                    type="text"
                    placeholder="CTF{...} or the password for next level"
                    value={selected.flag}
                    onChange={(e) => updateLevel("flag", e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* ─── PREVIEW TAB ─── */}
        {tab === "preview" && (
          <div>
            <div className="tabs" style={{ marginBottom: 16 }}>
              {levels.map((l) => (
                <button
                  key={l.id}
                  className={`tab${l.id === selectedId ? " active" : ""}`}
                  onClick={() => setSelectedId(l.id)}
                >
                  L{l.number}
                </button>
              ))}
            </div>
            <div className="card">
              <div className="card-header">
                <span className="card-title">
                  // Markdown Output — level-
                  {String(selected?.number || 0).padStart(2, "0")}.md
                </span>
              </div>
              <div className="output-block" style={{ position: "relative" }}>
                <button className="copy-btn" onClick={() => copyText(mdOutput)}>
                  COPY
                </button>
                {mdOutput.split("\n").map((line, i) => {
                  let color = "var(--text)";
                  if (line.startsWith("#")) color = "var(--amber)";
                  else if (line.startsWith("```")) color = "var(--green-dim)";
                  else if (line.startsWith(">")) color = "var(--muted)";
                  return (
                    <div key={i} style={{ color }}>
                      {line || " "}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ─── GIT TAB ─── */}
        {tab === "git" && (
          <div>
            <div className="card">
              <div className="card-header">
                <span className="card-title">// Repo Settings</span>
              </div>
              <div className="row">
                <div className="field">
                  <label>Repository Name</label>
                  <input
                    value={repoName}
                    onChange={(e) => setRepoName(e.target.value)}
                    placeholder="ctf-writeups"
                  />
                </div>
                <div className="field">
                  <label>Branch</label>
                  <input
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    placeholder="main"
                  />
                </div>
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "var(--muted)",
                  marginTop: 4,
                }}
              >
                Replace{" "}
                <span style={{ color: "var(--amber)" }}>YOUR_USERNAME</span> in
                the script with your actual GitHub username.
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <span className="card-title">// push.sh</span>
                <span className="card-badge">
                  {levels.filter((l) => l.status !== "empty").length} LEVEL(S)
                </span>
              </div>
              <div className="output-block" style={{ position: "relative" }}>
                <button
                  className="copy-btn"
                  onClick={() => copyText(gitOutput)}
                >
                  COPY
                </button>
                {gitOutput.split("\n").map((line, i) => {
                  let color = "var(--text)";
                  if (line.startsWith("#")) color = "var(--muted)";
                  else if (line.match(/^(git|cat|echo|if|fi|REPO|BRANCH)/))
                    color = "var(--green)";
                  else if (line.startsWith("HEREDOC") || line === "HEREDOC")
                    color = "var(--green-dim)";
                  return (
                    <div
                      key={i}
                      style={{ color, fontFamily: "var(--font-mono)" }}
                    >
                      {line || " "}
                    </div>
                  );
                })}
              </div>
              <div className="btn-row" style={{ marginTop: 16 }}>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    const blob = new Blob([gitOutput], { type: "text/plain" });
                    const a = document.createElement("a");
                    a.href = URL.createObjectURL(blob);
                    a.download = "push.sh";
                    a.click();
                    showToast("DOWNLOADED");
                  }}
                >
                  ⬇ Download push.sh
                </button>
                <button
                  className="btn btn-ghost"
                  onClick={() => copyText(gitOutput)}
                >
                  Copy Script
                </button>
              </div>
            </div>

            <div className="card">
              <div className="card-title" style={{ marginBottom: 12 }}>
                // Quick Steps
              </div>
              {[
                ["01", "Save the script as push.sh in your writeup folder"],
                ["02", "chmod +x push.sh"],
                ["03", "Replace YOUR_USERNAME with your GitHub handle"],
                ["04", "Create the repo on GitHub first (no init commit)"],
                ["05", "./push.sh"],
              ].map(([n, t]) => (
                <div
                  key={n}
                  style={{
                    display: "flex",
                    gap: 12,
                    marginBottom: 10,
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "var(--green)",
                      fontFamily: "var(--font-display)",
                      fontSize: "10px",
                      minWidth: 24,
                      paddingTop: 1,
                    }}
                  >
                    {n}
                  </span>
                  <span style={{ fontSize: "12px", color: "var(--text)" }}>
                    {t}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {toast && <div className="toast">✓ {toast}</div>}
    </>
  );
}
