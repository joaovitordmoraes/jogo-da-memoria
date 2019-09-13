(function() {
    const $root = document.querySelector("#root");

    const $cardsWrapper = createCardsWrapper();
    const $overlay = gameOverlay.render();
    const createMemoryCard = memoryCard.create();

    const $pointBar = pointBar.create();

    const $gameButton = gameButton.render();

    const $memoryCardJs = createMemoryCard({
        src: "images/icon-js.png",
        alt: "Ícone de um livro de JavaScript"
    });
    const $memoryCardCpp = createMemoryCard({
        src: "images/icon-cpp.png",
        alt: "Ícone de um livro de C++"
    });
    const $memoryCardPhp = createMemoryCard({
        src: "images/icon-php.png",
        alt: "Ícone de um livro de PHP"
    });
    const $memoryCardPhone = createMemoryCard({
        src: "images/icon-celular.png",
        alt: "Ícone de um celular"
    });

    $root.insertAdjacentElement("beforeend", $cardsWrapper);
    $root.insertAdjacentHTML("afterbegin", $pointBar);
    $root.insertAdjacentHTML("afterbegin", $overlay);
    $root.insertAdjacentHTML("beforeend", $gameButton);

    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhone);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhone);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCpp);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCpp);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
})();
