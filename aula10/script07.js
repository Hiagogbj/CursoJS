function somar() {
    const tn1 = document.querySelector('#txtn1')
    const tn2 = document.querySelector("#txtn2")
    const res= document.querySelector('#result')
    const n1 = Number(tn1.value)
    const n2 = Number(tn2.value)
    const soma = n1 + n2  
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${soma}`       
}