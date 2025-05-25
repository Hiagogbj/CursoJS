function calcular() {
    const txtvel = document.querySelector('#txtvel')
    const res = document.querySelector('#result')
    const vel = Number(txtvel.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`

    if(vel > 60) {
        res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade!</p>`
    }

    res.innerHTML += `<p>Dirija sempre com o cinto de segurança!</p>`

}