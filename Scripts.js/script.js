function preencherQuadrados(containerId, valor, corPreenchida) {
    const container = document.getElementById(containerId);
    const attributeBar = container.querySelector('.attribute-bar3');

    attributeBar.innerHTML = ''; 

    

    for (let i = 0; i < 5; i++) {
        const square = document.createElement('div');
        square.className = i < valor ? 'filled3' : '';
        square.style.backgroundColor = (i < valor) ? corPreenchida || '' : ''; // Define a cor se o quadrado estiver preenchido
        attributeBar.appendChild(square);
    }
}

preencherQuadrados('forca-container', 3, '#0000ff');
preencherQuadrados('tamanho-container', 2, '#0000ff');
preencherQuadrados('defesa-container', 2, '#0000ff');
preencherQuadrados('idade-container', 2, '#0000ff');
preencherQuadrados('poder-container', 4, '#0000ff');
preencherQuadrados('magia-container', 3, '#0000ff');

