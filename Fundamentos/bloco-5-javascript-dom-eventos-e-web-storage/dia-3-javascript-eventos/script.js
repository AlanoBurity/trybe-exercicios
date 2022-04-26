function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  
  
 
  
 function daysOfMonth (){
  
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
 
  let diasDoMes =  document.querySelector('#days');
  

  for( let index = 0; index < dezDaysList.length; index +=1){
    let dias = dezDaysList[index]; 
  
    let diasDoMesListItem = document.createElement('li');
    diasDoMesListItem.innerHTML = dias;
    diasDoMesListItem.className = 'day';

    diasDoMes.appendChild(diasDoMesListItem);

    if ( dias === 24 || dias === 25 || dias === 31){
      diasDoMesListItem.className = 'day holiday'; 
     
    }
    if ( dias === 4 || dias === 11 || dias === 18 || dias === 25){
      diasDoMesListItem.className = 'day friday';
    }
   } 
  }
  daysOfMonth()


//2
const botaoContainer = document.querySelector('.buttons-container');

function criaBotao(string){
 
 const botao = document.createElement('button');
 botao.id = 'btn-holiday';
 botao.innerText = string;
 botaoContainer.appendChild(botao);
 
}
criaBotao('Feriado');
 

const capturarBotaoFeriado = document.querySelector('#btn-holiday');

const 
capturarBotaoFeriado.addEventListener('click', alterarCorDoBotao);

function alterarCorDoBotao (){

  capturarBotaoFeriado.style.backgroundColor = 'red';
  console.log("cliquei")



}







