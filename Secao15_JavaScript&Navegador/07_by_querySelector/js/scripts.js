// O método querySelector('#container-principal h1') seleciona o primeiro elemento <h1> dentro do elemento com o id 'container-principal'.
// querySelector retorna apenas o primeiro elemento que corresponde ao seletor especificado.
console.log(document.querySelector('#container-principal h1'));

// Similar ao exemplo anterior, querySelector('#segundo-container h1') seleciona o primeiro <h1> que estiver dentro do elemento com o id 'segundo-container'.
console.log(document.querySelector('#segundo-container h1'));

// O seletor 'div div p' seleciona o primeiro <p> que está dentro de duas <div> aninhadas. Neste caso, ele percorre a hierarquia das divs até encontrar um <p>.
console.log(document.querySelector('div div p'));

// Aqui, querySelector('footer h2') seleciona o primeiro <h2> que estiver dentro da tag <footer>.
console.log(document.querySelector('footer h2'));

// Este seletor 'ul .itens-azuis' busca dentro da <ul> o primeiro elemento que possui a classe 'itens-azuis'.
// Mesmo que haja múltiplos itens com essa classe dentro da lista, ele retornará apenas o primeiro.
console.log(document.querySelector('ul .itens-azuis'));