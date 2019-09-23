const flatButton = (function() {
    const module = {};

    module._id = 0;

    module._style = active => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .flat-button-${module._id} {
                background-color: ${active ? "#f25a70" : "#eae6da"};
                font-size: 24px;
                font-weight: bold;
                color: ${active ? "#ffffff" : "#fffcee"};
                text-transform: uppercase;
                width: 50%;
                height: 176px;
                float: left;
            }

            .flat-button.-active {
                background-color: #f25a70;
                color: #ffffff;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.render = ({ text = "Sem parâmetro", active = false }) => {
        module._id++;
        module._style(active);

        return `
            <button class="flat-button-${module._id}">${text}</button>
        `;
    };

    return {
        render: module.render
    };
})();
