const logoCollabCode = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .logo-collabcode {
                background-color: #ffffff;
                display: inline-block;
                border: 35px solid #ffffff;
                border-radius: 50%;
            }

            .logo-collabcode > .logo {
                width: 130px;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.render = () => {
        module._style();

        return `
            <figure class="logo-collabcode">
                <img src="images/icon-collabcode.svg" alt="Ícone do Gueio, o mascote da Collab Code" class="logo">
            </figure>
        `;
    };

    return {
        render: module.render
    };
})();
