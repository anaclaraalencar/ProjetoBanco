export abstract class Conta {


    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    
	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = saldo;
	}



    public get numero() {
        return this._numero;
    }

    public set numero (numero: number) {
        this._numero = numero;
    }




public get agencia() {
    return this._agencia;
}

public set agencia (agencia: number) {
    this._agencia = agencia;
}


public get tipo() {
    return this._tipo;
}

public set tipo (tipo: number) {
    this._tipo = tipo;
}


public get titular() {
    return this._titular;
}

public set titular (titular: string) {
    this._titular = titular;
}

public get saldo() {
    return this._saldo;
}

public set saldo (saldo: number) {
    this._saldo = saldo;
}




    public sacar(valor: number): boolean {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return true;
        } else {
            console.log("Saldo insuficiente");
            return false;
        }
    }

    public depositar(valor: number) {
        if (this._saldo != 0) {
            this._saldo += valor;
        
        } else {
            this.saldo = valor;
            
        }
    }
    

    public visualizar(): void{

        let tipo: string = ""

        switch (this._tipo) {
            case 1:
                tipo = "Conta corrente";
                break;
            case 2:
                tipo = "Conta poupança";
                break;
            default:
                tipo = "Tipo de conta não identificado";
                break;
        }

        
        console.log("*****************************************************")
        console.log("************    Dados da conta   ********************")
        console.log("*****************************************************")
        console.log(`Numero da conta: ${this.numero}`)
        console.log(`Numero da agencia: ${this._agencia}`)
        console.log(`Tipo da conta: ${tipo}`)
        console.log(`Titular da conta: ${this._titular}`)
        console.log(`Saldo da conta: ${this._saldo}`)

    }
}