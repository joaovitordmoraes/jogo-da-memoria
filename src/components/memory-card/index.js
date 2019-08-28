const memoryCard = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .memory_card {
            height: 155px;
            width: 155px;
            position: relative;
        }

        .memory_card .card {
            width: 100%;
            height: 100%;
            background-color: #f25a70;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
            cursor: pointer;
            position: absolute;
            z-index: 2;
        }

        .memory_card .card.-turn_up {
            background-color: #ffffff;
            z-index: 1;
            display: none;
        }

        .memory_card.-active .card {
            display: none;
        }

        .memory_card.-active .card.-turn_up {
            display: flex;
        }

        .memory_card .card > .icon {
            height: 100px;
            width: 100px;
            z-index: 2;
        }

        .memory_card .card.-turn_up > .icon {
            margin-top: -10px;
        }

        .memory_card .card.-turn_up::before {
            content: '';
            position: absolute;
            height: 94px;
            width: 94px;
            bottom: 22px;
            background-color: #d4d4d4;
            border-radius: 50%;
            z-index: 1;
        }
    `

    $head.insertBefore($style, null);

    return ({src, alt}) => `
        <div class="memory_card" onClick="handleClick(this)">
            <article class="card -turn_up">
                <img 
                    src="${src}" 
                    alt="${alt}" 
                    class="icon"
                />
            </article>
            <article class="card">
                <img 
                    src="images/icon-collabcode.svg" 
                    alt="O mascote da CollabCode, o Gueio" 
                    class="icon"
                />
            </article>
        </div>
    `;
};

const handleClick = $component => {
    $component.classList.toggle('-active');

    console.log($component.classList.contains('-active').lenght);
};