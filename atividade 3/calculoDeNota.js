let nota1tri;
let nota2tri;
let resultado;

function calcular() {
    nota1tri = Number(prompt("qual foi sua nota no primeiro trimestre?"));
    nota2tri = Number(prompt("qual foi sua nota no segundo trimestre?"));

    resultado = 180 - (nota1tri + nota2tri);

    alert(resultado);
}
