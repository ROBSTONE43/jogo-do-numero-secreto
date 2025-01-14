let litasDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
    let campo =  document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.3});
}

function mensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto.');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10.');
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabens!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `'Você acertou o número secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        
       tentativas++;
       limparCampo();

       
    }
    
}

function gerarNumeroAleatorio(){
   let numeroEscolhido =  parseInt(Math.random() * numeroLimite +1);
   let quantidadeDeElementosNaLista = litasDeNumerosSorteados.length;

   if(quantidadeDeElementosNaLista == numeroLimite){
     litasDeNumerosSorteados = [];
   }

   if(litasDeNumerosSorteados.includes(numeroEscolhido)){
     return gerarNumeroAleatorio();
   } else{
    litasDeNumerosSorteados.push(numeroEscolhido);
    console.log(litasDeNumerosSorteados);
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}