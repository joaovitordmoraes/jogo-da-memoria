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

    const $logoWrapper = logoWrapper.render($logoCollab);

    console.log($logoWrapper);

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $titleCollab);
})();
