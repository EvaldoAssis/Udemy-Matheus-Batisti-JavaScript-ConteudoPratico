// Cria um novo elemento de parágrafo <p>
let novoElemento = document.createElement("p");

// Cria um nó de texto com o conteúdo "Algum texto"
let texto = document.createTextNode("Algum texto");

// Anexa o nó de texto ao novo parágrafo <p>
novoElemento.appendChild(texto);

// Seleciona o elemento de parágrafo com o ID "paragrafo-principal"
let p = document.querySelector("#paragrafo-principal");

// Obtém o elemento pai do parágrafo "paragrafo-principal"
let pai = p.parentNode;

// Anexa o novo parágrafo <p> ao elemento pai, adicionando-o ao final da lista de filhos
pai.appendChild(novoElemento);