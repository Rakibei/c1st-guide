const searchInput = document.getElementById("guide-search");
const guideCards = document.querySelectorAll(".option-card");
const noResults = document.getElementById("no-search-results");

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value
        .trim()
        .toLocaleLowerCase("da-DK");

    let visibleCards = 0;

    guideCards.forEach(card => {
        const cardText = card.textContent
            .toLocaleLowerCase("da-DK");

        const matches = cardText.includes(searchTerm);

        card.hidden = !matches;

        if (matches) {
            visibleCards++;
        }
    });

    noResults.hidden = visibleCards > 0;
});