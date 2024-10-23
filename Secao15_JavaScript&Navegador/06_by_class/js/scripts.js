// O método getElementsByTagName('li') retorna uma HTMLCollection contendo todas as <li> do documento HTML.
console.log(document.getElementsByTagName('li'));

// No exemplo abaixo, o método getElementsByClassName() retorna uma coleção de todas as <li> que possuem a classe 'itens-azuis'.
// Apenas os elementos que contêm essas classes serão incluídos nas respectivas HTMLCollection.
console.log(document.getElementsByClassName('itens-azuis'));
console.log(document.getElementsByClassName('itens-vermelhos'));

console.log(document.getElementsByClassName('itens'));