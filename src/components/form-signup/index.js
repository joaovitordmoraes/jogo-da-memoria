const formSignup = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .label-email {
                font-family: 'Comfortaa', sans-serif;
                font-size: 18px;
                color: #3a4042;
                opacity: .5;
            }

            .email {
                border: 0;
                border-bottom: 1px solid rgba(58,64,66, .5);
                padding: 12px 0;
                width: 90%;
                font-family: 'Comfortaa', sans-serif;
                font-size: 18px;
                color: #3a4042;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.render = () => {
        module._style();

        return `
            <label class="label-email" for="email">E-mail</label>
            <input class="email" type="email" id="email" />
        `;
    };

    return {
        render: module.render
    };
})();
