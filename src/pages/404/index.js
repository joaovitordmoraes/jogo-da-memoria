const status404 = function() {
    const $root = document.querySelector("#root");

    $root.insertAdjacentHTML("beforeend", `<h1>Página não encontrada</h1>`);
};
