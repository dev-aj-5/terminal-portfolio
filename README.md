# Terminal Portfolio

A portfolio that runs in your browser as an interactive terminal. Instead of scrolling through a normal webpage, you type commands to learn about me, see my projects, or mess around with a few easter eggs.

Built with plain HTML, CSS, and JavaScript — no frameworks, no dependencies.

---

## How to use

Open the live site (or run it locally) and type `help` to see all commands.

Main commands:

- `about` — short intro
- `skills` — tech stack
- `projects` — what I've built
- `contact` — email and GitHub
- `theme` — switch between neon, amber, matrix, and solarized
- `clear` — wipe the screen

Some commands do nothing useful. Try `sudo`, `secret`, or `exit`.

---

## Customizing

Everything personal lives in one file: `data.js`. Open it, replace the placeholder info with yours, and you're done.

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

## Running locally

No build step. Two options:

1. Double-click `index.html`.
2. Or run a simple server:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

---

## Project structure

```
index.html    — page structure
styles.css    — themes and effects
script.js     — terminal logic
data.js       — your personal info
```

---

## Live site

https://dev-aj-5.github.io/terminal-portfolio

---

## License

MIT.
