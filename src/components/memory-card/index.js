function createMemoryCard () {
    const $memoryCard = document.createElement("article");

    const $iconDown = `
        <img 
            src="images/icon-collabcode.svg" 
            alt="Gueio - mascote da CollabCode" 
            class="icon turn_down"
        />
    `;

    $memoryCard.classList.add("memory_card");
    $wrapCards.insertBefore($memoryCard, null);
    $memoryCard.insertAdjacentHTML("afterbegin", $iconDown);
}

function createMemoryCardUp () {
    const $memoryCardUp = document.createElement("article");

    const $iconJs = `
        <img
            src="images/icon-js.png" 
            alt="Ícone de um livro de Javascript" 
            class="icon"
        />
    `;

    $memoryCardUp.classList.add("memory_card", "turn_up");
    $wrapCards.insertBefore($memoryCardUp, null);
    $memoryCardUp.insertAdjacentHTML("afterbegin", $iconJs);
}