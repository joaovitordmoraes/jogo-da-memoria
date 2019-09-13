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
            }

            .game-overlay.-animation {
                animation: hideBtn 1000ms ease;
                animation-delay: 500ms;
            }

            .game-overlay.-hide {
                display: none;
            }

            @-webkit-keyframes hideOverlay {
                0% {
                    opacity: 0.7;
                }
                100% {
                    opacity: 0;
                }
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
