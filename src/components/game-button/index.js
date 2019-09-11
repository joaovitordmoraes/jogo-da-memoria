const gameButton = (function() {
    const module = {};

    module.create = () => {
        return `
            <button class="game-button">
                Iniciar Jogo
            </button>
        `;
    };

    return {
        create: module.create
    };
})();
