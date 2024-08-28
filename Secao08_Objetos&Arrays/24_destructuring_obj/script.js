let obj = {
  rodas: 4,
  portas: 4,
  tetosolar: true,
  motor: '2.0'
}

const {rodas: vRodas, portas: vPortas, tetosolar: vTetoSolar, motor: vMotor} = obj; //As propriedades do objeto se tornaram constantes

console.log(vRodas);
console.log(vPortas);