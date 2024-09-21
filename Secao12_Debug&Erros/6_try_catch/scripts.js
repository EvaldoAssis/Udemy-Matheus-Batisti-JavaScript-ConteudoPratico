/* No caso abaixo, por não temros definido a variável b em nenhum momento, o catch lançara um errro informando isto */

//let b = 2;

try {

  let a = 2 + b;

} catch (e) {

  console.log(e);

}