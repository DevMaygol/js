function contar(){
    var fpas = document.getElementById('txtpas')
    var fini = document.getElementById('txtini')
    var ffim = document.querySelector('div#txtfim')
    
    /*if (fini.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        window.alert('valor zerado')
    } else if (fpas.value == 0){
        window.alert('Passo inválido! Considerando PASSO 1')
        fpas = 1
    }*/
    
    //console.log('Vai começar')
    //res.innerHTML = `<p>Contando: </p> ${fini.value}`

    var c = 0
    while(c <= 10){
        res.innerHTML = 'Contando:'
        c++
    }

    res.innerHTML = c+` oi`
    /*
    for (var c = 1; c <= 4; c++){
        res.innerHTML = 'Contando:'
        res.innerHTML = c
        //console.log(c)
    }
    //console.log('Fim')
        //document.querySelector(".element").innerHTML = "👉 &#x1F61C" 
    */
}