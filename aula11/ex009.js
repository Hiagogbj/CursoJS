function verificarPais() {
    const pais = document.querySelector('#pais')
    const res = document.querySelector('#result')
    const valor = pais.value.trim()

    if (valor.toLowerCase() === "brasil") {
        res.innerHTML += `<p>Você é Brasileiro(a)!</p>`
    } else {
        res.innerHTML += `<p>Você é Estrangeiro(a)!</p>`
    }
}