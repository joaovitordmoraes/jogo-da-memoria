function gameOverlay() {
    const $overlay = document.createElement("div");
    $overlay.classList.add("overlay");

    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .overlay {
            background-color: rgba(0, 0, 0, 0.7);
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 3;
        }

        .overlay.-hide {
            display: none;
        }
    `;

    $head.insertBefore($style, null);

    return $overlay;
}
