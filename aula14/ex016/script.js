function contagem() {
    const inicio = document.querySelector('#txti')
    const fim = document.querySelector('#txtf')
    const passo = document.querySelector('#txtp')
    const result = document.querySelector('#result')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        result.innerHTML = 'Impossível contar!'
        // window.alert('[ERRO] Faltam dados!')
    } else {
        result.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if ( p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1.')
            p = 1
        }

        if ( i < f){
            for(let c = i;c <= f;c += p) {
                result.innerHTML += `${c} 👉`
            }
        } else {
            for(let c = i;c >= f;c -= p) {
                result.innerHTML += `${c} 👉`
            }
        }
        result.innerHTML += `🏳️`
    }
}