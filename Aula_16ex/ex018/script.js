let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){ // recebe um valor e retorna se o valor é de 1 a 100
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  } else {
    return false
  }
}

function inLista(n, l){ // recebe um valor e a lista e retorna se o valor não está na lista
  if(l.indexOf(Number(n)) != -1){
    return true
  } else {
    return false
  }
}

function adicionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){ // só vai adicionar se for um número de 1 a 100 e não estiver na lista
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild(item)
    res.innerHTML = ''
  } else{
    window.alert('Valor inválido ou já encontrado na lista.')
  }
  num.value = ''
  num.focus()
}

function finalizar(){
  if(valores.length == 0){
    window.alert('Adicione valores antes de finalizar!')
  } else{
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for(let pos in valores){ //vai analisar o valores 1 por 1 e ver qual é o maior e menor
      soma += valores[pos]
      if(valores[pos] > maior)
        maior = valores[pos]
      if(valores[pos] < menor)
        menor = valores[pos]
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores é ${media}.</p>`
  }
}