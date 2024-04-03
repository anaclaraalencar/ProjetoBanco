import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
    private _limite: number;

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite: number) {
        super(numero, agencia, tipo, titular, saldo);
        this._limite = limite;
    }

    
    public get limite(): number {
        return this._limite;
    }

    public set limite(limite: number) {
        this._limite = limite;
    }

    public sacar(valor: number): boolean {
        if (this.saldo + this._limite >= valor) {
            if (this.saldo >= valor) {
                this.saldo -= valor;
            } else {
                const valorRestante = valor - this.saldo;
                this.saldo = 0;
                this._limite -= valorRestante;
            }
            return true;
        } else {
            console.log("Saldo insuficiente");
            return false;
        }
    }

    public depositar(valor: number) {
        this.saldo += valor;

        // Verifica se o saldo atual é positivo antes de ajustar o limite
        if (this.saldo > 0) {
            // Verifica se o limite atual é menor que o limite máximo
            if (this._limite < this.limite) {
                // Calcula o valor máximo que o limite pode ser ajustado
                const valorMaximoLimite = this.limite - this._limite;
                // Verifica se o valor do depósito não ultrapassa o valor máximo que o limite pode ser ajustado
                if (valor <= valorMaximoLimite) {
                    // Ajusta o limite
                    this._limite += valor;
                } else {
                    // Se o valor do depósito ultrapassa o valor máximo que o limite pode ser ajustado, ajusta o limite para o valor máximo
                    this._limite += valorMaximoLimite;
                }
            }
        } else {
            // Se o saldo for negativo, ajusta o limite para zero
            this._limite = 0;
        }
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`O limite da conta é ${this._limite}`);
    }
}


