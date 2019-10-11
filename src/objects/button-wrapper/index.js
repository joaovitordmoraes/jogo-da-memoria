const buttonWrapper = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .button-wrapper {
                padding: 0 20px;
            }
        `;

        $head.insertBefore($style, null);
    };

    module._children = () => {
        const $returnButton = buttonCollabCode.render({
            content: "Logout",
            path: "login"
        });

        return `
            ${$returnButton}
        `;
    };

    module.render = () => {
        module._style();

        return `<div class="button-wrapper">${module._children()}</div>`;
    };

    return {
        render: module.render
    };
})();
