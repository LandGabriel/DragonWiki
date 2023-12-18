function preencherQuadrados(containerId, valor, corPreenchida) {
    const container = document.getElementById(containerId);
    const attributeBar = container.querySelector('.attribute-bar2');

    attributeBar.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const square = document.createElement('div');
        square.className = i < valor ? 'filled3' : '';
        square.style.backgroundColor = (i < valor) ? corPreenchida || '' : '';
        attributeBar.appendChild(square);
    }
}

preencherQuadrados('forca-container2', 1, '#0ddf1e');
preencherQuadrados('tamanho-container2', 4,'#0ddf1e');
preencherQuadrados('defesa-container2', 4, '#0ddf1e');
preencherQuadrados('idade-container2', 3, '#0ddf1e');
preencherQuadrados('poder-container2', 2, '#0ddf1e');
preencherQuadrados('magia-container2', 4, '#0ddf1e');
