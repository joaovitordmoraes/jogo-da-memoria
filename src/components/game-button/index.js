const gameButton = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .game-button {
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 4;
                border: 4px solid #575555;
                height: 120px;
                width: 120px;
                border-radius: 100%;
                box-shadow: 0 0 40px 0 #000;
                background-color: #3a4042;
                color: #fff;
                text-transform: uppercase;
                font-family: 'Comfortaa', sans-serif;
                font-weight: bold;
                cursor: pointer;
            }

            .game-button.-hide {
                display: none;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.render = () => {
        module._style();
        return `
            <button class="game-button" onClick="gameButton.handleClick(this)">
                Start
            </button>
        `;
    };

    module.handleClick = $component => {
        const $overlay = document.querySelector(".overlay");
        $overlay.classList.add("-hide");
        $component.classList.add("-hide");
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    };
})();
