/*


  Aprofundando em condicionais

  Crie uma função chamada classificarNumero que recebe um número inteiro como argumento.
  A função deve retornar uma string com a classificação do número de acordo com as seguintes regras:
  Se o número for positivo e par, retorne "Positivo e Par".
  Se o número for positivo e ímpar, retorne "Positivo e Ímpar".
  Se o número for negativo, retorne "Negativo".
  Se o número for zero, retorne "Neutro".
    
*/


let a  = 10;

function classificarNumero(a) {
    if ((a > 0) && (a % 2 === 0)) {
        return "Positivo e Par";
    }
    else if ((a > 0) && (a % 2 !== 0)) {
        return "Positivo e Ímpar";
    } else if (a < 0) {
        return "Negativo";
    } else {
        return "Neutro";
    }
}