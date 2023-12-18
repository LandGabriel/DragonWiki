function preencherQuadrados(containerId, valor, corPreenchida) {
    const container = document.getElementById(containerId);
    const attributeBar = container.querySelector('.attribute-bar1');

    attributeBar.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const square = document.createElement('div');
        square.className = i < valor ? 'filled3' : '';
        square.style.backgroundColor = (i < valor) ? corPreenchida || '' : '';
        attributeBar.appendChild(square);
    }
}

preencherQuadrados('forca-container1', 4, '#ee0c0c');
preencherQuadrados('tamanho-container1', 5,'#ee0c0c');
preencherQuadrados('defesa-container1', 4, '#ee0c0c');
preencherQuadrados('idade-container1', 5, '#ee0c0c');
preencherQuadrados('poder-container1', 3, '#ee0c0c');
preencherQuadrados('magia-container1', 1, '#ee0c0c');
