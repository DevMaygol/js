let task = document.querySelector('input#tar')
let res = document.querySelector('div#res')
let col = document.querySelector('div#coloca')
let exclui = document.getElementById('limp')
let tarefas = []

function add_task(){
    if((task.value) == 0) window.alert('Escreva algo, por favor.')
    else {
        tarefas.push(task.value)        
        res.innerHTML += (`<p>${tarefas.indexOf(task.value)}. ${task.value}</p>`)
        const btn = document.createElement("button")
        btn.id = 'button'
        btn.innerHTML = "X"
        res.appendChild(btn)
        if(btn.clicked == true)
        {
            window.alert("button was clicked");
        }
        if (btn.clicked){
            res.innerHTML += 'entrou'
            res.innerHTML = ''
            if(tarefas.length == 0){
                window.alert("A lista está vazia.")
                res.innerHTML = ''
            } else {
                tarefas.pop();
                for(let pos in tarefas){
                    res.innerHTML += `<p>${pos}. ${tarefas[pos]}</p>`    
                }
            }
        }
    }
    task.value = ''
    task.focus()
}
/*
function limpa(){
    res.innerHTML = ''
    if(tarefas.length == 0){
        window.alert("A lista está vazia.")
        res.innerHTML = ''
    } else {
        tarefas.pop();
        for(let pos in tarefas){
            res.innerHTML += `<p>${pos}. ${tarefas[pos]}</p>`    
        }
    }
}
*/