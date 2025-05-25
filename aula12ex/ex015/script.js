function verificar() {
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.querySelector('#ano')
    const result = document.querySelector('#result')
    if (fano.value.length == 0 || Number(fano.value) > ano || Number(fano.value) < 1900) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        const fsex = document.getElementsByName('sex')
        const idade = ano - Number(fano.value)
        let genero = ''
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10 ) {
                //CRIANÇA
                img.src = 'foto-bebe-m.png'
            } else if (idade <= 21) {
                //JOVEM
                img.src = 'foto-jovem-m.png'
            } else if (idade <= 50) {
                //ADULTO
                img.src = 'foto-adulto-m.png'
            } else {
                //IDOSO
                img.src = 'foto-idoso-m.png'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10 ) {
                //CRIANÇA
                img.src = 'foto-bebe-f.png'
            } else if (idade <= 21) {
                //JOVEM
                img.src = 'foto-jovem-f.png'
            } else if (idade <= 50) {
                //ADULTO
                img.src = 'foto-adulto-f.png'
            } else {
                //IDOSO
                img.src = 'foto-idoso-f.png'
            }
        }
        result.innerHTML = ''
        result.style.textAlign = 'center'

        const texto = document.createElement('p')
        texto.textContent = `Detectamos ${genero} com ${idade} anos.`

        result.appendChild(img)
        result.appendChild(texto)
    }
}