// Exercício 1
function exercicio1() {
    let A = parseFloat(prompt("Digite o valor de A: ").replace(",", "."));
    let B = parseFloat(prompt("Digite o valor de B: ").replace(",", "."));
    let C = parseFloat(prompt("Digite o valor de C: ").replace(",", "."));

    let resultado;
    if (A + B < C) {
        resultado = "A soma de A + B é menor que C";
    } else {
        resultado = "A soma de A + B é maior que C";
    }

    document.getElementById("resultado1").innerHTML = resultado;
}

// Exercício 2
function exercicio2() {
    let sexo = prompt("Digite o sexo (M/F):").toUpperCase();
    let estadoCivil = prompt("Digite o estado civil:").toUpperCase();

    let resultado;
    if (sexo === "F" && estadoCivil === "CASADA") {
        let tempoCasada = parseInt(prompt("Digite o tempo de casada (anos):"));
        resultado = `Tempo de casada: ${tempoCasada} anos.`;
    } else {
        resultado = "Não é possível calcular o tempo de casada.";
    }

    document.getElementById("resultado2").innerHTML = resultado;
}

// Exercício 3
function exercicio3() {
    let numero = parseInt(prompt("Digite um número:"));

    let resultado;
    if (numero % 2 === 0) {
        resultado = "O número é par.";
    } else {
        resultado = "O número é ímpar.";
    }

    document.getElementById("resultado3").innerHTML = resultado;
}

// Exercício 4
function exercicio4() {
    let A = parseInt(prompt("Digite o valor de A:"));
    let B = parseInt(prompt("Digite o valor de B:"));
    let resultado;

    if (A === B) {
        resultado = `${A} + ${B} = ${A + B}`;
    } else {
        resultado = `${A} * ${B} = ${A * B}`;
    }

    document.getElementById("resultado4").innerHTML = resultado;
}

// Exercício 5
function exercicio5() {
    let numero = parseFloat(prompt("Digite um número:"));

    let resultado;
    if (numero > 0) {
        resultado = `${numero} * 2 = ${numero * 2}`;
    } else {
        resultado = `${numero} * 3 = ${numero * 3}`;
    }

    document.getElementById("resultado5").innerHTML = resultado;
}

// Exercício 6
function exercicio6() {
    let valor1 = Boolean(prompt("Digite o primeiro valor booleano (true/false):") === "true");
    let valor2 = Boolean(prompt("Digite o segundo valor booleano (true/false):") === "true");

    let resultado;
    if (valor1 === valor2) {
        resultado = "Ambos são VERDADEIROS ou FALSOS.";
    } else {
        resultado = "Os valores são diferentes.";
    }

    document.getElementById("resultado6").innerHTML = resultado;
}

// Exercício 7
function exercicio7() {
    let numero = parseInt(prompt("Digite um número:"));

    let resultado;
    if (numero % 2 === 0) {
        resultado = `${numero} + 5 = ${numero + 5}`;
    } else {
        resultado = `${numero} + 8 = ${numero + 8}`;
    }

    document.getElementById("resultado7").innerHTML = resultado;
}

// Exercício 8
function exercicio8() {
    let num1 = parseInt(prompt("Digite o primeiro número:"));
    let num2 = parseInt(prompt("Digite o segundo número:"));
    let num3 = parseInt(prompt("Digite o terceiro número:"));

    let numeros = [num1, num2, num3];
    numeros.sort((a, b) => b - a);

    document.getElementById("resultado8").innerHTML = `Números em ordem decrescente: ${numeros.join(', ')}`;
}

// Exercício 9
function exercicio9() {
    let altura = parseFloat(prompt("Digite sua altura (em metros):"));
    let sexo = prompt("Digite o sexo (M/F):").toUpperCase();
    let pesoIdeal;

    if (sexo === "M") {
        pesoIdeal = 72.7 * altura - 58;
    } else if (sexo === "F") {
        pesoIdeal = 62.1 * altura - 44.7;
    }

    document.getElementById("resultado9").innerHTML = `O peso ideal é: ${pesoIdeal.toFixed(2)} kg`;
}

// Exercício 10
function exercicio10() {
    let peso = parseFloat(prompt("Digite seu peso (em kg):"));
    let altura = parseFloat(prompt("Digite sua altura (em metros):"));

    let imc = peso / (altura * altura);

    let resultado;
    if (imc < 18.5) {
        resultado = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        resultado = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        resultado = "Acima do peso";
    } else {
        resultado = "Obeso";
    }

    document.getElementById("resultado10").innerHTML = resultado;
}

// Exercício 11

function exercicio11() {
    let precoEtiqueta = parseFloat(prompt("Digite o preço do produto:"));
    let codigoPagamento = parseInt(prompt("Digite o código de pagamento (1-4):"));
    let valorFinal;

    switch (codigoPagamento) {
        case 1:
            valorFinal = precoEtiqueta * 0.9;
            break;
        case 2:
            valorFinal = precoEtiqueta * 0.85;
            break;
        case 3:
            valorFinal = precoEtiqueta;
            break;
        case 4:
            valorFinal = precoEtiqueta * 1.1;
            break;
        default:
            valorFinal = "Código de pagamento inválido.";
            break;
    }

    document.getElementById("resultado11").innerHTML = `O valor final a ser pago é: R$ ${typeof valorFinal === 'number' ? valorFinal.toFixed(2) : valorFinal}`;
}

// Exercício 12

function exercicio12() {
    let numeroAluno = parseInt(prompt("Digite o número do aluno:"));
    let nota1 = parseFloat(prompt("Digite a nota 1:"));
    let nota2 = parseFloat(prompt("Digite a nota 2:"));
    let nota3 = parseFloat(prompt("Digite a nota 3:"));
    let mediaExercicios = parseFloat(prompt("Digite a média dos exercícios:"));

    let mediaAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios) / 7;
    let conceito;

    if (mediaAproveitamento >= 90) {
        conceito = "A";
    } else if (mediaAproveitamento >= 75 && mediaAproveitamento < 90) {
        conceito = "B";
    } else if (mediaAproveitamento >= 60 && mediaAproveitamento < 75) {
        conceito = "C";
    } else if (mediaAproveitamento >= 40 && mediaAproveitamento < 60) {
        conceito = "D";
    } else {
        conceito = "E";
    }

    let situacao = conceito === "A" || conceito === "B" || conceito === "C" ? "Aprovado" : "Reprovado";

    let resultado = `
        Número do Aluno: ${numeroAluno}<br>
        Notas: ${nota1}, ${nota2}, ${nota3}<br>
        Média dos Exercícios: ${mediaExercicios}<br>
        Média de Aproveitamento: ${mediaAproveitamento.toFixed(2)}<br>
        Conceito: ${conceito}<br>
        Situação: ${situacao}
    `;

    document.getElementById("resultado12").innerHTML = resultado;
}