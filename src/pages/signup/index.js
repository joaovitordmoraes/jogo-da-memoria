(function() {
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render({
        text: "Login",
        active: false
    });
    const $signupButton = flatButton.render({
        text: "Signup",
        active: true
    });

    const $logoCollab = logoCollabCode.render();
    const $titleCollab = titleCollabCode.render("Welcome!");

    const $logoWrapper = logoWrapper.render($logoCollab, $titleCollab);

    const $labelUserCollab = labelCollab.render("Username");
    const $inputUserCollab = inputCollabcode.render("text");

    const $labelEmailCollab = labelCollab.render("E-mail");
    const $inputEmailCollab = inputCollabcode.render("email");

    const $labelPasswordCollab = labelCollab.render("Password");
    const $inputPasswordCollab = inputCollabcode.render("password");

    const $labelConfirmPasswordCollab = labelCollab.render("Confirm password");
    const $inputConfirmPasswordCollab = inputCollabcode.render("password");

    const $buttonCollab = buttonCollabCode.render("Submit");

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $labelUserCollab);
    $root.insertAdjacentHTML("beforeend", $inputUserCollab);
    $root.insertAdjacentHTML("beforeend", $labelEmailCollab);
    $root.insertAdjacentHTML("beforeend", $inputEmailCollab);
    $root.insertAdjacentHTML("beforeend", $labelPasswordCollab);
    $root.insertAdjacentHTML("beforeend", $inputPasswordCollab);
    $root.insertAdjacentHTML("beforeend", $labelConfirmPasswordCollab);
    $root.insertAdjacentHTML("beforeend", $inputConfirmPasswordCollab);
    $root.insertAdjacentHTML("beforeend", $buttonCollab);
})();
