let carro = {
  portas: 2,
  portamalas: '200l',
  motor: '1.0',
};

let adicionais = {
  tetoSolar: true,
  arcondicionado: true,
  direcaoEletrica: false,
};

console.log(carro);

//Copiando as propriedades do objeto adicionais para o objeto carro. Para isto usamos o método "assing()"
Object.assign(carro, adicionais);

console.log(carro);