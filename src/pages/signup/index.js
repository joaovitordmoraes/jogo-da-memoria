(function() {
    const $root = document.querySelector("#root");

    $root.insertAdjacentHTML("beforeend", flatButton.render("Login"));
    $root.insertAdjacentHTML("beforeend", flatButton.render("Signup"));
})();
