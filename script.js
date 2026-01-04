// 1. Année Auto
document.getElementById("year").textContent = new Date().getFullYear();

// 2. Projets Dynamiques
const projects = [
  { title: "Cyber Café", desc: "Gestion de temps et facturation.", tech: ["PHP", "MySQL"], img:"cyber.png" },
  { title: "E-commerce", desc: "Boutique en ligne moderne.", tech: ["JS", "CSS"], img:"itstore.jpeg" },
  { title: "Portfolio", desc: "Le site que vous voyez ici.", tech: ["HTML", "JS"], img:"porfoglio.png" }
];

const grid = document.getElementById("projectsGrid");
projects.forEach(p => {
    grid.innerHTML += `
    <div class="project-card">
        <img src="${p.img}">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="tech-list">${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>`;
});

// 3. Effet Matrix
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f97316";
    ctx.font = fontSize + "px monospace";
    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}
setInterval(draw, 50);
