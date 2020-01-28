let num = [9,4,1] // posicao 0,1,3 secessivamente
console.log(`Os numeros da variavel sao ${num}`)
num.sort()//Organiza em ordem crescente
console.log(`${num}`)
num[3] = 6//Adicionando manualmente numero
console.log(`Adicionado ${num[3]}. Variavel agora ${num}`)
num.push(5)//adicionar automaticamente no ultimo espaco
console.log(`Agora ${num}`)
console.log(`Vetor tem ${num.length} posicoes`)
for(let pos = 0; pos < num.length; pos++){//For para vetor
    console.log(`A posicao ${pos} tem o numero ${num[pos]}`)
}
for(let pos in num){
    console.log(`pos ${pos} valor ${num[pos]}`)
}
valor9 = num.indexOf(9)//Puxar indice vetor
console.log(`pos =${valor9} Vetor=${num}`)