const forgetPassword = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .forget-password {
                font-size: 14px;
                color: rgba(58,64,66,.5);
                text-align: right;
                text-decoration: none;
                width: 100%;
                display: inline-block;
            }

            .input-collabcode + .forget-password {
                margin: 40px 0 110px 0;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.render = ({ content, href }) => {
        module._style();

        return `<a href="${href}" class="forget-password">${content}</a>`;
    };

    return {
        render: module.render
    };
})();
