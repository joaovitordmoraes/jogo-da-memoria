const gameButton = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .game-button {
                position: fixed;
                bottom: 50%;
                left: 50%;
                transform: translate(-50%, 0);
                z-index: 2;
                border: 4px solid #575555;
                height: 120px;
                width: 120px;
                border-radius: 100%;
                box-shadow: 0 0 40px 0 #000;
                background-color: #3a4042;
                color: #fff;
                font-family: 'Comfortaa', sans-serif;
                font-weight: bold;
                cursor: pointer;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.create = () => {
        module._style();
        return `
            <button class="game-button">
                Iniciar Jogo
            </button>
        `;
    };

    return {
        create: module.create
    };
})();
