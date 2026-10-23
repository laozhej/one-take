// Loop-seam step and per-section RMS of a 16-bit stereo WAV.  usage: node audiocheck.mjs mix.wav
import { readFileSync } from 'node:fs';
const b = readFileSync(process.argv[2]), sr = b.readUInt32LE(24), n = (b.length - 44) / 4, x = new Float32Array(n);
for (let i = 0; i < n; i++) x[i] = (b.readInt16LE(44 + i * 4) + b.readInt16LE(46 + i * 4)) / 65536;
const d = []; for (let i = 1; i < n; i += 7) d.push(Math.abs(x[i] - x[i - 1])); d.sort((a, c) => a - c);
console.log(`${(n / sr).toFixed(3)} s; step across loop ${Math.abs(x[0] - x[n - 1]).toFixed(5)}; median step ${d[d.length >> 1].toFixed(5)}; 99.9% ${d[Math.floor(d.length * .999)].toFixed(5)}`);
for (const t of [16, 32, 48]) console.log(`step at ${t}s ${Math.abs(x[t * sr] - x[t * sr - 1]).toFixed(5)}`);
const rms = (a, c) => { let s = 0; for (let i = a * sr; i < c * sr; i++) s += x[i] * x[i]; return (10 * Math.log10(s / ((c - a) * sr))).toFixed(1); };
for (const [a, c, nm] of [[0, 4, 'intro'], [8, 14, 'typing'], [16, 24, 'groove'], [24, 28, 'march'], [36, 44, 'ride'], [48, 54, 'droste'], [56, 60, 'title'], [60, 64, 'outro']]) console.log(nm.padEnd(8), rms(a, c), 'dBFS rms');
