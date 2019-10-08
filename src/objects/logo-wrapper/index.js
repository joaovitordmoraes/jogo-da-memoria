const logoWrapper = (function() {
    const module = {};

    module._style = () => {};

    module.render = $children => {
        return `<div class="logo-wrapper">${$children}</div>`;
    };

    return {
        render: module.render
    };
})();
