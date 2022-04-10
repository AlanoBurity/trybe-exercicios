// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
// Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.


let salary = 3000;
let netSalary;

let inssFaixa1 = 0.08;
let inssFaixa2 = 0.09;
let inssFaixa3 = 0.11;
let inssFaixa4 = 570.0;

let deducaoInss ; 
let deducaoIr ; 

if (salary  <= 1556.94){

    deducaoInss = salary -(salary * inssFaixa1) 

    deducaoIr = deducaoInss

    
}else  if (salary  >= 1556.95  && salary <= 2594.92) {

    deducaoInss = salary -(salary * inssFaixa2) 

    
}else  if (salary  >= 2594.93  && salary <= 5189.82) {

    deducaoInss = salary -(salary * inssFaixa3) 

}else  if (salary  >= 5189.82) {

    deducaoInss = salary -inssFaixa4 
   
}

if (deducaoInss <= 1903 ){

    console.log ( "Isento de IR, seu salário é:" , deducaoInss)

}else if (deducaoInss >= 1903.99 && deducaoInss <= 2826.65){

    deducaoIr =  (deducaoInss * 0.075) - 142.80;
    netSalary = deducaoInss - deducaoIr;
    console.log ("Seu salário líquido é:" , netSalary,"R$");


} else if (deducaoInss >= 2826.66 && deducaoInss <= 3751.05){

    deducaoIr =  (deducaoInss * 0.15) - 354.80;
    netSalary = deducaoInss - deducaoIr;
    console.log ("Seu salário líquido é:" , netSalary,"R$");

}else if (deducaoInss >= 3751.06 && deducaoInss <= 4664.68){

    deducaoIr =  (deducaoInss * 0.225) - 636.13;
    netSalary = deducaoInss - deducaoIr;
    console.log ("Seu salário líquido é:" , netSalary,"R$");
}else if (deducaoInss >= 4664.68){

    deducaoIr =  (deducaoInss * 0.275) - 869.36;
    netSalary = deducaoInss - deducaoIr;
    console.log ("Seu salário líquido é:" , netSalary,"R$");
}
