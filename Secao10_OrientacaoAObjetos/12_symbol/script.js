class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  latir() {
    console.log("Au au");
  }
}

// Definindo um valor padrão para a propriedade 'raca' no prototype
Cachorro.prototype.raca = 'SRD';

// Criando um Symbol para adicionar a propriedade 'patas' no prototype
let patas = Symbol();

// Atribuindo o valor '4' à propriedade 'patas', usando o Symbol como chave
Cachorro.prototype[patas] = 4;

let labrador = new Cachorro('Labrador', 'Amarelo');

// Chamando o método latir da instância
labrador.latir();

// Acessando as propriedades definidas
console.log(Cachorro.prototype.raca); // acessando diretamente no prototype
console.log(labrador.raca); // acessando a propriedade da instância

// Acessando a propriedade definida com Symbol
console.log(Cachorro.prototype[patas]); // 4
console.log(labrador[patas]); // 4