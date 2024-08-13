let x = 12; //Escopo do código principal

function imprimir() {
    let x = 12.120; //Escopo deo IF
    console.log(x);
};

imprimir();

console.log(x);

/*
    Fica claro que o X pode ser declarado mais de uma se houver respeito do escopo em que ele está.
    Atualemnte como let e const, qualquer bloco de código pode separar seu escopo (Um if por exemplo).
*/

