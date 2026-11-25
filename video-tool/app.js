// Script to Video — Phases 1-3: UI, script -> scenes, in-browser voice-over, canvas preview.
import { KokoroTTS } from "https://cdn.jsdelivr.net/npm/kokoro-js@1.2.1/+esm";

const $ = (id) => document.getElementById(id);

const SAMPLE = `# Why the sky is blue
Sunlight looks white, but it is really made of every color mixed together.

# Scattering
When sunlight hits the atmosphere, tiny air molecules scatter the short blue wavelengths far more than red ones.

[visual: quote]
So wherever you look in the sky, scattered blue light is reaching your eyes.`;

const THEMES = {
  ocean:  { bg: ["#0ea5e9", "#1e3a8a"], fg: "#ffffff", accent: "#fde047" },
  sunset: { bg: ["#f97316", "#7c2d12"], fg: "#fff7ed", accent: "#fde68a" },
  dark:   { bg: ["#1e293b", "#020617"], fg: "#e2e8f0", accent: "#38bdf8" },
};

let scenes = [];      // { title, text, visual, audio?: Float32Array, sr?, duration? }
let tts = null;
let playing = null;   // { stop() }

// ---------- Phase 2: script -> scenes ----------
function parseScript(raw) {
  const blocks = raw.trim().split(/\n\s*\n/).filter(Boolean);
  const out = [];
  for (const block of blocks) {
    let title = "", visual = "title";
    const body = [];
    for (const line of block.split("\n")) {
      const t = line.trim();
      const tag = t.match(/^\[visual:\s*(\w+)\s*\]$/i);
      if (tag) visual = tag[1].toLowerCase();
      else if (t.startsWith("#")) title = t.replace(/^#+\s*/, "");
      else if (t) body.push(t);
    }
    const text = body.join(" ");
    if (!text && !title) continue;
    // Long paragraphs: split into ~2-sentence scenes
    const sentences = text.match(/[^.!?]+[.!?]+|\S[^.!?]*$/g) || [text];
    if (sentences.length > 3) {
      for (let i = 0; i < sentences.length; i += 2) {
        out.push({ title: i === 0 ? title : "", text: sentences.slice(i, i + 2).join(" ").trim(), visual });
      }
    } else {
      out.push({ title, text, visual });
    }
  }
  return out;
}

function renderSceneList() {
  const wrap = $("scenes");
  wrap.innerHTML = "";
  scenes.forEach((s, i) => {
    const el = document.createElement("div");
    el.className = "scene";
    el.innerHTML = `
      <div class="meta">
        <input placeholder="Scene title (optional)" value="${s.title.replace(/"/g, "&quot;")}">
        <select>
          ${["title", "bullets", "quote"].map(v => `<option ${v === s.visual ? "selected" : ""}>${v}</option>`).join("")}
        </select>
      </div>
      <textarea></textarea>
      <div class="dur">${s.duration ? `Voice length: ${s.duration.toFixed(1)}s` : "Voice not generated yet"}</div>`;
    el.querySelector("textarea").value = s.text;
    el.querySelector("input").oninput = (e) => { s.title = e.target.value; s.audio = null; };
    el.querySelector("select").onchange = (e) => (s.visual = e.target.value);
    el.querySelector("textarea").oninput = (e) => { s.text = e.target.value; s.audio = null; };
    wrap.appendChild(el);
  });
}

// ---------- Phase 3: voice-over ----------
async function loadModel() {
  if (tts) return tts;
  $("status").textContent = "Downloading voice model (first time only, ~80 MB)...";
  $("bar").hidden = false;
  tts = await KokoroTTS.from_pretrained("onnx-community/Kokoro-82M-v1.0-ONNX", {
    dtype: "q8",
    device: "wasm",
    progress_callback: (p) => {
      if (p.status === "progress" && p.total) $("bar").value = p.loaded / p.total;
    },
  });
  return tts;
}

async function generateVoice() {
  $("generate").disabled = true;
  try {
    const model = await loadModel();
    const voice = $("voice").value;
    $("bar").value = 0;
    for (let i = 0; i < scenes.length; i++) {
      const s = scenes[i];
      $("status").textContent = `Generating voice ${i + 1} of ${scenes.length}...`;
      $("bar").value = i / scenes.length;
      const narration = [s.title, s.text].filter(Boolean).join(". ");
      const a = await model.generate(narration, { voice });
      s.audio = a.audio;
      s.sr = a.sampling_rate;
      s.duration = a.audio.length / a.sampling_rate;
    }
    $("bar").value = 1;
    $("status").textContent = "Voice-over ready. Scroll down to preview.";
    renderSceneList();
    $("previewSection").hidden = false;
    drawFrame(scenes[0], 0.01, 1);
  } catch (e) {
    console.error(e);
    $("status").textContent = "Error: " + e.message;
  } finally {
    $("generate").disabled = false;
  }
}

// ---------- Phase 4 (basic): canvas drawing ----------
const canvas = $("stage");
const ctx = canvas.getContext("2d");

function wrapText(text, maxWidth) {
  const words = text.split(" "), lines = [];
  let line = "";
  for (const w of words) {
    const test = line ? line + " " + w : w;
    if (ctx.measureText(test).width > maxWidth && line) { lines.push(line); line = w; }
    else line = test;
  }
  if (line) lines.push(line);
  return lines;
}

function drawFrame(scene, t, dur) {
  const th = THEMES[$("theme").value];
  const W = canvas.width, H = canvas.height;
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, th.bg[0]); g.addColorStop(1, th.bg[1]);
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

  // drifting circles for a little motion
  ctx.globalAlpha = 0.12; ctx.fillStyle = th.fg;
  for (let i = 0; i < 4; i++) {
    const x = (W * (i + 1) / 5 + t * 30 * (i % 2 ? 1 : -1) + W) % W;
    ctx.beginPath(); ctx.arc(x, H * (0.2 + i * 0.2), 90 + i * 25, 0, Math.PI * 2); ctx.fill();
  }
  ctx.globalAlpha = 1;

  const fade = Math.min(1, t / 0.5) * Math.min(1, (dur - t) / 0.4 + 0.01);
  const slide = (1 - Math.min(1, t / 0.6)) * 40;
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.globalAlpha = Math.max(0, fade);

  let y = H / 2;
  if (scene.title) {
    ctx.fillStyle = th.accent; ctx.font = "bold 64px system-ui, sans-serif";
    ctx.fillText(scene.title, W / 2, H * 0.22 + slide);
    y = H * 0.5;
  }

  // typewriter reveal tied to audio progress
  const reveal = Math.min(1, t / Math.max(0.1, dur * 0.85));
  const shown = scene.text.slice(0, Math.ceil(scene.text.length * reveal));
  ctx.fillStyle = th.fg;

  if (scene.visual === "quote") {
    ctx.font = "italic 46px Georgia, serif";
    wrapText("\u201C" + shown + "\u201D", W * 0.72).forEach((l, i, a) =>
      ctx.fillText(l, W / 2, y + (i - (a.length - 1) / 2) * 62));
  } else if (scene.visual === "bullets") {
    ctx.textAlign = "left"; ctx.font = "40px system-ui, sans-serif";
    const parts = shown.match(/[^.!?]+[.!?]*/g) || [shown];
    let yy = y - parts.length * 35;
    parts.forEach((p) => {
      ctx.fillStyle = th.accent; ctx.fillText("\u25CF", W * 0.12, yy);
      ctx.fillStyle = th.fg;
      wrapText(p.trim(), W * 0.7).forEach((l) => { ctx.fillText(l, W * 0.17, yy); yy += 56; });
      yy += 12;
    });
  } else {
    ctx.font = "44px system-ui, sans-serif";
    wrapText(shown, W * 0.75).forEach((l, i, a) =>
      ctx.fillText(l, W / 2, y + (i - (a.length - 1) / 2) * 60));
  }
  ctx.globalAlpha = 1;
}

// ---------- Preview player ----------
async function play() {
  stop();
  const ac = new (window.AudioContext || window.webkitAudioContext)();
  let cancelled = false;
  playing = { stop() { cancelled = true; ac.close(); } };

  for (const s of scenes) {
    if (cancelled) return;
    const buf = ac.createBuffer(1, s.audio.length, s.sr);
    buf.copyToChannel(s.audio, 0);
    const src = ac.createBufferSource();
    src.buffer = buf; src.connect(ac.destination);
    const start = ac.currentTime; src.start();
    await new Promise((resolve) => {
      const tick = () => {
        if (cancelled) return resolve();
        const t = ac.currentTime - start;
        if (t >= s.duration) return resolve();
        drawFrame(s, t, s.duration);
        requestAnimationFrame(tick);
      };
      tick();
    });
  }
  stop();
}
function stop() { if (playing) { playing.stop(); playing = null; } }

// ---------- Wire up ----------
$("sample").onclick = () => ($("script").value = SAMPLE);
$("split").onclick = () => {
  scenes = parseScript($("script").value);
  if (!scenes.length) return alert("Paste a script first.");
  $("scenesSection").hidden = false;
  $("previewSection").hidden = true;
  renderSceneList();
};
$("generate").onclick = generateVoice;
$("play").onclick = () => { if (scenes.every((s) => s.audio)) play(); else alert("Generate the voice-over first."); };
$("stop").onclick = stop;
