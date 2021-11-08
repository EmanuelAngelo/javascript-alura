class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 1245678965;

const cliente2 = new Cliente();
cliente2.nome = "Rafael";
cliente2.cpf = 124562265;

const contaConrrenteRicardo = new ContaCorrente();
contaConrrenteRicardo.agencia = 1001;

contaConrrenteRicardo.depositar(100);

contaConrrenteRicardo.sacar(50);
console.log(contaConrrenteRicardo);

