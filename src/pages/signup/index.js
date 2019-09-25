(function() {
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render({
        text: "Login"
    });
    const $signupButton = flatButton.render({
        text: "Signup",
        active: true
    });

    const $logoCollab = logoCollabCode.render();

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $logoCollab);
})();
