function carregar( ){
var msg = window.document.getElementById(`msg`)
var img = window.document.querySelector(`img`)
var res = window.document.getElementById(`res`)
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora sao ${hora} horas.`
if (hora < 6) {
    res.innerHTML = `Boa madrugada.`
    img.src = 'madrugada.png'
    document.body.style.background = `#be5650`
} else if (hora < 12){
    res.innerHTML = `Bom dia.`
     img.src = 'dia.png'
     document.body.style.background = `#d9d2d2`
   } else if (hora< 18) {
    res.innerHTML = `Boa tarde.`
    img.src = 'tarde.png'
    document.body.style.background = `#9a743d`
} else {
    res.innerHTML = `Boa noite.`
    img.src = 'noite.png'
    document.body.style.background = `#304147`
}
}