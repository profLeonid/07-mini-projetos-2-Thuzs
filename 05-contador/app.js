'use script'
function criarListaNumeros (quantidade) {
    let listaNumeros = []

    for(let i= 1; i<= quantidade; i++){
        listaNumeros.push(i)
    }
    console.log(listaNumeros)
    return listaNumeros
}


function criarListaPares (quantidade){
    let listaPares = []

    for(let i=2; i <= 2 * quantidade; i = i + 2){
        listaPares.push(i)
    }
    console.log(listaPares)
    return listaPares
}

function criarListaImpares (quantidade){
    let listaImpares = []

    for(let i=1; i <= 2 * quantidade -1; i = i + 2){
        listaImpares.push(i)
    }
    console.log(listaImpares)
    return listaImpares
}

function criarListaMultiplo5 (quantidade){
    let listaMultiplo = []

    for(let i=5; i <= 5 * quantidade; i = i + 5){
        listaMultiplo.push(i)
    }
    console.log(listaMultiplo)
    return listaMultiplo
}

function criarListaPotencia2 (quantidade){
    let listaPotencia = []

    for(let i=1; i <= 2 ** (quantidade - 1); i = i * 2){
        listaPotencia.push(i)
    }
    console.log(listaPotencia)
    return listaPotencia
}

function criarLinha (cont, par, imp, mult, poten){
    const tabela = document.getElementById('tabela')

    const tr = document.createElement('tr')

    const tdNum = document.createElement('td')
    tdNum.textContent = cont

    const tdPar = document.createElement('td')
    tdPar.textContent = par
    
    const tdImp = document.createElement('td')
    tdImp.textContent = imp

    const tdMult = document.createElement('td')
    tdMult.textContent = mult

    const tdPoten = document.createElement('td')
    tdPoten.textContent = poten

    tr.replaceChildren(tdNum, tdPar, tdImp, tdMult, tdPoten)
    tabela.replaceChild(tr)
  
}

function handleClick(){
    const quantidade = (document.getElementById("quantidade").value)
    const listaNumeros = criarListaNumeros(quantidade)
    const listaPar = criarListaPares(quantidade)
    const listaImpar = criarListaImpares(quantidade)
    const listaMult = criarListaMultiplo5(quantidade)
    const listaPoten = criarListaPotencia2(quantidade)
    for(let i=0 ; i > quantidade; i++){
        criarLinha(listaNumeros[i], listaPar[i], listaImpar[i], listaMult[i], listaPoten[i])
    }
}

