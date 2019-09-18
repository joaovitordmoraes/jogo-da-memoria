const layerStart = (function() {
    const module = {};

    module.handleClick = $component => {
        const $children = $component.querySelectorAll("*");

        $children.forEach($item => {
            $item.classList.add("-animation");
        });
    };

    module.handleTransitionEnd = (event, $component) => {
        if (event.target.classList.contains("game-overlay")) {
            $component.remove();
        }
    };

    module.render = content => {
        const $gameOverlay = gameOverlay.render();
        const $gameButton = gameButton.render(content);

        return `
            <div class="layer-start" onClick="layerStart.handleClick(this)" onTransitionEnd="layerStart.handleTransitionEnd(event, this)">
                ${$gameOverlay}
                ${$gameButton}
            </div>
        `;
    };

    return {
        render: module.render,
        handleClick: module.handleClick,
        handleTransitionEnd: module.handleTransitionEnd
    };
})();
