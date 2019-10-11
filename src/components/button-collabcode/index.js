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
                cursor: pointer;
            }

            .input-collabcode + .button-collabcode {
                margin-top: 45px;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.handleClick = (event, path) => {
        event.preventDefault();
        window.location.hash = `#/${path}`;
    };

    module.render = ({ content = "Parâmetro não passado", path = "" }) => {
        module._style();

        return `<button 
                        type="submit" 
                        class="button-collabcode"
                        onclick="buttonCollabCode.handleClick(event, '${path}');"
                        >${content}</button>`;
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    };
})();
