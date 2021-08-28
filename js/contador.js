//------------------------slecionando os elementos html-----------------------------//
var diastela = document.getElementById('dias')
var horastela = document.getElementById('horas')
var minutostela = document.getElementById('minutos')
var segundostela = document.getElementById('segundos')

//--------------------recuperando os valores do localstorage-----------------------------//

var diasArmazenados = parseInt(localStorage.getItem('dias'))
var horasArmazenadas = parseInt(localStorage.getItem('horas'))
var minutosArmazenados = parseInt(localStorage.getItem('minutos'))
var segundosArmazenados = parseInt(localStorage.getItem('segundos'))

//--------------------aplicando a logica de um countdown-----------------------------//
var contagem = setInterval(() => {
    

 diastela.innerHTML = diasArmazenados
 horastela.innerHTML = horasArmazenadas
 minutostela.innerHTML = minutosArmazenados
 segundostela.innerHTML = segundosArmazenados

  if(segundosArmazenados > 0){segundosArmazenados--}
  else if(minutosArmazenados > 0){
      minutosArmazenados--
      segundosArmazenados = 59
  }else if(horasArmazenadas > 0 ){
      horasArmazenadas--
      minutosArmazenados = 59
      segundosArmazenados = 59
  }else if(diasArmazenados > 0){
      diasArmazenados--
      horasArmazenadas = 23
      minutosArmazenados = 59
      segundosArmazenados = 59
  }else{
      alert('CHEGOU A HORA !!!!!!!!!!!!!!!!')
      clearInterval(contagem)
  }

  //--------------------colocando um zero a esquerda-----------------------------// 

  diastela.innerHTML = diastela.innerHTML  < 10 ? "0" + diastela.innerHTML : diastela.innerHTML
  horastela.innerHTML = horastela.innerHTML < 10 ? "0" + horastela.innerHTML : horastela.innerHTML
  minutostela.innerHTML = minutostela.innerHTML < 10 ? "0" + minutostela.innerHTML : minutostela.innerHTML
  segundostela.innerHTML = segundostela.innerHTML < 10 ? "0" +  segundostela.innerHTML :  segundostela.innerHTML


  
     
}, 1000);



//--------------------voltando pra pagina inicial-----------------------------//

var btn = document.getElementById('btn2')
btn.addEventListener('click', ()=>{

    localStorage.clear
    window.location.href = "index.html";



})




