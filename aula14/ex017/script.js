function tabuada() {
    const n = document.getElementById('txtn')
    const tab = document.getElementById('seltab')
    
    if(n.value.length == 0 ){
        window.alert('[ERRO] Digite um número!')
    } else {
        const num = Number(n.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10;c++) {
            let item = document.createElement('option')
            item.innerText = `${num} x ${c} = ${num*c}` 
            item.value = `tab ${c}`
            tab.appendChild(item)
        }
    }
}