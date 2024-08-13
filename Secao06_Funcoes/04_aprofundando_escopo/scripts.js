let x = 10;

if(x > 5) {
  
  /* O bloco do IF forma um outro escopo para a nova variável x */
  
  let x = 20;
  x++;
  console.log(x);
  
};

console.log(x);