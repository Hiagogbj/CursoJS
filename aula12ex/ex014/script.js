function carregar() {
    const dataAtual = new Date
    const hora = dataAtual.getHours()
    const msg = document.querySelector('#msg')
    const img = document.querySelector('#imagem')
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'img/fotomanha.png'
        document.body.style.backgroundColor = '#b56826'
    } else if (hora < 18) {
        //BOA TARDE!
        img.src = 'img/fototarde.png'
        document.body.style.backgroundColor = '#5d3b27'
    } else {
        //BOA NOITE!
        img.src = 'img/fotonoite.png'
         document.body.style.backgroundColor = '#000f1d'
    }
}