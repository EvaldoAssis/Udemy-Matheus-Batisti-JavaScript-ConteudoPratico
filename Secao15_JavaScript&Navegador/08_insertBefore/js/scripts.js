// Cria um novo elemento de parágrafo <p>
let novoElemento = document.createElement("p");

/*

Se o código abaixo fosse inserido, o texto passado pela variável texto seria apresentado no <p>

let texto = document.createTextNode("Algum texto");
novoElemento.appendChild(texto);

*/

// Seleciona o elemento com o ID "titulo-principal" que será o elemento de referência
let elementoAlvo = document.querySelector("#titulo-principal");

// Seleciona o elemento pai com o ID "container-principal" que conterá o novo elemento e o elemento de referência
let elementoPai = document.querySelector("#container-principal");

// Insere o novo elemento <p> antes do elemento "titulo-principal" dentro do "container-principal"
elementoPai.insertBefore(novoElemento, elementoAlvo);

// Para verificar se o novo elemento foi adicionado, inspecione o navegador (usando as ferramentas de desenvolvedor)
