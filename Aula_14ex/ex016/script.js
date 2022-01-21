function contar(){
    var fpas = document.getElementById('txtpas')
    var fini = document.getElementById('txtini')
    var ffim = document.getElementById('txtfim')
    //var res = document.getElementById('res')
    
    var s = inicio + passo - passo
    s = s + passo
    
    if (fini.value.length == 0 || ffim.value.length == 0 || fpas.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        var passo   = Number(fpas.value)
        var inicio  = Number(fini.value)
        var final   = Number(ffim.value)
        if(passo <= 0){
            window.alert('Passo inválido! Considerando passo 1')
            passo = 1
        }
        if(inicio < final){
            for (var i = inicio; i <= final; i = i + passo){ // Contagem crescente
                res.innerHTML += ` ${i} \u{1F449}`
            }
            
        } else{
            for(let i = inicio; i >= final; i = i - passo){ // Contagem regressiva
                res.innerHTML += ` ${i} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    } 
}