// Exercicio 1 - Soma de todos os números ímpares múltiplos de três entre 1 e 500
function exercício1() {
  const limite = parseInt(document.getElementById('limiteInput').value);
  let sum = 0;

  if (!isNaN(limite) && limite >= 1) {
      for (let i = 1; i <= limite; i++) {
          if (i % 3 === 0 && i % 2 !== 0) {
              sum += i;
          }
      }
      document.getElementById("resultado1").textContent = `A soma é: ${sum}`;
  } else {
      document.getElementById("resultado1").textContent = "Por favor, insira um número válido.";
  }
}
  
  
  // Exercicio 2 - Leitura de 15 alturas e cálculo da maior e menor altura
  function exercício2() {
    const quantidadePessoas = parseInt(document.getElementById('quantidadePessoas').value);
    let alturas = [];
    let menorAltura = Infinity;
    let maiorAltura = -Infinity;

    if (!isNaN(quantidadePessoas) && quantidadePessoas >= 1 && quantidadePessoas <= 15) {
        // Simula entrada de dados (substitua por leitura de teclado se necessário)
        alturas = [1.72, 1.85, 1.60, 1.75, 1.90, 1.65, 1.70, 1.80, 1.78, 1.73, 1.82, 1.60, 1.66, 1.79, 1.81];

        alturas.forEach(height => {
            menorAltura = Math.min(menorAltura, height);
            maiorAltura = Math.max(maiorAltura, height);
        });

        document.getElementById("resultado2").textContent = `Menor altura: ${menorAltura}\nMaior altura: ${maiorAltura}`;
    } else {
        document.getElementById("resultado2").textContent = "Por favor, insira um número válido entre 1 e 15.";
    }
}
  
  // Exercicio 3 - Média, quantidade de valores positivos e negativos, e percentuais
  function exercício3() {
    const valoresStr = document.getElementById('valoresInput').value;
    let valores = valoresStr.split(' ').map(Number);
    
    // Validate input
    if (!valores.every(isFinite)) {
        document.getElementById("resultado3").textContent = "Por favor, insira apenas números separados por espaços.";
        return;
    }

    let soma = 0;
    let positivos = 0;
    let negativos = 0;

    valores.forEach(valor => {
        soma += valor;
        if (valor > 0) {
            positivos++;
        } else if (valor < 0) {
            negativos++;
        }
    });

    const media = soma / valores.length;
    const percentPositivos = (positivos / valores.length) * 100;
    const percentNegativos = (negativos / valores.length) * 100;

    document.getElementById("resultado3").textContent = 
        `Média: ${media.toFixed(2)}\n` +
        `Positivos: ${positivos}\n` +
        `Negativos: ${negativos}\n` +
        `Percentual Positivos: ${percentPositivos.toFixed(2)}%\n` +
        `Percentual Negativos: ${percentNegativos.toFixed(2)}%`;
}
  
  // Exercicio 4 - Contagem de números em intervalos
  function exercício4() {
    const numerosStr = document.getElementById('numerosInput').value;
    let numeros = numerosStr.split(' ').map(Number);
    const parar = parseInt(document.getElementById('pararInput').value);

    // Validate inputs
    if (!numeros.every(isFinite)) {
        document.getElementById("resultado4").textContent = "Por favor, insira apenas números separados por espaços.";
        return;
    }

    if (isNaN(parar) || parar >= 0) {
        document.getElementById("resultado4").textContent = "Por favor, insira um número negativo para parar.";
        return;
    }

    let intervalo1 = 0, intervalo2 = 0, intervalo3 = 0, intervalo4 = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === parar) break;

        if (numeros[i] <= 25) intervalo1++;
        else if (numeros[i] <= 50) intervalo2++;
        else if (numeros[i] <= 75) intervalo3++;
        else if (numeros[i] <= 100) intervalo4++;
    }

    document.getElementById("resultado4").textContent = 
        `[0-25]: ${intervalo1}\n[26-50]: ${intervalo2}\n[51-75]: ${intervalo3}\n[76-100]: ${intervalo4}`;
}
  
  // Exercicio 5 - Cálculo da quantidade de pares, ímpares, média dos pares e média geral
  function exercício5() {
    const numerosStr = document.getElementById('numerosInput').value;
    let numeros = numerosStr.split(' ').map(Number);
    
    // Validate input
    if (!numeros.every(isFinite)) {
        document.getElementById("resultado5").textContent = "Por favor, insira apenas números separados por espaços.";
        return;
    }

    let somaTotal = 0;
    let somaPares = 0;
    let quantidadeTotal = 0;
    let quantidadePares = 0;
    let terminou = false;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === 0) {
            terminou = true;
            break;
        }

        if (numeros[i] <= 0) {
            document.getElementById("resultado5").textContent = "Por favor, insira apenas números positivos.";
            return;
        }

        somaTotal += numeros[i];
        quantidadeTotal++;

        if (numeros[i] % 2 === 0) {
            somaPares += numeros[i];
            quantidadePares++;
        }
    }

    if (!terminou || quantidadeTotal === 0) {
        document.getElementById("resultado5").textContent = "Por favor, insira pelo menos um número positivo e termine com zero.";
        return;
    }

    const mediaGeral = somaTotal / quantidadeTotal;
    const mediaPares = quantidadePares > 0 ? somaPares / quantidadePares : 0;

    document.getElementById("resultado5").textContent = 
        `Quantidade de números pares: ${quantidadePares}\n` +
        `Quantidade de números ímpares: ${quantidadeTotal - quantidadePares}\n` +
        `Média dos valores pares: ${mediaPares.toFixed(2)}\n` +
        `Média geral dos números lidos: ${mediaGeral.toFixed(2)}`;
}

// Call the function when the button is clicked
document.getElementById('exercicio5Button').addEventListener('click', exercício5);
  
  // Exercicio 6 - Números ímpares entre 100 e 200
  function exercício6() {
    const inicio = parseInt(document.getElementById('inicioInput').value);
    const fim = parseInt(document.getElementById('fimInput').value);

    // Validate inputs
    if (isNaN(inicio) || isNaN(fim)) {
        document.getElementById("resultado6").textContent = "Por favor, insira números válidos para o intervalo.";
        return;
    }

    if (inicio >= fim) {
        document.getElementById("resultado6").textContent = "O número inicial deve ser menor que o número final.";
        return;
    }

    let resultado = '';
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 !== 0) {
            resultado += i + '\n';
        }
    }

    document.getElementById("resultado6").textContent = resultado.trim();
}
  
  // Exercicio 7 - Tabuada de N
  function exercício7() {
    const num = parseInt(document.getElementById('numInput').value);
    let resultado = '';
    
    if (!isNaN(num) && num >= 1 && num <= 10) {
        for (let i = 0; i <= 10; i++) {
            resultado += `${i} x ${num} = ${i * num} `;
        }
        document.getElementById("resultado7").textContent = resultado.trim();
    } else {
        document.getElementById("resultado7").textContent = "Por favor, insira um número entre 1 e 10.";
    }
}
  
  // Exercicio 8 - Sequência em P.A. com 10 valores
  function exercício8() {
    const a = parseFloat(document.getElementById('aInput').value);
    const r = parseFloat(document.getElementById('rInput').value);

    // Validate inputs
    if (isNaN(a) || isNaN(r)) {
        document.getElementById("resultado8").textContent = "Por favor, insira valores numéricos para A e R.";
        return;
    }

    let resultado = '';
    for (let i = 0; i < 10; i++) {
        const termo = a + (i * r);
        resultado += `${i+1}° termo: ${termo.toFixed(2)}\n`;
    }

    document.getElementById("resultado8").textContent = resultado.trim();
}
  
  
  
  // Exercicio 09 - Cálculo do fatorial e a sequência
  function exercício09() {
    const a = parseInt(document.getElementById('aInput').value);

    // Validar entrada
    if (isNaN(a) || a < 1 || a > 20) {
        document.getElementById("resultado09").textContent = "Por favor, insira um número inteiro positivo entre 1 e 20.";
        return;
    }

    let fatorial = 1;
    let sequencia = '';

    for (let i = a; i > 0; i--) {
        fatorial *= i;
        sequencia += i + (i > 1 ? 'x' : '');
    }

    const resultado = `${a}! = ${sequencia} = ${fatorial.toLocaleString('pt-BR')}`;

    document.getElementById("resultado09").textContent = resultado;
}
  