// Cria um novo elemento de parágrafo <p>
let novoElemento = document.createElement("p");

// Cria um nó de texto com o conteúdo "Algum texto"
let texto = document.createTextNode("Algum texto");

// Anexa o nó de texto ao novo parágrafo <p>
novoElemento.appendChild(texto);

// Seleciona o elemento com o ID "titulo-principal" (um heading ou título da página)
let heading = document.querySelector("#titulo-principal");

// Obtém o elemento pai do "titulo-principal"
let paiHeading = heading.parentNode;

// Substitui o elemento "titulo-principal" pelo novo parágrafo <p> dentro do mesmo elemento pai
paiHeading.replaceChild(novoElemento, heading);