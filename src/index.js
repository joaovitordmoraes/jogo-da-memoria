
const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCardUp = document.createElement("article");
const $iconDown = `
    <img 
        src="images/icon-collabcode.svg" 
        alt="Gueio - mascote da CollabCode" 
        class="icon turn_down"
    />
`;
const $iconUp = `
    <img
        src="images/icon-js.png" 
        alt="Ícone de um livro de Javascript" 
        class="icon"
    />
`

$memoryCard.classList.add("memory_card");
$root.insertBefore($memoryCard, null);
$memoryCard.insertAdjacentHTML("afterbegin", $iconDown);

$memoryCardUp.classList.add("memory_card", "turn_up");
$root.insertBefore($memoryCardUp, null);
$memoryCardUp.insertAdjacentHTML("afterbegin", $iconUp);