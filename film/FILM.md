# ONE TAKE: treatment

**Logline.** Claude Code's orange pixel creature wakes at dawn, kicks the mouse pointer into the Trash and becomes the cursor. It asks itself to make a video, splits into four agents who build that video, ride its frames as a roller coaster and watch it play. The video turns out to be this one. Then it puts the pointer back and goes to sleep, and the loop starts again.

**The central image.** The four orange clones sitting on the bottom bar of a big player window. The player shows the desktop with the four clones watching the player, and so on inward. This is the Droste frame and the thumbnail.

**Look.** A warm morning desktop in 2D Canvas, 1920×1080.
- **Palette:** ivory paper `#F4F0E6` (windows), ink `#1F1B16` (type, outlines), terracotta `#D97757` (Clawd, accents), sand `#E8DCC4` (chrome), sage `#9DB39A` and dusk blue `#3C4A6B` (wallpaper), amber `#F2B05E` (sun, highlights).
- **Clawd:** drawn from the real Claude Code banner glyphs (`▐▛███▜▌ / ▝▜█████▛▘ / ▘▘ ▝▝`). That gives a 16×10 pixel sprite: body, eye slits, stub arms and four legs. It is drawn on crisp integer pixels at about cursor size when the whole desktop is in view.
- **Wallpaper:** dynamic, like macOS. Sky gradient, sun arc and three layers of soft hills, all following the menu-bar clock.
- **One day in 64 s:** the clock reads 06:00 at frame 0 and 06:00 again at 64 s. Day runs 0–48 s; dusk and night are compressed into 48–64 s. The UI switches to dark mode automatically at night, so the title glows. Then comes pre-dawn blue, and the next frame is dawn again.
- **Texture:** soft window shadows and a faint paper grain on the wallpaper only. The upload render has no animated grain.

**Sound.** Generated in Web Audio from the film's own timeline: a chiptune/lo-fi score at **120 BPM, so 64 s is exactly 32 bars**. The score is rendered offline once. Its tail is folded back onto the start, so the audio loop is sample-exact too.
- **The waveform on screen is this soundtrack.** It is computed from the rendered buffer.
- **The piano roll shows the score's real notes.**
- **The code window scrolls the film's real source.**
- **Sound effects** are synthesised the same way: the kick, the Trash clank, a double-click, keystrokes (the typing *is* the 16th-note hi-hat), the Enter clack, four "bloops" for the split, beat-marker stomps (the kick drum), drag whooshes, the RENDER impact, sprocket clicks on the coaster climb, and a Shepard tone under the endless zoom (it rises forever, like the zoom pushes forever). The title is typed in chip blips.

**Structure.** Eight 4-bar phrases (8 s each), one take, one set (the desktop). The camera moves continuously on a periodic spline, so position *and* velocity at 64 s match 0 s.

| Time | Music | What we see | Camera | Light |
|---|---|---|---|---|
| 0–3 | music box + pad intro | Clawd asleep beside the arrow pointer, small *z*s rising. Eyes open at 1.5, it stands at 2.5 | close, z≈3, on the home spot (Trash visible at the frame bottom) | 06:00, first light |
| 3–4 | | wind-up, **KICK** at 3.5. The pointer spins along an arc into the dock's Trash at 4.0 (lid bounce, clank) | small whip after the pointer | sunrise |
| 4–8 | bass + soft kick enter | Clawd glides like a cursor to the Terminal icon and double-clicks (6.5 / 6.75). The terminal opens from the icon | pulls back to the terminal, z≈1.7 | dawn gold |
| 8–14 | 16th-note hats = keystrokes | types `Make a video — and you're the protagonist.` one key per 16th (8.0–13.25). **Enter** is stomped at 14.0 | slow push on the prompt line | morning |
| 14–16 | riser | Claude Code replies: `● Splitting into 4 agents` with task rows *modeling · coding · music · editing*. Clawd vibrates | eases back | |
| **16** | **full groove drops** | **SPLIT:** four Clawds, each with a pixel accessory (cube, `</>`, headphones, clapperboard). Four windows pop out of the terminal *at once* into a 2×2 layout, and the terminal tucks into the dock | pulls back to the whole desktop, z=1 | bright morning |
| 16–24 | each window adds its layer | **Model:** a voxel Clawd builds itself and turns. **Code:** this film's source scrolls under the coder. **Music:** the piano roll fills note by note in sync. **Editor:** the real waveform draws in | slow drift across the four | late morning |
| 24–28 | | all four jump onto the music window's waveform and march along it, stomping an orange beat marker on every beat (each stomp is the kick) | push to z≈2, tracking them | noon |
| 28–31 | | each clone drags its asset into the editor's timeline: the model clip, the code clip, the music clip with its markers | pulls back to z≈1.3 | |
| **31.5–32** | build, then **impact** | all four leap and land on **RENDER** at 32.0 | small push to the button | |
| 32–34 | | render: frame thumbnails pop out one per 16th, *real frames of this film*, and click together into a film strip. The four windows fold into the dock | follows the strip's head | afternoon |
| 34–44 | the most energetic section | **film-strip roller coaster:** the strip builds itself just ahead of a cart carrying all four. It climbs (sprocket clicks), drops, makes a loop-de-loop and swoops over the hills of the wallpaper | tracking at z≈1.6–2.2, rolling ±15° through the loop | golden hour |
| 44–46 | | the strip coils into a reel labelled `film.mp4`. They drag it to the Player, which opens big in the centre. Drop at 46 | eases out to the whole desktop | sunset |
| 46–48 | | the player shows **this exact frame, right now.** The four sit on its bottom bar to watch | locked on the whole desktop | dusk |
| **48–54** | Shepard tone | **DROSTE:** an endless push into the screen. Three nested levels in 6 s; because the frame is self-similar, each level lands exactly where the last began | log-speed zoom about the image's fixed point | dusk → night, dark mode turns on |
| 54 | resolve | the four leap together and **merge** into one (pop) | the whole desktop | night |
| 54.5–58 | chip blips | Clawd clicks Terminal. In big block letters, like the Claude Code banner, it types **ONE TAKE**, then the real data: `64.000 s · 1,920 frames · 1 shot · 0 cuts · 120 BPM · 32 bars · N notes · N lines of code · N KB · 0 image or audio files` | push to the terminal, z≈1.6 | night |
| 58–60 | | hold on the title | | |
| 60–61 | intro motif returns | every window shrinks into the dock in one swoosh | drifts toward the home spot | pre-dawn |
| 61–63 | | Clawd hops onto the Trash, pulls the pointer out and puts it back where it was, like macOS's *Put Back* | pushes to z≈3 | |
| 63–64 | music box | sits, eyes close, the first *z* rises → **frame 0** | settles exactly on the frame-0 framing | 06:00 |

**The hook.** A big, warm close-up of a sleeping pixel creature beside a giant arrow cursor. Within 3.5 s it kicks the cursor into the Trash.

**The ending.** It doesn't end. Frame 1919 flows into frame 0: same pose, same light, same camera speed, and the reverb tail of the end is already playing under the start.

**"Real production data".** Everything is measured by the page at runtime. Lines and bytes come from its own script. Notes come from the score array. Frames and beats come from the timeline. "0 image or audio files" is checkable: there are none.
Render time is only known after rendering. If you want it shown, I render twice and use the first render's measured time. Otherwise I leave it out.

**Formats.** 16:9, 1920×1080, 30 fps, rendered at 2× and scaled down for crispness. Text stays inside the 5% safe area.

**Risks and how I'll check them.**
- *The Droste seam* (the jump from one level to the next): checked frame by frame across each level crossing. Nothing in the foreground overlaps the player's screen during the push.
- *The loop seam:* frames 1919 and 0 are compared pixel by pixel, and the camera's velocity is checked across the seam.
- *Clones at full-desktop scale* (~48 px tall): checked at 1:1, and the accessories must read.
- *Small text in the code and piano-roll windows* is decoration and need not be read. The prompt, the title and the data must be read, and are checked at 1:1.
- *The mix:* I can measure loudness and peaks, but I can't listen. Please give it a listen.

## Decisions
- Sound: generated in JS (chosen). Format: 16:9 1920×1080 (chosen). Look: warm morning desktop (chosen). Title: ONE TAKE (chosen).
- 2D Canvas, assumed from the pixel-art protagonist. The coaster loop and the Droste are 2D tricks.
- On-screen text in English, as in the brief.

## Build notes (as made)
- **One page, no assets:** `index.html` is the whole film. Everything is drawn in Canvas 2D, and the score is synthesised in Web Audio at load. The only external files are two Google fonts (Inter, JetBrains Mono).
- **Camera:** a periodic PCHIP spline over position and log-zoom, so position *and* velocity wrap at 64 s. Two moves are blended in from computed paths: the coaster follow (34–44 s, the cart's position averaged over ±0.5 s) and the Droste push (48–54 s).
- **Droste:** the player's screen is the desktop scaled by 0.45 about (960, 520). Each frame renders the world twice at the reference camera: once behind the screen and once in front of it. The two layers are composited 9 levels deep, and the push zooms about that fixed point by 0.45⁻ˢ, wrapping each level. Frames measured across both level crossings show no step.
- **Clock:** one day in 64 s, 06:00 → 06:00. The clock runs 3× faster at night, with eased transitions, so the light changes at the same rate on both sides of the loop. Dark mode follows the clock: 19:00 → 05:30.
- **Audio:** four 16 s chunks render in parallel offline contexts and are summed. Anything past 64 s wraps onto the start. A circular JS compressor and a 2 ms look-ahead limiter follow. The result is -14.0 LUFS with a -1.0 dBFS true peak. The step across the loop point (0.0016) is smaller than a typical sample step (0.0064). Start-up takes about 7 s; the audio render went from 30 s to 3.5 s.
- **Real data on screen:**
  - the waveform: peaks of the final mix;
  - the piano roll: the score's notes, and the music clone lands on each lead note as it sounds;
  - the code window: the film's own source;
  - the strip's frames: this film's frames, rendered at 256×144;
  - the end card: line, byte and note counts measured by the page.
- **Checks:**
  - `verify.mjs` is pure at 1× and 2× (42 times at 2×).
  - At the loop seam, frame-to-frame change runs 1.27 → 1.07 → 1.03 → **0.96 (64 → 0)** → 0.87 → 0.81, with no step.
- **Not checked:** the mix hasn't been listened to; only its levels were measured.
