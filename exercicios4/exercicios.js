// Exercício 1
// Crie um vetor com 4 cores diferentes e mostre todas no console.

let cores = ['vermelho', 'azul', 'verde', 'amarelo'];
console.log(cores);

// Exercício 2
// Crie um vetor com 6 números e mostre apenas os números pares.

let numeros = [1, 2, 3, 4, 5, 6];
let numerosPares = numeros.filter(num => num % 2 === 0);
console.log(numerosPares);

// Exercício 3
// Crie um vetor com 5 números e mostre a soma total dos elementos.

let numeros2 = [10, 20, 30, 40, 50];
let somaTotal = numeros2.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(somaTotal);

// Exercício 4
// Crie um vetor com 5 números e mostre qual é o maior valor armazenado.

let numeros3 = [15, 22, 8, 19, 31];
let maiorValor = Math.max(...numeros3);
console.log(maiorValor);

// Exercício 5
// Crie uma matriz 3x3 com números inteiros e mostre todos os elementos no console.

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
}

// Exercício 6
// Usando a mesma matriz anterior, mostre apenas os números da diagonal principal.

let diagonalPrincipal = [];
for (let i = 0; i< matriz.length; i++) {
  diagonalPrincipal.push(matriz[i][i]);
}

// Exercício 7
// Usando a matriz 3x3, calcule e mostre a soma de todos os valores.

let somaMatriz = 0;
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    somaMatriz += matriz[i][j];
  }
}
console.log(somaMatriz);

// Exercício 8
// Mostre a soma dos elementos de cada linha da matriz separadamente.

let somaLinhas = [];
for (let i = 0; i < matriz.length; i++) {
  let somaLinha = 0;
    for (let j = 0; j < matriz[i].length; j++) {
        somaLinha += matriz[i][j];
    }
    somaLinhas.push(somaLinha);
}

// Exercício 9
// Crie um vetor com 3 nomes de alunos e uma matriz com 3 notas para cada um. Mostre o nome e a média de cada aluno.

let alunos = ['Ana', 'Bruno', 'Carla'];
let notas = [
  [8, 7, 9],
  [6, 9, 8],
  [7, 8, 10]
];
for (let i = 0; i < alunos.length; i++) {
  let somaNotas = 0;
    for (let j = 0; j < notas[i].length; j++) {
        somaNotas += notas[i][j];
    }
    let media = somaNotas / notas[i].length;
    console.log(`Aluno: ${alunos[i]}, Média: ${media.toFixed(2)}`);
}

// Exercício 10
// Crie uma matriz 3x3 com números aleatórios de 1 a 10 e mostre no console.

let matrizAleatoria = [];
for (let i = 0; i < 3; i++) {
  matrizAleatoria[i] = [];
    for (let j = 0; j < 3; j++) {
        matrizAleatoria[i][j] = Math.floor(Math.random() * 10) + 1;
    }
}
console.log(matrizAleatoria);

// Desafio Extra
// Mostre todos os números maiores que 5 da matriz criada no exercício 10.

let maioresQueCinco = [];
for (let i = 0; i < matrizAleatoria.length; i++) {
  for (let j = 0; j < matrizAleatoria[i].length; j++) {
    if (matrizAleatoria[i][j] > 5) {
        maioresQueCinco.push(matrizAleatoria[i][j]);
    }
    }
}
console.log(maioresQueCinco);