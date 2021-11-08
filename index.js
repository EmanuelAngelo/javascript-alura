import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 1245678965;

const cliente2 = new Cliente();
cliente2.nome = "Rafael";
cliente2.cpf = 124562265;

const contaConrrenteRicardo = new ContaCorrente();
contaConrrenteRicardo.agencia = 1001;
contaConrrenteRicardo.cliente = cliente1;
contaConrrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

contaConrrenteRicardo.transferir(200, conta2);

console.log(conta2);
