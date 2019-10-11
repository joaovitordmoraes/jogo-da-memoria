const game = function() {
    const $root = document.querySelector("#root");

    const $cardsWrapper = createCardsWrapper();
    const createMemoryCard = memoryCard.create();
    const $layerStart = layerStart.render("Start");

    const $pointBar = pointBar.create();
    const $buttonWrapper = buttonWrapper.render();

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
    $root.insertAdjacentHTML("afterbegin", $layerStart);

    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhone);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhone);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCpp);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCpp);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
    $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);

    $root.insertAdjacentHTML("beforeend", $buttonWrapper);
};
