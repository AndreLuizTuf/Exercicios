// Exercicio 1 - Soma de todos os números ímpares múltiplos de três entre 1 e 500
function exercício1() {
    let sum = 0;
    for (let i = 1; i <= 500; i++) {
        if (i % 3 === 0 && i % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}

const result = exercício1();
document.getElementById('resultado1').textContent = `A soma é: ${result}`;
  
  
  // Exercicio 2 - Leitura de 15 alturas e cálculo da maior e menor altura
  function exercicio2() {
    const alturas = [1.72, 1.85, 1.60, 1.75, 1.90, 1.65, 1.70, 1.80, 1.78, 1.73, 1.82, 1.60, 1.66, 1.79, 1.81];
    let menorAltura = Math.min(...alturas);
    let maiorAltura = Math.max(...alturas);
    document.getElementById("resultado2").textContent = `Menor altura: ${menorAltura}\nMaior altura: ${maiorAltura}`;
  }
  
  // Exercicio 3 - Média, quantidade de valores positivos e negativos, e percentuais
  function exercicio3() {
    const valores = [5, -3, 9, 0, -7, 6, -2, 8];
    let soma = 0, positivos = 0, negativos = 0;
  
    for (let valor of valores) {
      soma += valor;
      if (valor > 0) {
        positivos++;
      } else if (valor < 0) {
        negativos++;
      }
    }
  
    let media = soma / valores.length;
    let percentPositivos = (positivos / valores.length) * 100;
    let percentNegativos = (negativos / valores.length) * 100;
  
    document.getElementById("resultado3").textContent = 
      `Média: ${media}\nPositivos: ${positivos}\nNegativos: ${negativos}\nPositivos (%): ${percentPositivos}%\nNegativos (%): ${percentNegativos}%`;
  }
  
  // Exercicio 4 - Contagem de números em intervalos
  function exercicio4() {
    const numeros = [12, 37, 64, 82, 19, 53, -1];
    let intervalo1 = 0, intervalo2 = 0, intervalo3 = 0, intervalo4 = 0;
  
    for (let numero of numeros) {
      if (numero < 0) break;
      if (numero <= 25) intervalo1++;
      else if (numero <= 50) intervalo2++;
      else if (numero <= 75) intervalo3++;
      else if (numero <= 100) intervalo4++;
    }
  
    document.getElementById("resultado4").textContent = 
      `[0-25]: ${intervalo1}\n[26-50]: ${intervalo2}\n[51-75]: ${intervalo3}\n[76-100]: ${intervalo4}`;
  }
  
  // Exercicio 5 - Cálculo da quantidade de pares, ímpares, média dos pares e média geral
  function exercicio5() {
    const numeros = [10, 15, 20, 25, 0];
    let pares = 0, impares = 0, somaPares = 0, somaTotal = 0;
  
    for (let numero of numeros) {
      if (numero === 0) break;
      somaTotal += numero;
      if (numero % 2 === 0) {
        pares++;
        somaPares += numero;
      } else {
        impares++;
      }
    }
  
    let mediaPares = somaPares / pares;
    let mediaGeral = somaTotal / (pares + impares);
  
    document.getElementById("resultado5").textContent = 
      `Pares: ${pares}\nÍmpares: ${impares}\nMédia dos pares: ${mediaPares}\nMédia geral: ${mediaGeral}`;
  }
  
  // Exercicio 6 - Números ímpares entre 100 e 200
  function exercicio6() {
    let resultado = '';
    for (let i = 101; i < 200; i += 2) {
      resultado += i + '\n';
    }
    document.getElementById("resultado6").textContent = resultado;
  }
  
  // Exercicio 7 - Tabuada de N
  function exercicio7() {
    const N = 7;
    let resultado = '';
    for (let i = 0; i <= 10; i++) {
      resultado += `${i} x ${N} = ${i * N}\n`;
    }
    document.getElementById("resultado7").textContent = resultado;
  }
  
  // Exercicio 8 - Sequência em P.A. com 10 valores
  function exercicio8() {
    const A = 2;
    const R = 3;
    let resultado = '';
    for (let i = 0; i < 10; i++) {
      resultado += A + i * R + '\n';
    }
    document.getElementById("resultado8").textContent = resultado;
  }
  
  // Exercicio 9 - Sequência em P.G. com 10 valores
  function exercicio9() {
    const A = 2;
    const R = 3;
    let resultado = '';
    for (let i = 0; i < 10; i++) {
      resultado += A * Math.pow(R, i) + '\n';
    }
    document.getElementById("resultado9").textContent = resultado;
  }
  
  // Exercicio 10 - Cálculo do fatorial e a sequência
  function exercicio10() {
    const A = 5;
    let fatorial = 1;
    let sequencia = '';
  
    for (let i = A; i > 0; i--) {
      fatorial *= i;
      sequencia += i + (i > 1 ? ' x ' : '');
    }
  
    document.getElementById("resultado10").textContent = `${A}! = ${sequencia} = ${fatorial}`;
  }
  