//Desafio classificador de nivel de heroi
//O Que deve ser utilizado: Variáveis, Operadores, Laços de repetição e Estruturas de decisões

let nome = "Zoro"
let xp = 5555
const frase = ["O Herói de nome " , " está no nivel de "]

if(xp < 1000 ){
    console.log( frase[0] + nome + frase[1] + "Ferro")
} else if( xp > 1001 && xp <2000){
    console.log( frase[0] + nome + frase[1] + "Bronze")
}else {}

switch (xp > 2001 && xp <5000) {
        case true:
          console.log( frase[0] + nome + frase[1] + "Prata")
          break;
        case false:
            if(xp > 5001 && xp < 7000){
                 console.log( frase[0] + nome + frase[1] + "Ouro")
            }
            else if (xp > 7001 && xp < 8000){
                 console.log( frase[0] + nome + frase[1] + "Platina")
            }
            else if (xp > 8001 && xp < 9000)
                 console.log( frase[0] + nome + frase[1] + "Ascendente")
          break;
        default:
}
if(xp > 9001 && xp < 10000){
    console.log( frase[0] + nome + frase[1] + "Imortal")
}
else if (xp >= 10001){
        console.log( frase[0] + nome + frase[1] + "Radiante")
}

