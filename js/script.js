window.onload = function () { 

var btn = document.getElementById('btn')          //selecionei o botão

btn.addEventListener('click', (e) => {            // começou o evento de clicar no botão

var data = document.getElementById('data')       // peguei o input do tipo data
console.log(data)

var dataescolhida = new Date(data.value.replace(/-/g, '\/') ).getTime()
console.log(dataescolhida)

var dataatual = new Date().getTime()
console.log(dataatual)


// ---------------obtendo o tempo restante-------------------------//

var tempoRestante = dataescolhida - dataatual
console.log(tempoRestante)

// ----------------convertendo as datas--------------------------- //

var dias = parseInt(tempoRestante / (1000 * 60 * 60 * 24))
console.log(dias) 
tempoRestante -= dias * (1000 * 60 * 60 * 24)

var horas = parseInt(tempoRestante / (1000 * 60 *60))
console.log(horas)
tempoRestante -= horas * (1000 * 60 * 60 )

var minutos = parseInt(tempoRestante / (1000 * 60))
console.log(minutos)
tempoRestante -= minutos * (1000 * 60)

var segundos = parseInt( tempoRestante / 1000)
console.log(segundos)



//------------------------armazenando dados-----------------------------//

localStorage.setItem('dias', dias)
localStorage.setItem('horas', horas)
localStorage.setItem('minutos', minutos)
localStorage.setItem('segundos', segundos)

//------------------------validando e redirecionando-----------------------------//

 if(isNaN(dias) || isNaN(horas) || isNaN(minutos) || isNaN(segundos)){
    alert("Coloque uma Data válida")
 }else{
window.location.href = "contador.html";
 }


})

}
