const validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNomeUsuario.test("jr_123"));
console.log(validarNomeUsuario.test("EvaldoJunior"));
console.log(validarNomeUsuario.test("EA_0909899089092819381283-"));


/*

(?=.{3,16}$) - Verifica se a string tem um comprimento de 3 a 16 caracteres.
[a-z0-9-_] - : Uma classe de caracteres que especifica quais caracteres são permitidos

*/