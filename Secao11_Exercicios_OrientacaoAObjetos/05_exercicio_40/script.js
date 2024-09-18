class Conta {

  constructor(saldoContaCorrente, saldoContaPoupanca, juros) {
    this.saldoContaCorrente = saldoContaCorrente;
    this.saldoContaPoupanca = saldoContaPoupanca;
    this.juros = juros;
  }

  deposito(valor) {
    if (valor != 0) {
      this.saldoContaCorrente += valor;
    }
  }

  saque(valor) {
    if (valor != 0) {
      this.saldoContaCorrente -= valor;
    }
  }

  transaferenciaCP(valor) {
    if (valor != 0) {
      this.saldoContaCorrente -= valor;
      this.saldoContaPoupanca += valor;
    }
  }

  transaferenciaCC(valor) {
    if (valor != 0) {
      this.saldoContaPoupanca -= valor;
      this.saldoContaCorrente += valor;
    }
  }

  transaferencia(valor) {
    if (valor != 0) {
      this.saldoContaPoupanca -= valor;
      this.saldoContaCorrente += valor;
    }
  }

  jurosAniversario() {
    let juros = 0;
    juros = (this.saldoContaPoupanca * this.juros) / 100;
    this.saldoContaPoupanca += juros;
  }

}

class ContaEspecial extends Conta {
  constructor(saldoContaCorrente, saldoContaPoupanca, juros) {
    super(saldoContaCorrente, saldoContaPoupanca, juros * 2);
  }
}

let conta = new Conta(1000, 5000, 1);

console.log(conta);

conta.saque(500);

console.log(conta);

conta.deposito(5000);

console.log(conta);

conta.transaferenciaCP(3000);

console.log(conta);

conta.jurosAniversario();

console.log(conta);

let contaEspecial = new ContaEspecial(10000, 5000, 1);

console.log(contaEspecial);

contaEspecial.saque(5000);

console.log(contaEspecial);

contaEspecial.jurosAniversario(5000);

console.log(contaEspecial);