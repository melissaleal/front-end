/*
Autora ----------- Melissa Leal (https://github.com/melissaleal)
Instituicao ------ FATEC Marilia
Curso ------------ Desenvolvimento de Software Multiplataforma 
Materia ---------- Desenvolvimento Web I
Conteudo --------- Condicinais no JavaScript
Atividade -------- Exercicio de aula
Data de criacao -- 22/04/2024
*/

function Calculo(opCalculo, num1, num2){
    let resultadoCalculo = 0;
    if (opCalculo == "+") {
        resultadoCalculo = num1 + num2;
    } else if (opCalculo == "-") {
        resultadoCalculo = num1 - num2;
    } else if (opCalculo == "*") {
        resultadoCalculo = num1 * num2;
    } else {
        resultadoCalculo = num1 / num2;
    }
    return resultadoCalculo;
}

function Calcular(){
    let n1 = parseFloat(document.getElementById("n1").value);
    //.value pega o valor do elemento e armazena em n1
    let n2 = parseFloat(document.getElementById("n2").value);
    let opCalcular = document.querySelector("input[name=op]:checked");
    //qual o seletor css ele deve encontrar e retornar
    if (opCalcular != null){
        opCalcular = opCalcular.value;
        let resultadoCalcular = 0;
        resultadoCalcular = Calculo(opCalcular, n1, n2);
        document.getElementById("resultadoFinal").innerHTML = "Resultado = " + resultadoCalcular;
    }
    return false;
}

document.getElementById("btnClicar").addEventListener("click", Calcular);