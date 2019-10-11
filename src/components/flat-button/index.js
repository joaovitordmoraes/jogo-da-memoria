const flatButton = (function() {
    const module = {};

    module._id = 0;

    module._style = active => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .flat-button-${module._id} {
                background-color: ${active ? "#f25a70" : "#eae6da"};
                font-size: 24px;
                font-weight: bold;
                color: ${active ? "#ffffff" : "#fffcee"};
                text-transform: uppercase;
                width: 50%;
                height: 176px;
                display: inline-block;
                box-sizing: border-box;
                text-align: center;
                padding-top: 60px;
                float: left;
                text-decoration: none;
                cursor: pointer;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.handleClick = path => {
        console.log(path);
        window.location.hash = `#/${path}`;
    };

    module.render = ({ text = "Sem parâmetro", active = false, path = "" }) => {
        module._id++;
        module._style(active);

        return `
            <a  
                onclick="flatButton.handleClick('${path}');" 
                class="flat-button-${module._id}"
                >${text}</a>
        `;
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    };
})();
