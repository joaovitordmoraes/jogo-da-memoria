const labelCollab = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .label-collabcode {
                font-family: 'Comfortaa', sans-serif;
                font-size: 16px;
                color: #3a4042;
                opacity: .5;
                display: block;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.render = content => {
        module._style();

        return `
            <label class="label-collabcode">${content}</label>
        `;
    };

    return {
        render: module.render
    };
})();
