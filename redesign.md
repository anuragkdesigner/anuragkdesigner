

- **Intro:** A script "Still" logotype appears, then the words "Go... GOOD" build up in heavy black type.
- **Hero:** A cream-colored display headline in big bold letters, with the red words "LAUGHS" in a large font and smaller black lines around it. A cartoon mascot sits between the words "GO" and "OD" and moves as the page loads.
- **Top nav:** A thin dark bar with a small logo on the left and links on the right (WORK, NEWS, ABOUT, CAPABILITIES, CONTACT).
- **Work section:** A split layout. On the left is a sticky project card with a video thumbnail, a small brand name above a red label, and a red title. As you scroll, the card changes from one project to the next (Astrology, Mopar, EG Bank, Amazon, then "View All Work"). A vertical strip of small labels runs along the left edge.
- **Right side:** A rotating circular text badge with a cartoon eye character, and a paragraph where some words switch between bold, italic, and different weights.
- **Overall style:** Dark charcoal background, cream text, one bright red accent, chunky display fonts with a clean sans-serif for body text.

I can't hear the audio, so I don't know about any sound effects. Exact animation timing is approximate, but the prompts below describe the effects clearly enough to rebuild them.

## Step-by-step prompts

### Step 1: Project setup and design tokens

```
Build a single-file portfolio website as index.html (HTML, CSS, and JS in one file).

Design system:
- Background: dark charcoal #1f2430
- Primary text: cream #f3efe4
- Accent: red #e0373a
- Display font: a heavy, chunky display font (use "Bowlby One" or "Anton" from Google Fonts)
- Body font: a clean sans-serif (use "Inter" from Google Fonts)
- Use CSS variables for all colors and fonts
- Smooth scrolling and a max content width of 1400px with generous side padding

Libraries (load from cdnjs with exact versions):
- GSAP 3.12.5 and its ScrollTrigger plugin for all animations

Do not use localStorage. Make it fully responsive (mobile, tablet, desktop).
```

### Step 2: Intro animation

```
Add an intro sequence that plays once when the page loads, using GSAP timeline:
1. A black screen with a script-style logo text "Yourname" that fades and draws in over 1.2 seconds.
2. The logo swaps to a larger display word, then the text "GO" appears, followed by "OD" in a bigger size, with a small bounce.
3. The intro overlay slides upward (yPercent -100) to reveal the hero.

Total length around 3 seconds. Add a "skip intro" click handler. Only play it once per visit.
```

### Step 3: Navigation bar

```
Create a fixed top navigation bar:
- Left: small logo text in italic script
- Right: links WORK, ABOUT, SERVICES, CONTACT in small uppercase letters with letter-spacing 0.08em
- Background is transparent at top, and turns solid charcoal with a thin bottom border after scrolling 40px
- Hover on a link: underline slides in from the left
- On mobile: a simple menu button that opens a full-screen overlay with large links
```

### Step 4: Hero section

```
Build the hero section:
- A large headline in the display font, stacked on 3 lines:
  Line 1: "[YOUR TAGLINE LINE 1]" in cream, medium size
  Line 2: "[YOUR KEYWORD]" in red, very large (fills most of the width)
  Line 3: "[YOUR TAGLINE LINE 3]" in cream, small
- Below it, a row with the words "[WORD A]" and "[WORD B]" in huge letters, with a mascot/illustration placed between them (use an inline SVG placeholder circle with a face for now)
- On load: each line rises from behind a mask (y: 100% to 0, stagger 0.1s)
- The mascot bounces up and down slowly (sine ease, 2 seconds) and tilts when the mouse moves across the hero
```

### Step 5: Horizontal-scroll style "Work" section with sticky card

This is the main effect from the video.

```
Build the "Work" section with a sticky scroll layout:
- Container is 400vh tall (one full screen per project, times the number of projects).
- Inside, a sticky element (position: sticky; top: 0; height: 100vh) that splits into two columns:
  LEFT (45% width): a project card showing:
    - A video or image thumbnail with 16:10 ratio, rounded corners 6px
    - Below it, a small caption: client/brand name in small uppercase
    - A red rectangular label with the project title in the display font
  RIGHT (55% width): a text block and a rotating badge
- Put 5 projects in an array in JS: { client, title, image, videoUrl }. Use placeholder images for now.
- Use ScrollTrigger to watch scroll progress across the 400vh container. Map progress to the active project index (0 to 4).
- When the index changes, the left card does a quick transition: old card slides up and fades out, new card slides in from below (0.5s, power2.out).
- The last item is a "VIEW ALL WORK" card with a button linking to /work.html.
- A vertical strip of small labels (the project index numbers, like 01 02 03) runs along the left edge, rotated 90 degrees. The active one is highlighted in red.
```

### Step 6: Rotating circular badge

```
Create a circular rotating text badge:
- An SVG circle with the text "YOUR TEXT · YOUR TEXT ·" set on a circular path (textPath)
- Inside the circle, a simple cartoon eye with pupils that follow the mouse cursor
- The whole badge rotates continuously (360 degrees every 14 seconds, linear, infinite)
- The eyes blink every 4 seconds
```

### Step 7: Intro paragraph with word-level animation

```
Create a paragraph about yourself with mixed styles:
- Text: "For [N] years, I've been [verb], [verb], [verb], [verb] and [verb] for [audience]."
- Some words are styled differently: bold in the display font, italic, or a lighter weight, marked with <span> classes
- On scroll into view: split the text into words, and each word fades in from opacity 0.15 to 1, stagger 0.03s, triggered when the paragraph top hits 75% of the viewport height
- Keep the text color cream, with highlighted words in red
```

### Step 8: About, services, and contact sections

```
Add these sections below the work section:
1. ABOUT: two columns. Left: a large statement in the display font. Right: 3 short paragraphs of body text. Each paragraph fades in on scroll.
2. SERVICES: a list of 4 services. Each row has a number, a service name in large display text, and a small description. On hover the row background turns red and the text turns charcoal.
3. CONTACT: a large heading "LET'S WORK TOGETHER" in display font, an email link that underlines on hover, and a simple form (name, email, message) with a submit button that shows a "Sent" message. Don't use a real backend; just show the success state.
4. FOOTER: small text with copyright, social links, and a line like "[YOUR TAGLINE]" in small caps.
```

### Step 9: Cursor and micro-interactions

```
Add a custom cursor:
- A small cream dot that follows the mouse with a 0.15s lag
- Over links or cards, the dot grows into a 60px ring with mix-blend-mode: difference
- Hide the custom cursor on touch devices
```

### Step 10: Responsive rules

```
Make all sections responsive:
- Below 900px width: the sticky work layout stacks. The card becomes full width at the top (sticky, 60vh tall), and the text below scrolls normally.
- Hero headline scales with clamp(): min 48px, preferred 10vw, max 220px
- Nav collapses to the mobile menu
- Disable the custom cursor
- Test that no horizontal scrollbar appears at 375px width
```

### Step 11: Content swap (where to put your portfolio content)

```
Put all content in a single JS object at the top of the script so I can change it easily:

const content = {
  name: "Your Name",
  tagline: ["Line 1", "Keyword", "Line 3"],
  intro: "Your intro paragraph with *highlighted words* marked by asterisks.",
  projects: [
    { client: "Client name", title: "Project title", image: "img/p1.jpg", video: "", link: "#" },
    // add more
  ],
  services: [
    { name: "Service", description: "One line." }
  ],
  contact: { email: "you@email.com" }
};

Render every section from this object. No text should be hard-coded in the HTML except the structure.
```

### Step 12: Final polish

```
Final pass:
- Add a 1px grain/noise overlay on the background at 4% opacity (use an inline SVG filter)
- Make sure every animation respects prefers-reduced-motion (disable scroll animations and the rotating badge)
- Check there are no console errors
- Add meta tags: title, description, and Open Graph tags
- Keep the code commented by section so I can edit it later
```

## Tips for getting the best result

1. Send the steps in order, and confirm each one works before moving to the next.
2. Replace the placeholders (`[YOUR NAME]`, `[YOUR TAGLINE]`, the project images) with your real content before asking for polish.
3. Put your project images in an `img/` folder next to `index.html`.
4. If the animations feel too fast or slow, tell the AI which part and the speed you want (for example, "make the intro 1.5 seconds shorter").
5. If you tell me your name, your tagline, and your projects, I can write the content object for you and build the full site as one HTML file.