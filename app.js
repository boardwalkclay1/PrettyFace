const poemPages = [
    "Page 1 — I saw you at the Nomad store, quiet but glowing, like you carried your own light.",
    "Page 2 — Not loud, not trying, just existing in a way that made the room feel softer.",
    "Page 3 — Your face wasn’t just pretty — it was calm, confident, and unbothered.",
    "Page 4 — The kind of pretty that doesn’t ask for attention, but earns it anyway.",
    "Page 5 — The kind of pretty that makes people rethink what they thought beauty was.",
    "Page 6 — I watched how you moved, how you worked, how you didn’t force anything.",
    "Page 7 — You had presence. Not performance. Presence.",
    "Page 8 — And I wondered if you knew how rare that is.",
    "Page 9 — I wondered if anyone ever told you that you change the energy of a room.",
    "Page 10 — And if no one has… this app exists to say it: you’re unforgettable."
];

let currentPage = 0;

const poemText = document.getElementById("poemText");
const nextBtn = document.getElementById("nextBtn");

function showPage() {
    poemText.style.opacity = 0;
    setTimeout(() => {
        poemText.textContent = poemPages[currentPage];
        poemText.style.opacity = 1;
    }, 300);
}

nextBtn.addEventListener("click", () => {
    currentPage++;
    if (currentPage >= poemPages.length) {
        currentPage = 0;
    }
    showPage();
});

showPage();
