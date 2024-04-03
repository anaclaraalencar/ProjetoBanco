import readline = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/util/model/Conta";
import { ContaCorrente } from "./src/util/model/ContaCorrente";
import { ContaPoupanca } from "./src/util/model/ContaPoupanca";
import { ContaController } from "./src/util/contoller/ContaContoller";

export function main() {
let opcao, numero, agencia, saldo, tipo, limite, aniversarioConta, valor,  numeroDestino: number; 
let titular: string;
const tiposContas = ['Conta Corrente', 'Conta Poupança']
let conta: ContaController = new ContaController();
let cc1: ContaCorrente = new ContaCorrente(conta.gerarNumero(), 337, 1, "Ana Clara", 5000, 1200);
let cc2: ContaCorrente = new ContaCorrente(conta.gerarNumero(), 478, 2, "Erika Santos" , 3000, 500);
let cp3: ContaPoupanca = new ContaPoupanca(conta.gerarNumero(), 229, 3, "Sara Medeiros", 1000, 160);
conta.cadastrar(cc1)
conta.cadastrar(cc2) 
conta.cadastrar(cp3)

while (true) {
console.log(colors.bg.black, colors.fg.red)
console.log("*****************************************************");
console.log("                                                     ");
console.log("                HEARTH BANK                          ");
console.log("                                                     ");
console.log("*****************************************************");
console.log("                                                     ");
console.log("            1 - Criar Conta                          ");
console.log("            2 - Listar todas as Contas               ");
console.log("            3 - Encontrar Conta pelo Numero          ");
console.log("            4 - Atualizar Dados da Conta             ");
console.log("            5 - Apagar Conta                         ");
console.log("            6 - Sacar                                ");
console.log("            7 - Depositar                            ");
console.log("            8 - Transferir valores entre Contas      ");
console.log("            9 - Sair                                 ");
console.log("                                                     ");
console.log("*****************************************************");
console.log("                                                     ");
console.log(colors.reset)

console.log("Insira a opção desejada");

opcao = readline.questionInt ("");

switch(opcao) {
    case 1:
        console.log(colors.fg.whitestrong,
            'Venha criar sua conta!', colors.reset)


        console.log("Insira o nome do titular da conta: ")
        titular = readline.question(" ")

        console.log("Insira a agencia: ")
        agencia = readline.questionInt(" ")

        console.log("Insira o tipo de conta: ")
        tipo = readline.questionInt(" ")

        console.log("Saldo a depositar: ")
        saldo = readline.questionFloat(" ")

         switch(tipo) {
            case 1:

            console.log("Qual o limite inicial da conta: ")
            limite = readline.questionFloat(" ")
            conta.cadastrar(new ContaCorrente(conta.gerarNumero(), agencia, tipo, titular, saldo, limite))
            break;

            case 2 :

            console.log("Qual o aniversario da conta poupança: ")
            aniversarioConta = readline.questionInt(" ")
            conta.cadastrar(new ContaPoupanca (conta.gerarNumero(), agencia, tipo, titular, saldo, aniversarioConta))

            break;
        } 

        aguardar()
        break;

    case 2:
        console.log(colors.fg.whitestrong,
            'Listar contas', colors.reset)
            conta.listarTodas()
            aguardar()
        break;

    case 3:
        
        console.log(colors.fg.whitestrong,

            'Agora, vamos buscar suas contas', colors.reset)
            let busca = readline.questionInt("Insira o numero da conta: ")
            conta.procurarPorNumero(busca)
            aguardar()   
        break;

    case 4:
        
        console.log(colors.fg.whitestrong, 'Atualizar conta', colors.reset);
        numero = readline.questionInt("Digite o numero da conta: ");
        
        let buscaConta = conta.buscarNoArray(numero);
    
        if (buscaConta != null) {
            let titular = readline.question("Insira o titular: ");
            let agencia = readline.questionInt("Insira a nova agencia da conta: ");
            let tipo = buscaConta.tipo;
            let saldo = readline.questionInt("Insira o saldo: ");
    
            switch (tipo) {
                case 1: 
                    let limite = readline.questionInt("Insira o limite: ");
          
                    conta.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                    break;
                case 2: 
                    let aniversarioConta = readline.questionInt("Insira o aniversario: ");
                    conta.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversarioConta));
                    break;
            }
        } else { 
            console.log(`Lamento, mas a conta ${numero} não foi encontrada`);
        }
    
        aguardar()     
        break;

    case 5:
        
        let contaDeletada = readline.questionInt("Insira o numero da conta deletada: ")
        conta.deletar(contaDeletada)

        aguardar()
        break;

    case 6:
        console.log(colors.fg.whitestrong,
            'Sacar', colors.reset)

        numero = readline.questionInt("Insira o numero da conta: ")
        valor = readline.questionFloat("Insira o valor a ser sacado: ")
        conta.sacar(numero, valor)

            aguardar()
        break;

    case 7:
        
        console.log(colors.fg.whitestrong,
            'Depositar', colors.reset)

            numero = readline.questionInt("Insira o numero da conta: ")
            valor = readline.questionFloat("Insira o valor a ser depositado: ")
            conta.depositar(numero, valor)

            aguardar()
        break;

    case 8:
        
        console.log(colors.fg.whitestrong,
            'Transferir', colors.reset)

            numero = readline.questionInt("Insira o numero da sua conta: ")
            valor = readline.questionFloat("Insira o valor a ser transferido: ")
            numeroDestino = readline.questionInt("Insira o numero da conta que ira receber: ")
           
            conta.transferir(numero, valor, numeroDestino)

            
            aguardar()
        break;

    case 9:  
        console.log(colors.fg.greenstrong,
            "Saindo do programa...");
            sobre()
        process.exit(0);
    default:

        console.log("Opção inválida! Por favor, peço que escolha uma opção válida.");

        break;
}    
    console.log("Pressione Enter para continuar...");
    readline.question("");

}}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Ana Clara de Alencar ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("https://github.com/anaclaraalencar");
    console.log("*****************************************************");
}

export function aguardar(): void {
    console.log(colors.fg.greenstrong)
    console.log("\n*****************************************************");
    console.log("Executando...");
    console.log("*****************************************************");
    console.log(colors.reset)
}

main()
    





