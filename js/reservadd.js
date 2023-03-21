//ADICIONAR RESERVAS NA TABELA TENTATIVA 

// function cadReserva (nome, veiculo, data, hora) {

// var tb          = document.querySelector('#tbReservas'); //pega os elemetos da tabela 
// var qtdLinhas   = tb.rows.legth; //quantidade de linhas que existem na tabela 
// let linha       = tb.inserRow('qtdLinhas'); //qual a ultima linha da tabela, isere mais uma..

// //inserindo as colunas na tabela

// var cellNome    = linha.insertCell(0);
// var cellVeiculo = linha.insertCell(1);
// var cellData    = linha.insertCell(2);
// var cellHora    = linha.insertCell(3);

// // Inserir o conteudo do formulário nas tabelas/células da tabela

// cellNome.innerHTML('tbReservas')    = nome;
// cellVeiculo.innerHTML('tbReservas') = veiculo;
// cellData.innerHTML('tbReservas')    = data;
// cellHora.iinerHTML('tbReservas')    = hora;

// }

// ---------------------------------------------------------------------------------



// ADICIONAR RESERVAS NA TABELA TENTATIVA 2


let botaoAdicionar = document.querySelector('#adicionar-reserva')
botaoAdicionar.addEventListener('click', function(evento) {

    evento.preventDefault()

    let form = document.querySelector('#addreserva')

   let reserva = obterValoresDoForm(form)
   adicionaReservaNaTabela(reserva)
})

function adicionaReservaNaTabela(reserva){
    let reservaTr = montarTr(reserva)
    let tabela = document.querySelector('#tbReservas')
    tabela.appendChild(reservaTr)
}


function montarTr(reserva){
    let reservaTr = document.createElement('tr')
    reservaTr.classList.add('reserva')
    reservaTr.appendChild(montarTd(reserva.nome, 'info-nome'))
    reservaTr.appendChild(montarTd(reserva.veiculo, 'info-veiculo'))
    reservaTr.appendChild(montarTd(reserva.data, 'info-data'))
    reservaTr.appendChild(montarTd(reserva.hora, 'info-hora'))
    reservaTr.appendChild(montarTd(reserva.status, 'info-hora'))
    
    return reservaTr
}

function montarTd(dado, classe){
    //criando um elemento td
    let td = document.createElement('td')
    td.textContent = dado
    //classList define a classe do elemento HTML
    td.classList.add(classe)
    
    return td
}

function  obterValoresDoForm(form){ //Dizendo onde serão aplicados os novos dados
 let reserva = {
    nome: form.nome.value,
    veiculo: form.veiculo.value,
    data: form.data.value,
    hora: form.hora.value,
    status: form.status.value
 }
 return reserva
}
