function calcular(){
    let num = document.getElementById(`txtn`)
    let tab = document.getElementById(`seltab`)
    if (num.value.length == 0){
        window.alert(`Digite um numero!`)
    }
        tab.innerHTML=``
        let n = Number(num.value)
        for (let c = 1;c<=10;c++){
            let item = document.createElement(`option`) // cria option html
            item.text = `${n} x ${c} = ${n*c}`//txt da option
            item.value = `tab${c}`//value da OPTION usado em PHP
            tab.appendChild(item)// cria filho item na tabela
           }               
}