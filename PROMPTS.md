# Prompts

These are the prompts that made **ONE TAKE**, verbatim and in order. The film was made in Claude Code by Claude Opus 5.5, using the `opus-js-animations` film-directing skill. Claude's questions are summarised; the answers are the options that were picked.

## 1. The brief

> Build a 64-second, one-take (single continuous shot, no cuts) animation entirely in code.
>
> The protagonist is Claude Code's orange pixel character — and it *is* the mouse cursor itself.
>
> Story / continuous action:
> Early morning. It kicks the mouse pointer away, clicks open a terminal, and types: "Make a video — and you're the protagonist."
> → It splits into 4 copies of itself, in charge of modeling, coding, music, and editing respectively, and four windows pop open at the same time.
> → They step out beat markers on top of a real audio waveform, drag the assets into a timeline, and stomp on "Render."
> → Frame by frame, the rendered images link together into a film-strip roller coaster, and all four of them ride it together.
> → They drag the finished film into a player. On the big screen is playing exactly this frame, at this very moment — an infinite Droste / recursive zoom, pushing in endlessly.
> → They merge back into one, and type out the title and the real production data.
> → It picks the mouse pointer back up, puts it back in its original place, and returns to the first frame — a seamless loop.
>
> Requirements: exactly 64 seconds, one continuous camera move with no edits, first frame and last frame must match perfectly for a seamless loop.

## 2. Direction questions

Claude asked four questions before writing a treatment:

| Question | Answer |
|---|---|
| Where should the sound come from? | **Generate in JS:** a chiptune / lo-fi score at 120 BPM (so 64 s is exactly 32 bars), synthesised in Web Audio from the film's own timeline. The waveform on screen is this soundtrack. |
| Which format? | **16:9, 1920×1080** |
| Which look? | **Warm morning desktop:** an ivory desktop in Claude's palette, crisp pixel sprites, and a light that moves through a whole day. |
| What title should the merged character type at the end? | **ONE TAKE** |

## 3. The treatment

Claude wrote the director's treatment in [`film/FILM.md`](film/FILM.md): logline, look, sound, and a beat-by-beat table timed to the music. The reply was:

> Approved. Build it as written. Leave render time out of the production data.

Everything after that is in the code: [`film/index.html`](film/index.html).

## 4. After delivery

> If I want to upload to social media what should I enter as the title/caption

> No need, I'll post the 16:9 version.

> Can you push all source codes(of this video) to my github with a public repo? Including the prompts with .md file?
