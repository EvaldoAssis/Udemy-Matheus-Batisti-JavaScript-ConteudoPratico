// Exibe o elemento <body> no console, que contém todo o conteúdo visível da página.
console.log(document.body);

// Acessa o segundo nó filho do <body>, que é o primeiro <div> com o título e parágrafos.
console.log(document.body.childNodes[1]);

// Acessa todos os nós filhos do primeiro <div> dentro do <body> (que contém <h1>, <p>, e outro <div>).
console.log(document.body.childNodes[1].childNodes);

// Acessa o segundo nó filho do primeiro <div>, que é o primeiro <p> com o texto "Algum texto no parágrafo".
console.log(document.body.childNodes[1].childNodes[1]);

// Exibe o texto contido no parágrafo selecionado anteriormente, que é "Algum texto no parágrafo".
console.log(document.body.childNodes[1].childNodes[1].innerText);