class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
        if (this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 1245678965;

const cliente2 = new Cliente();
cliente2.nome = "Rafael";
cliente2.cpf = 124562265;

const contaConrrenteRicardo = new ContaCorrente();
contaConrrenteRicardo.saldo = 0;
contaConrrenteRicardo.agencia = 1001;
console.log(contaConrrenteRicardo.saldo);
contaConrrenteRicardo.saldo = 100;
console.log(contaConrrenteRicardo.saldo);
contaConrrenteRicardo.sacar(99);
console.log(contaConrrenteRicardo.saldo);

console.log(cliente1);
console.log(cliente2);