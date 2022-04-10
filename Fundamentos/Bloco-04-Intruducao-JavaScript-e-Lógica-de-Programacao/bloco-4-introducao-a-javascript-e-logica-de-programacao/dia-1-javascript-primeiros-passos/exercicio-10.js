// Escreva um programa que se inicie com dois valores em duas
// constantes diferentes: o custo de um produto e seu valor de venda.
// partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) 
// a empresa terá ao vender mil desses produtos
const costProd = 20 ;
const valueSale = 30 ; 

let taxes = 1.2;

if (costProd  <=0 || valueSale <=0 || taxes <=0) {

    console.log("Erro, não é permitido valores menores que 0")
} else {
    let valueTotalCost;
    let profit;

    valueTotalCost = costProd * taxes;

    profit = valueSale - valueTotalCost;

    profit = profit * 1000;


    console.log( profit);



}
