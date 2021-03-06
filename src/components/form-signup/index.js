const formSignup = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .form-signup {
                float: left;
                padding: 0 35px 40px 35px;
            }
        `;

        $head.insertBefore($style, null);
    };

    module._children = () => {
        const $labelUserCollab = labelCollab.render("Username");
        const $inputUserCollab = inputCollabcode.render({
            placeholder: "Lorem Ipsum"
        });

        const $labelEmailCollab = labelCollab.render("E-mail");
        const $inputEmailCollab = inputCollabcode.render({
            type: "email",
            placeholder: "example@email.com"
        });

        const $labelPasswordCollab = labelCollab.render("Password");
        const $inputPasswordCollab = inputCollabcode.render({
            type: "password",
            placeholder: "******"
        });

        const $labelConfirmPasswordCollab = labelCollab.render("Confirm password");
        const $inputConfirmPasswordCollab = inputCollabcode.render({
            type: "password",
            placeholder: "******"
        });

        const $buttonCollab = buttonCollabCode.render({
            content: "Submit",
            path: "login"
        });

        return `
            ${$labelUserCollab}
            ${$inputUserCollab}
            ${$labelEmailCollab}
            ${$inputEmailCollab}
            ${$labelPasswordCollab}
            ${$inputPasswordCollab}
            ${$labelConfirmPasswordCollab}
            ${$inputConfirmPasswordCollab}
            ${$buttonCollab}
        `;
    };

    module.render = () => {
        module._style();
        return `<form class="form-signup" action="" method="POST">${module._children()}</form>`;
    };

    return {
        render: module.render
    };
})();
