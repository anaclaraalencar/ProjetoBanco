import { Conta } from "./Conta";


export class ContaPoupanca extends Conta {
    private _aniversarioConta: number;  

    constructor (numero: number, agencia: number, tipo: number, titular: string, saldo: number, aniversarioConta: number) {
        super (numero, agencia, tipo, titular, saldo)
        this._aniversarioConta = aniversarioConta

    }

    public get aniversarioConta(): number {
        return this._aniversarioConta;
    }
    

    public set aniversarioConta(aniversarioConta : number) {
        this._aniversarioConta = aniversarioConta
    }

    public visualizar(): void {
        super.visualizar()
        console.log(`O dia do aniversário é ${this._aniversarioConta}`)
    }
}


