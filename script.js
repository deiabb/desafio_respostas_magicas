// // Elaborar um simulador 
// Criar um ciclo que repita um bloco de instruções  no seu simulador 
// A cada repetição, é necessário efetuar uma operação ou comparação para obter uma saída por alert ou console 
// Solicitar uma entrada através de prompt, manipular o valor a cada repetição, realizando uma saída para cada resultado, até que digite "sair"

// Magic 8 ball 

// Inventar frases da sorte: 
// Para perguntas do gênero, qual a minha sorte, vou ter dinheiro, vou encontrar alguém, vou arrumar um emprego
// 1 - 'Sim, nada a declarar'
// 2 - 'Não, nada a declarar'
// 3 - 'Sim, mas não do jeito que você quer'
// 4 - 'Não, isso nunca vai acontecer'
// 5 - 'Não sei nada sobre isso'
// 6 - '42'
// 7 - 'Sim, com certeza'
// 8 - 'Sim, vai acontecer amanhã'
// 9 - 'Jamais'
// 10 - 'Nem em sonhos'


//O usuário faz perguntas, e recebe respostas aleatórias até digitar sair
//a função pega a pergunta do usuário, joga dentro do loop para sempre perguntar. E o switch dar respostar de acordo com os números aleatórios gerados com random. 

function respostasMagicas() {
    let pergunta =  '';
    while (pergunta != "sair"){
        pergunta = prompt(`Faça a sua pergunta. Se quiser parar digite "sair"`);
        if (pergunta === "sair") {
            break;
        }
        let numAleatorio = Math.floor(Math.random()*10 +1)
        switch (numAleatorio) { 
            case 1:
                alert('Sim, nada a declarar');
                break;
            case 2:
                alert('Não, nada a declarar');
                break;
            case 3:
                alert('Sim, mas não do jeito que você quer');
                break;
            case 4:
                alert('Não, isso nunca vai acontecer');
                break;
            case 5:
                alert('Não sei nada sobre isso');
                break;
            case 6:
                alert('42');
                break;
            case 7:
                alert('Sim, com certeza');
                break;
            case 8: 
                alert('Sim, vai acontecer amanhã');
                break;
            case 9:
                alert('Jamais');
                break;
            case 10:
                alert('Nem em sonhos');
                break;
        }
    }
    
}

respostasMagicas()

