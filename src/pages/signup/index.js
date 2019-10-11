const signup = function() {
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render({
        text: "Login",
        active: false,
        path: "login"
    });
    const $signupButton = flatButton.render({
        text: "Signup",
        active: true,
        path: "signup"
    });

    const $logoCollab = logoCollabCode.render();
    const $titleCollab = titleCollabCode.render("Welcome!");

    const $logoWrapper = logoWrapper.render($logoCollab, $titleCollab);

    const $formSignup = formSignup.render();

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $formSignup);
};
