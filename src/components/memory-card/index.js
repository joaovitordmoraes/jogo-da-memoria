const createMemoryCard = ({src, alt, estado}) => `
    <article class="memory_card ${estado}" onClick="handleClick()">
        <img 
            src="${src}" 
            alt="${alt}" 
            class="icon"
        />
    </article>
`;

const $head = document.querySelector("head");
const $style = document.createElement("style");

$style.textContent = `
    .memory_card {
        background-color: #f25a70;
        height: 155px;
        width: 155px;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        position: relative;
        cursor: pointer;
    }

    .memory_card.-turn_up {
        background-color: #ffffff;
    }

    .memory_card > .icon {
        height: 100px;
        width: 100px;
        z-index: 2;
    }

    .memory_card.-turn_up > .icon {
        margin-top: -10px;
    }

    .memory_card.-turn_up::before {
        content: '';
        position: absolute;
        height: 94px;
        width: 94px;
        bottom: 22px;
        background-color: #d4d4d4;
        border-radius: 50%;
        z-index: 1;
    }
`

$head.insertBefore($style, null);

const handleClick = () => console.log("Clicado");