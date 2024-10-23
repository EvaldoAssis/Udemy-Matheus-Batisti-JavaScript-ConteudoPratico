// O método getElementsByTagName() retorna uma HTMLCollection contendo todos os elementos <h1> presentes no documento HTML.
console.log(document.getElementsByTagName('h1'));

// Para acessar um elemento específico da coleção, teriamos que utilziar o índice (neste caso, o primeiro <h1>).
console.log(document.getElementsByTagName('h1')[0]);

// O método getElementById() retorna o elemento que possui o id informado (neste caso, 'titulo-principal'), sendo um método que busca por um id único.
console.log(document.getElementById('titulo-principal'));
console.log(document.getElementById('titulo-principal').innerText);