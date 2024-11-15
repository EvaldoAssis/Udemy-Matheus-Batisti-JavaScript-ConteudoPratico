let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

// Para remover eventos, a função de callback deve ser declarada fora do evento, e não como uma função anônima.

function msg() {
    console.log("clicou em mim!");
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", () => {
    btn1.removeEventListener("click", msg);
});

/*  É importante que a função passada para removeEventListener seja exatamente a mesma usada com addEventListener. 
    Funções anônimas não podem ser removidas, pois removeEventListener não consegue identificar o callback original.
*/