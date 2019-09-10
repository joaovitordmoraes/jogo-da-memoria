const pointBar = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");
        $style.textContent = `
            .point-bar {
                background-color: #f25a70;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.create = () => {
        module._style();

        return `
            <header class="point-bar">
                <span>0</span>
            </header>
        `;
    };

    return {
        create: module.create
    };
})();
