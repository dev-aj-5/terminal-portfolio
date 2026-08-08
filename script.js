// Get DOM elements
const output = document.getElementById('output');
const commandLine = document.getElementById('command-line');
const terminal = document.getElementById('terminal');
const bootScreen = document.getElementById('boot-screen');
const bootText = document.getElementById('boot-text');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const terminalContent = document.getElementById('terminal-content');
const matrixCanvas = document.getElementById('matrix-rain');
const ctx = matrixCanvas.getContext('2d');

// State
let commandHistory = [];
let historyIndex = -1;
let isMuted = false;
let currentTheme = 'neon';
let isBootComplete = false;

// ===== MATRIX RAIN =====
function initMatrixRain() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()*&^%+-/~{[|`]}';
    const fontSize = 16;
    let columns = matrixCanvas.width / fontSize;
    const drops = [];

    function resizeCanvas() {
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
        columns = matrixCanvas.width / fontSize;
        for (let x = 0; x < columns; x++) drops[x] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        ctx.font = fontSize + 'px monospace';
        ctx.fillStyle = '#0f0';
        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    setInterval(draw, 33);
}

// ===== BOOT SEQUENCE =====
const bootLines = [
    'PORTFOLIO OS v1.0.0',
    'Booting up...',
    'Loading kernel modules...',
    'Initializing interface...',
    'Mounting /dev/personal...',
    'Starting terminal services...'
];

async function bootSequence() {
    for (let i = 0; i < bootLines.length; i++) {
        await typeLine(bootLines[i]);
        updateProgress(((i + 1) / bootLines.length) * 100);
        await wait(300);
    }

    // Show banner
    const banner = document.getElementById('banner-art').textContent;
    await typeLine(banner);
    await wait(800);

    bootScreen.classList.add('hidden');
    isBootComplete = true;
    printWelcome();
    commandLine.focus();
}

function typeLine(line) {
    return new Promise(resolve => {
        let i = 0;
        bootText.textContent = '';
        function type() {
            if (i < line.length) {
                bootText.textContent += line.charAt(i);
                i++;
                setTimeout(type, 15);
            } else {
                resolve();
            }
        }
        type();
    });
}

function updateProgress(percent) {
    progressBar.style.width = percent + '%';
    progressText.textContent = Math.round(percent) + '%';
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ===== OUTPUT =====
function appendOutput(text) {
    const div = document.createElement('div');
    div.innerHTML = text;
    div.classList.add('fade-in');
    output.appendChild(div);
    scrollToBottom();
}

function appendCommand(command) {
    const div = document.createElement('div');
    div.className = 'command-echo';
    div.textContent = command;
    output.appendChild(div);
    scrollToBottom();
}

function scrollToBottom() {
    terminalContent.scrollTop = terminalContent.scrollHeight;
}

function printWelcome() {
    appendOutput(`<br>Welcome to my terminal portfolio!<br>Type <span style="color: var(--accent);">help</span> to see available commands.<br>`);
}

// ===== COMMANDS =====
const commands = {
    about: () => {
        return `<strong>About Me</strong><br>${window.PERSONAL_DATA.about}<br>`;
    },
    help: () => {
        return `<strong>Available Commands:</strong><br>
        <span style="color: var(--accent);">about</span> - About me<br>
        <span style="color: var(--accent);">skills</span> - My skills<br>
        <span style="color: var(--accent);">projects</span> - My projects<br>
        <span style="color: var(--accent);">contact</span> - Contact info<br>
        <span style="color: var(--accent);">help</span> - Show this help<br>
        <span style="color: var(--accent);">clear</span> - Clear screen<br>
        <span style="color: var(--accent);">whoami</span> - Who am I?<br>
        <span style="color: var(--accent);">date</span> - Current date/time<br>
        <span style="color: var(--accent);">theme</span> - Change theme<br>
        <span style="color: var(--accent);">sudo</span> - Try it ;)<br>
        <span style="color: var(--accent);">secret</span> - ???
        <br>`;
    },
    skills: () => {
        return `<strong>My Skills:</strong><br><br>${window.PERSONAL_DATA.skills.map(s => `${s.name}: ${s.level}%`).join('<br>')}<br>`;
    },
    projects: () => {
        return `<strong>My Projects:</strong><br><br>${window.PERSONAL_DATA.projects.map(p => `▪ ${p.name} — ${p.description} <a href="${p.link}" style="color: var(--accent);" target="_blank">[link]</a>`).join('<br>')}<br>`;
    },
    contact: () => {
        return `<strong>Contact:</strong><br><br>
        ✉ <a href="mailto:${window.PERSONAL_DATA.socials.email}" style="color: var(--accent);">${window.PERSONAL_DATA.socials.email}</a><br>
        🐙 <a href="${window.PERSONAL_DATA.socials.github}" style="color: var(--accent);" target="_blank">GitHub</a><br>
        `;
    },
    whoami: () => {
        return window.PERSONAL_DATA.name + ' — ' + window.PERSONAL_DATA.title + '<br>';
    },
    date: () => {
        return new Date().toLocaleString() + '<br>';
    },
    clear: () => {
        output.innerHTML = '';
        return null;
    },
    theme: (args) => {
        const themes = ['neon', 'amber', 'matrix', 'solarized'];
        if (args && themes.includes(args)) {
            document.documentElement.setAttribute('data-theme', args);
            return `Theme changed to ${args}!<br>`;
        }
        return `Usage: theme [${themes.join(' | ')}]<br>`;
    },
    sudo: () => {
        return `Nice try! 😏 Permission denied.<br>`;
    },
    secret: () => {
        return `🎉 FunFact:I judge developer setups by two things: clean terminal prompts and whether they choose YouTube Music over Spotify.😅!<br>`;
    },
    exit: () => {
        return `This is a portfolio, you can't exit. 😄<br>`;
    },
    unknown: (cmd) => {
        return `<span style="color: #ff004d;">command not found: ${cmd}</span><br>Type <span style="color: var(--accent);">help</span> for available commands.<br>`;
    }
};

// ===== COMMAND HANDLER =====
function processCommand(input) {
    const parts = input.trim().toLowerCase().split(/\s+/);
    const cmd = parts[0];
    const args = parts.slice(1).join(' ');

    appendCommand(input);

    if (commands[cmd]) {
        const result = commands[cmd](args);
        if (result) appendOutput(result);
    } else {
        appendOutput(commands.unknown(cmd));
    }
}

// ===== EVENT LISTENERS =====
commandLine.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && isBootComplete) {
        const input = commandLine.value.trim();
        if (input) {
            processCommand(input);
            commandLine.value = '';
        }
    }
});

// Initialize
initMatrixRain();
bootSequence();
