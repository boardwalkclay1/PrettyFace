/* ---------------------------------------------------------
   FLOATING CANDY + BEARS (unchanged)
--------------------------------------------------------- */

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

setInterval(spawnCandy, 1200);
setInterval(spawnFloat, 1600);


/* ---------------------------------------------------------
   PAGE FLOAT + FADE ENGINE
--------------------------------------------------------- */

window.addEventListener("DOMContentLoaded", () => {
    const page = document.querySelector(".page");
    const nextBtn = document.getElementById("nextBtn");

    // FLOAT + FADE IN
    setTimeout(() => {
        page.classList.add("page-in");
    }, 50);

    // FLOAT + FADE OUT on Next Page click
    if (nextBtn) {
        nextBtn.addEventListener("click", (e) => {
            e.preventDefault(); // stop instant navigation

            page.classList.remove("page-in");
            page.classList.add("page-out");

            setTimeout(() => {
                window.location.href = nextBtn.href;
            }, 900); // matches CSS timing
        });
    }
});
