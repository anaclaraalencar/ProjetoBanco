import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepositorio";

export class ContaController implements ContaRepository {

    private listaContas: Array<Conta> = new Array<Conta>();
    public numero:number = 0;

    public buscarNoArray(numero: number): Conta | null {  //metodo auxiliar buscarNumero
        for (let conta of this.listaContas) {
            if(conta.numero === numero)

            return conta
        }

        return null
    }

    public gerarNumero(): number { //metodo auxiliar Gerar numero
        return ++ this.numero
    }

    procurarPorNumero(numero: number): void {
        let conta = this.listaContas.find(conta => conta.numero === numero);
        if (conta) {
            console.log(`A conta escolhida é ${numero} do cliente ${conta.titular}`); 
   
        } else {
            console.log(`Nenhuma conta encontrada com o número ${numero}`);
        }
    }


    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar()
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log('Conta cadastrada com sucesso')
    }   
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null) {

            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;

            console.log(`A conta ${conta.numero} foi atualizada com sucesso`)           
        } else {
            console.log(`A conta ${conta.numero} não foi encontrada`)
        }
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(`Conta numero: ${numero} do titular foi apagada com sucesso`)
            
        } else {
            console.log(`Conta não identificada`)
        }
    }

    sacar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero)

        
        if (buscaConta != null) {
           if (buscaConta.sacar(valor) == true) {

            console.log(`O saque na conta ${numero} foi efetuado com sucesso`)
            
           }
            
        } else { 
            console.log(`Conta não identificada`)
        }
    }

    depositar(numero: number, valor: number): void {
        let buscaConta = this.buscarNoArray(numero)

        
        if (buscaConta != null) {
           buscaConta.depositar(valor)

            console.log(`O deposito na conta ${numero} foi efetuado com sucesso`) 
            
        } else { 
            console.log(`Conta não identificada`)
        }
    }

    transferir(numeroOrigem: number, valor: number, numeroDestino: number): void {
        let buscaContaOrigem = this.buscarNoArray(numeroOrigem)
        let buscaContaDestino = this.buscarNoArray(numeroDestino)

        
        if (buscaContaOrigem != null && buscaContaDestino != null) {
            if (buscaContaOrigem.sacar(valor) == true) {
                buscaContaDestino.depositar(valor)

            console.log(`O valor ${valor} foi enviado da conta ${numeroOrigem} para a conta ${numeroDestino}`) 
        }

        } if (buscaContaOrigem == null) {

            console.log(`Conta de origem não identificada`)         
        } else {

            console.log(`Conta de destino não identificada`)  

        }
            
    } 
}