/* ---------------------------------------------------------
   MILITANT, CINEMATIC FLOAT ENGINE (NO PAGE LOGIC)
--------------------------------------------------------- */

/* Candy Rain */
function spawnCandy() {
    const candyRain = document.getElementById("candyRain");
    if (!candyRain) return;

    const el = document.createElement("div");
    el.className = "falling";
    el.textContent = "🍬";
    el.style.left = Math.random() * 100 + "vw";

    candyRain.appendChild(el);
    setTimeout(() => el.remove(), 5000);
}

/* Floating Bears + Flowers */
function spawnFloat() {
    const floatingItems = document.getElementById("floatingItems");
    if (!floatingItems) return;

    const icons = ["🧸", "🌸", "💐"];
    const el = document.createElement("div");

    el.className = "falling";
    el.textContent = icons[Math.floor(Math.random() * icons.length)];
    el.style.left = Math.random() * 100 + "vw";

    floatingItems.appendChild(el);
    setTimeout(() => el.remove(), 5000);
}

/* Run animations forever */
setInterval(spawnCandy, 1200);
setInterval(spawnFloat, 1600);
