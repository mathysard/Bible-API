const copyrightElement = document.getElementById("copyright");
const form = document.getElementById("bible-form");
const verseOutput = document.getElementById("verseOutput");
const date = new Date();

copyrightElement.textContent = `© 2024 — ${date.getFullYear()}.`;

form.addEventListener("submit", async function(event) {
    event.preventDefault();
    const book = document.getElementById("book").value;
    const chapter = document.getElementById("chapter").value;
    const verse = document.getElementById("verse").value;

    const api = `https://bible-api.com/${book}%20${chapter}:${verse}`;
    const response = await fetch(api);
    const data = response.ok ? await response.json() : null;

    if (data && data.text) {
        verseOutput.innerHTML = `<strong>${book} — ${chapter}:${verse}</strong> : ` + data.text;
    } else {
        verseOutput.innerHTML = "<strong>Erreur ! </strong>Soit le verset n'existe pas, soit vous rencontrez une erreur. Veuillez réessayer."
    }
});