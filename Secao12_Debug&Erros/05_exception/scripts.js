function saudacao(nome) {

  if (typeof nome != 'string') {
    throw new Error('O parâmetro informado precisa ser uma string');
  } else {
    console.log(`Olá ${nome}.`);
  }

}

saudacao("Evaldo");
saudacao(10);