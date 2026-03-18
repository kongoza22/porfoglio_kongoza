// 1. MISE À JOUR DE L'ANNÉE AUTO
document.getElementById("year").textContent = new Date().getFullYear();

// 2. BASE DE DONNÉES DES MISSIONS (PROJETS)
const missions = [
  { 
    title: "OPÉRATION SIGUISSO", 
    desc: "Réinsertion de 5000 artisans. Construction d'ateliers et plateforme digitale.", 
    tech: ["Leadership", "Social", "Abidjan"], 
    img: "siguisso.png" // Remplace par ton image
  },
  { 
    title: "BRANDING : BÉNIE SHOP", 
    desc: "Création d'identité visuelle complète et logotype moderne.", 
    tech: ["Design", "Illustrator", "Branding"], 
    img: "benie.png" 
  },
  { 
    title: "MELANIE INFRA SERVICES", 
    desc: "Refonte corporate et signalétique de direction générale.", 
    tech: ["BTP", "Design", "Signalétique"], 
    img: "melanie.png" 
  }
];

// 3. INJECTION DYNAMIQUE DANS LA GRILLE
const grid = document.getElementById("projectsGrid");
if (grid) {
    missions.forEach(m => {
        grid.innerHTML += `
        <div class="mission-card">
            <img src="${m.img}" alt="${m.title}" style="width:100%; height:180px; object-fit:cover; border-bottom: 1px solid #333;">
            <div style="padding:15px;">
                <h3 style="color:#f97316; margin-bottom:10px;">> ${m.title}</h3>
                <p style="font-size:0.9rem; margin-bottom:15px; min-height:60px;">${m.desc}</p>
                <div class="tech-tags">
                    ${m.tech.map(t => `<span class="tag" style="border:1px solid #f97316; color:#f97316; padding:2px 8px; font-size:0.7rem; margin-right:5px;">${t}</span>`).join('')}
                </div>
            </div>
        </div>`;
    });
}

// 4. EFFET MATRIX (ORANGE RADAR)
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const chars = "01ABCDEFHIJKLMNOPQRSTUVWXYZ0123456789#$+-";
const fontSize = 14;
let columns = canvas.width / fontSize;
let drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#f97316"; // Orange Radar
    ctx.font = fontSize + "px 'Share Tech Mono'";
    
    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(drawMatrix, 50);

// 5. EFFET DE CHARGEMENT "SÉQUENCE D'ENTRÉE"
window.addEventListener('load', () => {
    console.log("Système Sylla Sekou : Opérationnel.");
    // Tu peux ajouter ici une alerte ou un son si tu veux
});
