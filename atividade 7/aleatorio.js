function aleatorio(){
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio)

    let mostrar = document.getElementById('resultado');
    mostrar.innerHTML = `<p> Acabei de pensar no numero ${num}.<p>`;

    if(num == 67){
        alert("farmou muita aura!!!!")
    }else if(num == 13){
        alert("Meu presidente")
    }else if(num == 6){
        alert("melhor arcano")
    }
}