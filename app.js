/* ---------------------------------------------------------
   POEM ENGINE — CINEMATIC EDITION
   Smooth fades, layered particles, floating emojis,
   candy rain, soft pulses, and a magical final flower.
--------------------------------------------------------- */

const poemPages = [
    "She stood there at the Nomad counter, calm like she’d already figured out the world. Her presence didn’t ask for attention; it simply earned it. Even the air around her felt softer.",
    "Her pretty face wasn’t loud or dramatic — it was gentle, like a quiet sunrise. The kind of beauty that doesn’t try to impress anyone. It just exists, and somehow that’s enough.",
    "She moved with a rhythm that didn’t rush or force anything. Every gesture felt intentional without being heavy. It made people slow down without realizing why.",
    "Her eyes carried a calm confidence, like she trusted herself even on the busiest days. There was warmth in the way she looked at the world. It made the store feel less like a store and more like a moment.",
    "Her smile wasn’t something she threw around — it was something she gave. And when she did, it felt like the room brightened a little. Not dramatically, just enough to notice.",
    "She had a softness that didn’t make her fragile. It made her real, grounded, and steady. The kind of softness people remember.",
    "Her presence wasn’t about looks alone; it was the energy she carried. A quiet strength wrapped in gentleness. A balance most people never learn.",
    "She didn’t need to speak loudly to be heard. Her calmness did the talking for her. And somehow, that said more than words.",
    "She made ordinary moments feel a little more meaningful. Not because she tried — but because she was simply herself. And that was enough to shift the whole atmosphere.",
    "If she ever wondered whether anyone noticed her light, this app exists to say yes. Not in a dramatic way, but in a sincere one. She’s unforgettable in the quietest, sweetest way."
];

let currentPage = 0;

const poemText = document.getElementById("poemText");
const nextBtn = document.getElementById("nextBtn");
const candyRain = document.getElementById("candyRain");
const floatingItems = document.getElementById("floatingItems");
const finalFlower = document.getElementById("finalFlower");

/* ---------------------------------------------------------
   PAGE TRANSITION
   Smooth fade-out → text swap → soft fade-in
   + particle burst for emotional punctuation
--------------------------------------------------------- */
function showPage() {
    poemText.classList.add("fadeOut");

    setTimeout(() => {
        poemText.textContent = poemPages[currentPage];
        poemText.classList.remove("fadeOut");
        poemText.classList.add("fadeIn");

        // Particles for emotional resonance
        dropCandy();
        floatItem();
        pulseText();
    }, 350);
}

/* ---------------------------------------------------------
   TEXT PULSE — gentle breathing effect
--------------------------------------------------------- */
function pulseText() {
    poemText.classList.add("pulse");
    setTimeout(() => poemText.classList.remove("pulse"), 1200);
}

/* ---------------------------------------------------------
   CANDY RAIN — smoother, layered, randomized
--------------------------------------------------------- */
function dropCandy() {
    const candy = document.createElement("div");
    candy.classList.add("candyDrop");
    candy.textContent = "🍬";

    candy.style.left = Math.random() * 100 + "vw";
    candy.style.fontSize = (1.2 + Math.random() * 1.5) + "rem";
    candy.style.animationDuration = (3 + Math.random() * 2) + "s";

    candyRain.appendChild(candy);
    setTimeout(() => candy.remove(), 6000);
}

/* ---------------------------------------------------------
   FLOATING ITEMS — teddy, flowers, bouquets
   Now with drift + fade + scale animation
--------------------------------------------------------- */
function floatItem() {
    const items = ["🧸", "🌸", "💐"];
    const el = document.createElement("div");

    el.classList.add("floatItem");
    el.textContent = items[Math.floor(Math.random() * items.length)];

    el.style.left = Math.random() * 80 + "vw";
    el.style.fontSize = (1.5 + Math.random() * 1.5) + "rem";

    floatingItems.appendChild(el);
    setTimeout(() => el.remove(), 3500);
}

/* ---------------------------------------------------------
   NEXT BUTTON LOGIC
--------------------------------------------------------- */
nextBtn.addEventListener("click", () => {
    currentPage++;

    if (currentPage >= poemPages.length) {
        nextBtn.classList.add("fadeOut");
        setTimeout(() => nextBtn.style.display = "none", 400);

        finalFlower.classList.remove("hidden");
        finalFlower.classList.add("revealFlower");
    } else {
        showPage();
    }
});

/* Start the experience */
showPage();
