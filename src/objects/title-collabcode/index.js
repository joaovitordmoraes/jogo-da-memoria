const titleCollabCode = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .title-collabcode {
                text-align: center;
                text-transform: uppercase;
                font-size: 24px;
                font-weight: bold;
                color: #f25a70;
                letter-spacing: 0.5px;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.render = (text = "Parâmetro não passado") => {
        module._style();

        return `
            <h1 class="title-collabcode">${text}</h1>
        `;
    };

    return {
        render: module.render
    };
})();
