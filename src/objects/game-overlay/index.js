const gameOverlay = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .game-overlay {
                background-color: rgba(0, 0, 0, 0.7);
                position: absolute;
                width: 100vw;
                height: 100vh;
                z-index: 3;
                transition: opacity 300ms 300ms ease-out;
            }

            .game-overlay.-animation {
                opacity: 0;
            }

            .game-overlay.-hide {
                display: none;
            }
    `;

        $head.insertBefore($style, null);
    };

    module.render = () => {
        module._style();
        return `
            <div class="game-overlay"></div>
        `;
    };

    return {
        render: module.render
    };
})();
