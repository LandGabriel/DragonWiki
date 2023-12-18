function preencherQuadrados(containerId, valor, corPreenchida) {
    const container = document.getElementById(containerId);
    const attributeBar = container.querySelector('.attribute-bar0');

    attributeBar.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const square = document.createElement('div');
        square.className = i < valor ? 'filled3' : '';
        square.style.backgroundColor = (i < valor) ? corPreenchida || '' : '';
        attributeBar.appendChild(square);
    }
}

preencherQuadrados('forca-container0', 3, '#8b0ddf');
preencherQuadrados('tamanho-container0', 1, '#8b0ddf');
preencherQuadrados('defesa-container0', 2, '#8b0ddf');
preencherQuadrados('idade-container0', 1, '#8b0ddf');
preencherQuadrados('poder-container0', 5, '#8b0ddf');
preencherQuadrados('magia-container0', 3, '#8b0ddf');
