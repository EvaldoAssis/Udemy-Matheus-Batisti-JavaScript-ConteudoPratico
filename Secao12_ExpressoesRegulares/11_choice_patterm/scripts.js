const reg = /\w+: (Barbara|Evaldo|Kimberly|Milena|Simone)/;
// Aceita uma palavra seguida de dois pontos e um dos nomes especificados

console.log(reg.test("Nome: Simone"));    // true
console.log(reg.test("Nome: Evaldo"));    // true
console.log(reg.test("Nome: Richard"));   // false