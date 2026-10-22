function Maior(){
    let numero1;
    let numero2;

    numero1 = Number(prompt("digite o primeiro numero:"));
    numero2 = Number(prompt("digite o segundo numero:"));

    if(numero1 > numero2){
        alert("o numero " + numero1 + " é maior que o numero " + numero2)
    }else if(numero1 < numero2){
        alert("O numero " + numero2 + " é maior que o numero " + numero1)
    }else{
        alert("os dois numeros são iguais jegue")
    }
}