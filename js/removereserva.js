// REMOÇÃO DE RESERVAS


let tabela = document.querySelector('#tbReservas')

tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fadeOut')

    setTimeout(function(){
        event.target.parentNode.remove()
    }, 500)
  
})