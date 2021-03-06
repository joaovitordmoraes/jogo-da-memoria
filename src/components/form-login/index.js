const formLogin = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .form-login {
                float: left;
                padding: 0 35px 40px 35px;
                position: relative;
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
            placeholder: "******",
            id: "password"
        });

        const $eyeCollab = eyeCollabcode.render({
            attrFor: "password"
        });

        const $forgetPassword = forgetPassword.render({
            content: "Forget password?"
        });

        const $buttonCollab = buttonCollabCode.render({
            content: "Login",
            path: "game"
        });

        return `
            ${$labelUserCollab}
            ${$inputUserCollab}
            ${$labelPasswordCollab}
            ${$inputPasswordCollab}
            ${$eyeCollab}
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
