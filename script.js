const emojiBg = document.getElementById("emoji-bg");

const projectsBtn = document.getElementById("projects");
const notesBtn = document.getElementById("notes");

// Emoji sets
const emojiSets = {
    projects: ["💻", "🖥️", "🔧", "⚙️", "📡"],
    notes: ["📝", "📓", "📚", "✏️", "📖"]
};

// Generate emojis across screen
function generateEmojis(type) {
    emojiBg.innerHTML = "";

    const emojis = emojiSets[type];

    const rows = 10;
    const cols = 12;

    const size = 60; // spacing between emojis (tweak this)
    let index = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            const span = document.createElement("span");
            span.classList.add("emoji");

            span.textContent = emojis[Math.floor(Math.random() * emojis.length)];

            // 🧠 HEX OFFSET LOGIC
            const offsetX = (row % 2 === 0) ? 0 : size / 2;

            const x = col * size + offsetX;
            const y = row * (size * 0.75); // vertical compression for hex look

            span.style.left = `${x}px`;
            span.style.top = `${y}px`;

            // iOS stagger animation
            span.style.animationDelay = `${index * 0.01}s`;

            emojiBg.appendChild(span);
            index++;
        }
    }

    document.body.classList.add("show-emojis");
}

// Clear emojis
function clearEmojis() {
    emojiBg.innerHTML = "";
    document.body.classList.remove("show-emojis");
}

// Event listeners
projectsBtn.addEventListener("mouseenter", () => generateEmojis("projects"));
projectsBtn.addEventListener("mouseleave", clearEmojis);

notesBtn.addEventListener("mouseenter", () => generateEmojis("notes"));
notesBtn.addEventListener("mouseleave", clearEmojis);