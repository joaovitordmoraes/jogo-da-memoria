(function() {
    const $root = document.querySelector("#root");

    $root.insertAdjacentHTML(
        "beforeend",
        flatButton.render({
            text: "Login",
            status: "-active"
        })
    );
    $root.insertAdjacentHTML(
        "beforeend",
        flatButton.render({
            text: "Signup"
        })
    );
})();
