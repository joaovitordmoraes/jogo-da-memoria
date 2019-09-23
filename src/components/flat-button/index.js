const flatButton = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .flat-button {
                background-color: #eae6da;
                font-size: 24px;
                font-weight: bold;
                color: #fffcee;
                text-transform: uppercase;
                width: 50%;
                height: 176px;
                float: left;
            }

            .flat-button.-active {
                background-color: #f25a70;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.render = ({ text, status }) => {
        module._style();

        return `
            <button class="flat-button ${status}">${text}</button>
        `;
    };

    return {
        render: module.render
    };
})();
