const dadosJSON = require("./dados.json")

let menorValor = dadosJSON[0]["valor"]
let maiorValor = dadosJSON[0]["valor"]
let total = 0
let contador = 0

for (i = 0;i<dadosJSON.length;i++){
    if (dadosJSON[i]["valor"]>maiorValor){
        maiorValor = dadosJSON[i]["valor"]
    }
    else if (dadosJSON[i]["valor"]<menorValor){
        menorValor = dadosJSON[i]["valor"]
    }
    total += dadosJSON[i]["valor"]
}

let media = total/dadosJSON.length

for (i = 0;i<dadosJSON.length;i++){
    if (dadosJSON[i]["valor"]>media){
        contador += 1
    }
}

console.log(`O menor faturamento foi: ${menorValor}\n
O maior valor foi: ${maiorValor}\n
O número de dias com faturamento acima da média foi: ${contador}`)