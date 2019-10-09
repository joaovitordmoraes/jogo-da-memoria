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

    const $labelCollab = labelCollab.render("E-mail");
    const $inputCollab = inputCollabcode.render();

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $labelCollab);
    $root.insertAdjacentHTML("beforeend", $inputCollab);
})();
