(function() {
    const $root = document.querySelector("#root");

    const $cardsWrapper = createCardsWrapper();
    const createMemoryCard = memoryCard.new();

    const $memoryCard = createMemoryCard({
        src: "images/icon-collabcode.svg",
        alt: "Gueio - mascote da CollabCode"
    });
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

    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhone);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhone);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCpp);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCpp);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
})();
