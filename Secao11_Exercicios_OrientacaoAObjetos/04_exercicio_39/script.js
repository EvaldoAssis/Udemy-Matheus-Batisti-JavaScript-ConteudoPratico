class Carro {

  constructor(marca, cor, gasolina, potencia) {

    this.marca = marca;
    this.cor = cor;
    this.gasolina = gasolina;
    this.potencia = potencia;
    this.gasto = this.calcularGasto();

  }

  calcularGasto() {
    if (this.potencia < 2) {
      return 14;
    } else if (this.potencia < 3) {
      return 9;
    } else {
      return 6;
    }
  }

  dirigir(distancia) {

    if (distancia <= 0) {
      console.log('Distância precisa ser maior que zero.');
      return this.gasolina.toFixed(1);
    }

    let distanciaMetros = distancia * 1000;
    this.gasolina -= (distanciaMetros / this.gasto) / 1000;

    return this.gasolina.toFixed(1);

  }

  abastecer(litros) {

    if (litros <= 0) {
      console.log('Você deve adicionar uma quantidade positiva de litros.');
      return this.gasolina.toFixed(1);
    }

    this.gasolina += litros;
    return this.gasolina.toFixed(1);
  }

}

let celta = new Carro('GM', 'Preto', 100, 1.0)
console.log(celta);
console.log(celta.dirigir(100));
console.log(celta.abastecer(7.1));

let gol = new Carro('Volks', 'Prata', 10, 2.0)
console.log(gol);
console.log(gol.dirigir(14));
console.log(gol.abastecer(1));

let uno = new Carro('FIAT', 'Branco', 10, 5.0)
console.log(uno);
console.log(uno.dirigir(14));
console.log(uno.abastecer(10));