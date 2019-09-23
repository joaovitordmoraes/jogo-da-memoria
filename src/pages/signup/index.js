(function() {
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render({
        text: "Login"
    });
    const $signupButton = flatButton.render({
        text: "Signup",
        active: true
    });

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
})();
