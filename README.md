"# ⌨️ Terminal Portfolio

A cyberpunk-styled, fully interactive terminal portfolio that runs in the browser.

## ✨ Features

-  **Real terminal experience** — type commands, see output, use the command line
-  **4 themes** — `neon`, `amber`, `matrix`, `solarized`
-  **ASCII art boot sequence** — animates a name banner at startup
-  **Matrix rain background** — subtle animated canvas
-  **CRT scanline effect** — classic CRT monitor overlay
-  **Keystroke beep** — toggleable sound effects
-  **Smooth animations** — typing effects, fade-ins, progress bars

## 🎮 Commands

| Command | Description |
|---------|-------------|
| `about` | About me |
| `skills` | My tech stack |
| `projects` | My projects |
| `contact` | Contact information |
| `help` | Show all commands |
| `clear` | Clear the screen |
| `whoami` | Show user biref|
| `date` | Show date/time |
| `theme [name]` | Switch theme (`neon`, `amber`, `matrix`, `solarized`) |
| `sudo` | Easter egg |
| `secret` | Hidden secret |
| `exit` | Easter egg |

## 🛠️ Customization

### 1. Add your personal info

Open **`data.js`** — this is the ONLY file you need to edit!

```js
window.PERSONAL_DATA = {
    name: 'Your Name',
    title: 'Full-Stack Developer',
    about: `Your bio...`,
    skills: [
        { name: 'JavaScript', level: 90 },
        // ...
    ],
    projects: [
        { name: 'Project', description: '...', link: '...' }
    ],
    socials: {
        email: 'you@example.com',
        github: 'https://github.com/you',
        // ...
    },
    funFact: 'A fun fact about you'
};
```

### 2. Run locally

```bash
# Simply open index.html in a browser
# Or use a local server:
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### 3. Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/terminal-portfolio.git
git push -u origin main
```

Then enable GitHub Pages in your repo settings → Pages → Deploy from main branch.

## 📦 Project Structure

```
terminal-portfolio/
├── index.html   ← terminal UI structure
├── styles.css   ← theming, animations, CRT effects
├── script.js    ← terminal engine, commands, boot sequence
├── data.js      ← 🔑 YOUR PERSONAL DATA
└── README.md
```

Made with 💚 and a whole lot of `sudo` by AJ.
"