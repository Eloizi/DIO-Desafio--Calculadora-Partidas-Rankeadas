const readline = require('readline'); // importa o módulo readline, módulo utilizado para criar uma interface de leitura de dados a partir do terminal.

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o nome do seu jogador: ', (nomeJogador) => {
    rl.question('Digite a quantidade de vitórias do seu jogador: ', (vitoriasJogadorInput) => {
        rl.question('Digite a quantidade de derrotas do seu jogador: ', (derrotasJogadorInput) => {
            const vitorias = parseInt(vitoriasJogadorInput);
            const derrotas = parseInt(derrotasJogadorInput);

            if (isNaN(vitorias) || isNaN(derrotas)) {
                console.log('Digite um valor numérico para a quantidade de vitórias e derrotas. \n Tente novamente! ');
            } else {
                getSaldoVitorias();
            }


            function getSaldoVitorias() {
                let saldoVitorias = vitorias - derrotas;

                if (saldoVitorias <= 10) {
                    console.log("O Herói de nome: " + nomeJogador + " com saldo de vitórias em: " + saldoVitorias + " Se encontra no nível -> Ferro");
                } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
                    console.log("O Herói de nome: " + nomeJogador + " com saldo de vitórias em: " + saldoVitorias + " Se encontra no nível -> Bronze");
                } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
                    console.log("O Herói de nome: " + nomeJogador + " com saldo de vitórias em: " + saldoVitorias + " Se encontra no nível -> Prata");
                } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
                    console.log("O Herói de nome: " + nomeJogador + " com saldo de vitórias em: " + saldoVitorias + " Se encontra no nível -> Ouro");
                } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
                    console.log("O Herói de nome: " + nomeJogador + " com saldo de vitórias em: " + saldoVitorias + " Se encontra no nível -> Diamante");
                } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
                    console.log("O Herói de nome: " + nomeJogador + " com saldo de vitórias em: " + saldoVitorias + " Se encontra no nível -> Lendário");
                } else if (saldoVitorias >= 101) {
                    console.log("O Herói de nome: " + nomeJogador + " com saldo de vitórias em: " + saldoVitorias + " Se encontra no nível -> Imortal");
                }

                rl.close();
            }
        });
    });
});

