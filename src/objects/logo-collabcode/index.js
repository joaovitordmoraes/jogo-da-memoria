const logoCollabCode = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .logo-collabcode {
                background-color: #ffffff;
                padding: 40px 40px 30px 40px;
                border-radius: 50%;
                display: inline-block;
            }

            .logo-collabcode > .icon {
                max-width: 171px;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.render = () => {
        module._style();

        return `
            <div class="logo-collabcode">
                <img src="images/icon-collabcode.svg" alt="Ícone do Gueio, o mascote da Collab Code" class="icon">
            </div>
        `;
    };

    return {
        render: module.render
    };
})();
