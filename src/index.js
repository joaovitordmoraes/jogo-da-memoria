
const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
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
        alt="Javascript" 
        class="icon"
    />
`

$memoryCard.classList.add("memory_card", "turn_down");

$root.insertBefore($memoryCard, null);

$memoryCard.insertAdjacentHTML("afterbegin", $iconDown);

// $memoryCard.classList.add("memory_card", "turn_up");

