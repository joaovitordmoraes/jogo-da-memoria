const createMemoryCard = ({src, alt, estado}) => `
    <article class="memory_card ${estado}" onClick="handleClick()">
        <img 
            src="${src}" 
            alt="${alt}" 
            class="icon"
        />
    </article>
`;

const handleClick = () => console.log("Clicado");