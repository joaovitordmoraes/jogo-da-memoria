function createCardsWrapper() {
    const $cardsWrapper = document.createElement("section");
    $cardsWrapper.classList.add("cards-wrapper");

    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
        .cards-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-top: 10px;
            width: 100%;
        }
        
        .cards-wrapper > .memory_card {
            margin-bottom: 10px;
        }
    `;

    $head.insertBefore($style, null);

    $cardsWrapper.addEventListener("click", () => {
        store.counterMemoryCard = document.querySelectorAll(".memory_card.-active").length;
    });

    return $cardsWrapper;
}
