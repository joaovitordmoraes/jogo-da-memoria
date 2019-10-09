const buttonCollabCode = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .button-collabcode {
                background-color: #f25a70;
                border-radius: 24px;
                height: 48px;
                width: 100%;
                font-size: 14px;
                color: #ffffff;
                letter-spacing: 0.34px;
                text-transform: uppercase;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.render = (content = "Parâmetro não passado") => {
        module._style();

        return `<button class="button-collabcode">${content}</button>`;
    };

    return {
        render: module.render
    };
})();
