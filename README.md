# Terminal Portfolio

A personal portfolio built as a fully interactive terminal. No scrolling pages, no frameworks, no bloat. Just a command line, a blinking cursor, and the keyboard. Type commands, switch themes, find easter eggs. Built with vanilla HTML, CSS, and JavaScript.

---

## Features

| Feature | What it does |
|---------|--------------|
| Real terminal interface | Commands, output, authentic CLI feel |
| 4 themes | `neon`, `amber`, `matrix`, `solarized` — switch instantly |
| ASCII boot sequence | System boot animation on load |
| Matrix rain | Subtle background rain effect |
| CRT scanlines | Retro monitor aesthetic |
| Keystroke audio | Toggleable sound effects |
| Easter eggs | `sudo`, `secret`, `exit` — explore |
| Zero dependencies | 4 files, no frameworks, no packages |

---

## Commands

```text
about       — short intro
skills      — tech stack
projects    — what I've built
contact     — email and GitHub
theme       — switch themes (neon/amber/matrix/solarized)
clear       — wipe the screen
help        — show all commands
```

Some commands exist just to surprise you. Try `sudo`, `secret`, or `exit`.

---

## Customizing

All personal data lives in `data.js`. Open it, replace the placeholder content, and you're set.

```js
window.PERSONAL_DATA = {
  name: 'Your Name',
  title: 'Your Title',
  about: 'Some lines about you',
  skills: [],
  projects: [],
  socials: {
    email: 'you@example.com',
    github: 'https://github.com/you'
  }
};
```

---

## Running Locally

No build step required.

1. Double-click `index.html` to open directly in the browser.
2. Or start a local server:
   ```bash
   python3 -m http.server 8000
   ```
   Then navigate to `http://localhost:8000`.

---

## Project Structure

```
index.html    — page structure
styles.css    — themes and effects
script.js     — terminal logic
data.js       — your personal info
```

---

## Live Site

https://dev-aj-5.github.io/terminal-portfolio

---

## License

MIT.