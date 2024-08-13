let a = 5; //A variável a declarada nessa linha diz respeito ao escopo global

const multiplicar = function(x, y) {

    let a = x * y; //A variável a declarada nessa linha diz respeito ao escopo da função
    
    if (a > 10) {
        let a = 0; //A variável a declarada nessa linha diz respeito ao escopo do IF
        a++;
        console.log(a);
    }

    console.log(a);

};

console.log(a);
multiplicar(3, 7);