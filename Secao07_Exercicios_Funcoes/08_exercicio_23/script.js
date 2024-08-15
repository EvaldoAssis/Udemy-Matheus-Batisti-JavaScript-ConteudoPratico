/* 

    Escreva uma função que recebe uma string;
    Se o texto conter mais de 10 caracteres imprima “Texto muito longo”;
    Se conter menos, imprima “Texto dentro do limite”;

*/

function identificaTamanhoTexto(texto) {
    if (texto.length > 10) {
        console.log("Texto muito longo: " + texto)
    } else {
        console.log("Texto dentro do limite: " + texto) 
    }
};

identificaTamanhoTexto("String");
identificaTamanhoTexto("StringMenor");
identificaTamanhoTexto("StringMaior");
identificaTamanhoTexto("String fora de padrão");