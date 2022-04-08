let pecaXadrez = 'ALOW';

let peca = pecaXadrez.toLowerCase();

if (peca === "peão" || peca === "bispo" || peca === "torre" || peca === "cavalo" || peca === "rainha" || peca === "rei" ) {



  switch (peca) {
      case "peão":
      console.log ("Uma casa para frente");
      break;

      case "bispo":
      console.log ("Diagonal");
      break;

      case "torre":
      console.log (" Em reta na Coluna ou fileira");
      break;
      

      case "cavalo":
      console.log ("Sempre em L");
      break;

      case "Rainha":
      console.log ("Coluna, fileira ou diagonal");
      break;

      case "rei":
      console.log ("todas as direções e em apenas uma casa");
      break;
  
    }
}else {
    console.log("erro");
}