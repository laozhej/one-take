// Captures the film's cover mode as a PNG at 2× and scales it down.  usage: node cover.mjs film.html out.png [t] [zoom]
import { spawn, execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const [html, out, t = '47.4', z = '1.75'] = process.argv.slice(2), port = 9700 + Math.floor(Math.random() * 100);
const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${mkdtempSync(join(tmpdir(), 'cover-'))}`, '--use-angle=metal', 'about:blank'], { stdio: 'ignore' });
let ws;
for (let i = 0; i < 100 && !ws; i++) { try { const p = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find(x => x.type === 'page'); if (p) ws = new WebSocket(p.webSocketDebuggerUrl); } catch {} await sleep(100); }
if (ws.readyState !== 1) await new Promise(r => ws.onopen = r);
let id = 0; const pend = new Map();
ws.onmessage = m => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d); pend.delete(d.id); } };
const send = (method, params = {}) => new Promise(r => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async e => { const r = await send('Runtime.evaluate', { expression: e, returnByValue: true, awaitPromise: true }); if (r.result?.exceptionDetails) throw new Error(r.result.exceptionDetails.exception?.description); return r.result?.result?.value; };
await send('Page.navigate', { url: pathToFileURL(resolve(html)).href + '?capture=1&ss=2' });
for (let i = 0; i < 120; i++) { await sleep(500); if (await ev('!!(window.__film && window.__film.ready)').catch(() => false)) break; }
await ev(`__film.cover(${t}, ${z})`);
const url = await ev(`document.getElementById('c').toDataURL('image/png')`);
const big = out.replace(/\.png$/, '@2x.png');
writeFileSync(big, Buffer.from(url.split(',')[1], 'base64'));
execFileSync('ffmpeg', ['-v', 'error', '-y', '-i', big, '-vf', 'scale=1920:1080:flags=lanczos', out]);
console.log('wrote', out);
chrome.kill(); process.exit(0);
