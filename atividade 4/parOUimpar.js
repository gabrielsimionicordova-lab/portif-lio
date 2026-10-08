function ParOUImpar(){
    let numero = Number(prompt("informe o numero: "));

    let resultado  = numero % 2;

    if(numero == 6){
        alert ("melhor arcano do tarô");
    }
    if(resultado == 0){
        alert ("o número " + numero + " é par!!!");
    }
    else{
        alert ("o número " + numero +  " é ímpar!!!");
    }
}