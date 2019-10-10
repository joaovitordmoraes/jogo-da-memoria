const eyeCollabcode = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .eye-collabcode {
                display: block;
                text-indent: -9999px;
                background-image: url('/images/eye-hidden.png');
                background-repeat: no-repeat;
                height: 15px;
                width: 23px;
                cursor: pointer;
                opacity: .5;
                transition: opacity 200ms linear;
                transform: translateY(calc(-100% - 12px));
                float: right;
            }

            .eye-collabcode.-active {
                opacity: 1;
            }
        `;

        $head.insertBefore($style, null);
    };

    module.handleClick = $component => {
        const attrFor = $component.getAttribute("for");
        const $input = document.querySelector(`#${attrFor}`);

        if ($input.getAttribute("type") === "text") {
            $component.classList.remove("-active");
            $input.setAttribute("type", "password");
        } else {
            $input.setAttribute("type", "text");
            $component.classList.add("-active");
        }
    };

    module.render = ({ attrFor = "" }) => {
        module._style();

        return `
            <label 
                for="${attrFor}"
                class="eye-collabcode" 
                onClick="eyeCollabcode.handleClick(this);"
            >
            Mostrar senha
            </label>
        `;
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    };
})();
