// Seleciona o elemento <p> com o ID "sem-text", que está atualmente sem texto
let paragrafoSemTexto = document.getElementById('sem-text');

// Cria um nó de texto com o conteúdo "Inserir este texto"
let texto = document.createTextNode("Inserir este texto");

// Anexa o nó de texto criado ao parágrafo selecionado, adicionando o texto ao seu conteúdo
paragrafoSemTexto.appendChild(texto);