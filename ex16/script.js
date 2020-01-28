function contar() {
    var ini = document.getElementById(`txtinicio`)
    var fi = document.getElementById(`txtfim`)
    var pas = document.getElementById(`txtpas`)
    var res = document.querySelector(`div#res`)
    res.innerHTML = ``
    
    if (ini.value.length == 0 || fi.value.length == 0 || pas.value.length == 0) {
        window.alert(`ERRO, Preecher dados!`)
    } else {
        var inicio = Number(txtinicio.value)
        var fim = Number(txtfim.value)
        var passo = Number(txtpas.value)
        res.innerHTML = `Contando:<br>`
        if (passo == 0) {
            window.alert(`Impossivel considerar passo 0, considerando passo 1.`)
            passo = 1
        }
        if (inicio <= fim){
            for (let c = inicio; c <= fim; c += passo){
            res.innerHTML += `  ${c}`
            }
        }
        for (let c = inicio; c >= fim; c -= passo){
            res.innerHTML += `  ${c}`          
        }
        res.innerHTML += `<br>Fim.`        
    }
}
