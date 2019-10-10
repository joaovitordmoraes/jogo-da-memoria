const forgetPassword = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .forget-password {
                font-size: 14px;
                color: rgba(58,64,66,.5);
                text-decoration: none;
                width: 100%;
                display: block;
                margin: 40px 0 60px 0;
                text-align: right;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.render = ({ content, href = "#" }) => {
        module._style();

        return `<a href="${href}" class="forget-password">${content}</a>`;
    };

    return {
        render: module.render
    };
})();
