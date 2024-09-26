// No exemplo abaixo, como a variável 'b' não está definida, o bloco catch capturará o erro 'ReferenceError'.

// Descomente a linha abaixo para evitar o erro
// let b = 2;

try {
  // Como 'b' não foi definido, um erro será gerado aqui
  let a = 2 + b;
} catch (e) {
  // O bloco catch captura o erro e exibe a mensagem no console
  console.log(e);
} finally {
  console.log('Executou');
}