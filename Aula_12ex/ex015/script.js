function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') //dados de ano do usuário
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Errou')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', 'foto_bebe_m.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'foto_jovem_m.png')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'foto_adulto_m.png')
            } else{
                //idoso
                img.setAttribute('src', 'foto_idoso_m.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', 'foto_bebe_f.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'foto_jovem_f.png')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'foto_adulto_f.png')
            } else{
                //idoso
                img.setAttribute('src', 'foto_idoso_f.png')
            }
        }
        res.style.texAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}