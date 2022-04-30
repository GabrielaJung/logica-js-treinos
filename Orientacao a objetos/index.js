
import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente ( "Ricardo", 11122233304);
const ContaCorrenteRicardo = new ContaCorrente(cliente1, 1001);

ContaCorrenteRicardo.depositar(300);

const cliente2 = new Cliente("Alice", 88811122204);
const conta2 = new ContaCorrente(cliente2, 102);

console.log(ContaCorrente.quantiaDeContas);