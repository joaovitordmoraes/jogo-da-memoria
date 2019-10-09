const inputCollabcode = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .input-collabcode {
                border-bottom: 1px solid rgba(58,64,66,.5);
                font-size: 18px;
                font-weight: bold;
                font-family: 'Comfortaa', sans-serif;
                padding: 12px 0;
                width: 100%;
            }

            .input-collabcode + .label-collabcode {
                margin-top: 28px;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.render = (content, placecholder = "") => {
        module._style();

        return `<input class="input-collabcode" type="${content}" placeholder="${placecholder}" />`;
    };

    return {
        render: module.render
    };
})();
