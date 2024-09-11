let cachorro = {
  patas: 4,
  raca: 'Vira lata',
  latir: function() {
    console.log("Au Au");
  }
}

let labrador = Object.create(cachorro);

labrador.latir();
labrador.raca = "Labrador";

console.log(labrador.raca);
console.log(cachorro.raca);

let pastor = Object.create(cachorro);
pastor.raca = "Pastor Alemão";

pastor.latir();

console.log(pastor.raca);
console.log(cachorro.raca);
