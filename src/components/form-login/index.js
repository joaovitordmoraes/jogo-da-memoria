const formLogin = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .form-login {
                float: left;
                padding: 0 35px 40px 35px;
            }
        `;

        $head.insertBefore($style, null);
    };

    module._children = () => {
        const $labelUserCollab = labelCollab.render("Username ou e-mail");
        const $inputUserCollab = inputCollabcode.render({
            placeholder: "username"
        });

        const $labelPasswordCollab = labelCollab.render("Password");
        const $inputPasswordCollab = inputCollabcode.render({
            type: "password",
            placeholder: "******"
        });

        const $forgetPassword = forgetPassword.render({
            content: "Forget password?"
        });

        const $buttonCollab = buttonCollabCode.render("Login");

        return `
            ${$labelUserCollab}
            ${$inputUserCollab}
            ${$labelPasswordCollab}
            ${$inputPasswordCollab}
            ${$forgetPassword}
            ${$buttonCollab}
        `;
    };

    module.render = () => {
        module._style();
        return `<form class="form-login" action="" method="POST">${module._children()}</form>`;
    };

    return {
        render: module.render
    };
})();
