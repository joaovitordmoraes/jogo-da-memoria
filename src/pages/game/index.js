const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard({
    src: "images/icon-collabcode.svg", 
    alt: "Gueio - mascote da CollabCode"
});
const $memoryCardJs = createMemoryCard({
    estado: "-turn_up",
    src: "images/icon-js.png", 
    alt: "Ícone de um livro de JavaScript"
});
const $memoryCardCpp = createMemoryCard({
    estado: "-turn_up",
    src: "images/icon-cpp.png",
    alt: "Ícone de um livro de C++"
});
const $memoryCardPhp = createMemoryCard({
    estado: "-turn_up",
    src: "images/icon-php.png",
    alt: "Ícone de um livro de PHP"
});

$root.insertAdjacentElement("beforeend", $cardsWrapper);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJs);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCpp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardCpp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhp);