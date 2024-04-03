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

        
        if (this.saldo > 0) {
            
            if (this._limite < this.limite) {
                
                const valorMaximoLimite = this.limite - this._limite;
                
                if (valor <= valorMaximoLimite) {
                    
                    this._limite += valor;
                } else {
                    
                    this._limite += valorMaximoLimite;
                }
            }
        } else {
            
            this._limite = 0;
        }
    }

    public visualizar(): void {
        super.visualizar();
        console.log(`O limite da conta é ${this._limite}`);
    }
}


