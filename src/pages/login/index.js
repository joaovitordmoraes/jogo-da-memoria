(function() {
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render({
        text: "Login",
        active: true
    });
    const $signupButton = flatButton.render({
        text: "Signup",
        active: false
    });

    const $logoCollab = logoCollabCode.render();
    const $titleCollab = titleCollabCode.render("Hello!");

    const $logoWrapper = logoWrapper.render($logoCollab, $titleCollab);

    const $formLogin = formLogin.render();

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $formLogin);
})();
