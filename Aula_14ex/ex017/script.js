function tabuada(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert("Por favor, digite um número!")
    } else{
        let n = Number(num.value)
        let c = 1 //contador
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`  //adiciona value nas opções da tabuada, 
                                    //para saber qual item foi selecionado
            tab.appendChild(item)
            c++
        }
    }
}