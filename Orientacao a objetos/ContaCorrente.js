export class ContaCorrente {
    static quantiaDeContas = 0;
    agencia;
    cliente;

    _saldo = 0;

    // # na frente de uma propriedade, significa que ela é privada/inalterável;
    // _ na frente de uma propriedade, não a torna privada, mas é um sinal de que não se deve alterá-la com ex.: contaCorrenteRicardo.saldo = 100.

    set cliente(novoValor){
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;

            return valor;

        } else {
            console.log ("Saldo insuficiente.");
            console.log (this._saldo);
        }
    }

    get saldo (){
        return this._saldo;
    }

    depositar (valor){
        if (valor >= 0){
            this._saldo += valor;
            return valor;
        } else {
            console.log("Não é possível depositar um valor negativo.");
            console.log (this._saldo);
        }
    }

    transferir(valor,conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

    constructor(cliente, agencia) {
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.quantiaDeContas +=1;
    }
}