// Cria um novo elemento de lista não ordenada <ul>
let lista = document.createElement('ul');

// Inicia um loop para criar 5 itens de lista <li>
for (let i = 0; i < 5; i++) {

    // Cria um novo elemento de item de lista <li>
    let item = document.createElement('li');

    // Cria um nó de texto com o conteúdo "texto lista"
    let texto = document.createTextNode('texto lista');

    // Anexa o nó de texto ao item de lista <li>
    item.appendChild(texto);

    // Anexa o item de lista <li> à lista <ul>
    lista.appendChild(item);
}

// Seleciona o elemento com o ID "container-principal", onde a lista será inserida
let container = document.getElementById('container-principal');

// Anexa a lista <ul> ao container principal, adicionando-a ao final do conteúdo existente
container.appendChild(lista);