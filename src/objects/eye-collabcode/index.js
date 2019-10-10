const eyeCollabcode = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .eye-collabcode {
                display: block;
                text-indent: -9999px;
                background-image: url('/images/eye-hidden.png');
                background-repeat: no-repeat;
                height: 15px;
                width: 23px;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.render = () => {
        module._style();

        return `<label class="eye-collabcode">Mostrar senha</label>`;
    };

    return {
        render: module.render
    };
})();
