const layerStart = (function() {
    const module = {};

    module.handleClick = $component => {
        $component.remove();
    };

    module.render = content => {
        const $gameOverlay = gameOverlay.render();
        const $gameButton = gameButton.render(content);

        return `
            <div class="layer-start" onClick="layerStart.handleClick(this)">
                ${$gameOverlay}
                ${$gameButton}
            </div>
        `;
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    };
})();
