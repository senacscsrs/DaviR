// 1. Crie um código que declare uma variável chamada nome e exiba no console a mensagem:
// Olá, [nome]! Seja bem-vindo ao JavaScript!
let nome = "Davi";
let mensagem = `Olá, ${nome}! Seja bem-vindo ao JavaScript!`;
console.log(mensagem);

console.log("Aqui");

// ________________________________________
// 2. Faça um programa que receba a idade de uma pessoa e exiba se ela é maior ou menor de idade.
let idade = 20;
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// ________________________________________
// 3. Crie um programa que receba duas notas de um aluno, calcule a média e exiba se ele foi Aprovado, em Recuperação ou Reprovado.
let nota1 = 7;
let nota2 = 5;
let media = (nota1 + nota2) / 2;
if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

// ________________________________________
// 4. Desenvolva um programa que receba o salário de um funcionário e calcule um aumento de 15%. Mostre o novo salário.
let salario = 2000;
let aumento = salario * 0.15;
let novoSalario = salario + aumento;
console.log(`Novo salário: R$${novoSalario.toFixed(2)}`);

// ________________________________________
// 5. Monte um código que receba o nome de um produto e o valor de compra. Se o valor for maior que 100, aplique 10% de desconto e mostre o valor final.
let produto = "Notebook";
let valorCompra = 150;
if (valorCompra > 100) {
    let desconto = valorCompra * 0.10;
    let valorFinal = valorCompra - desconto;
    console.log(`Valor final com desconto: R$${valorFinal.toFixed(2)}`);
} else {
    console.log(`Valor final: R$${valorCompra.toFixed(2)}`);
}

// ________________________________________
// 6. Crie um código que exiba todos os números de 1 a 10 usando um laço for.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// ________________________________________
// 7. Faça um programa que exiba todos os números pares de 0 a 20 usando o laço while.
let num = 0;
while (num <= 20) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}

// ________________________________________
// 8. Crie um programa que receba um número e mostre a tabuada desse número de 1 a 10.
let numero = 5;
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}

// ________________________________________
// 9. Desenvolva um programa que peça um número e verifique se ele é par ou ímpar.
let numero2 = 8;
if (numero2 % 2 === 0) {
    console.log("Número par");
} else {
    console.log("Número ímpar");
}

// ________________________________________
// 10. Crie um programa que receba um nome de usuário e uma senha. Se o usuário e a senha estiverem corretos, mostre "Acesso permitido". Caso contrário, "Acesso negado".
let usuario = "admin";
let senha = "1234";
if (usuario === "admin" && senha === "1234") {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}

// ________________________________________
// 11. Monte um programa que pergunte a distância em km e calcule o valor de uma corrida considerando:
// •	Tarifa base = R$5,00
// •	
// o	R$2,50 por km rodado
// Mostre o valor total da corrida.
let distancia = 10; // em km
let tarifaBase = 5.00;
let valorPorKm = 2.50;
let valorTotal = tarifaBase + (valorPorKm * distancia);
console.log(`Valor total da corrida: R$${valorTotal.toFixed(2)}`);
// ________________________________________
// 12. Crie um vetor chamado frutas com três itens. Depois adicione mais uma fruta usando push() e exiba o vetor completo.
let frutas = ["maçã", "banana", "laranja"];
frutas.push("uva");
console.log(frutas);

// ________________________________________
// 13. Crie um vetor com 5 números e exiba os números maiores que 10 e sua posição no console.
let numeros = [5, 12, 8, 20, 3];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        console.log(`Número: ${numeros[i]}, Posição: ${i}`);
    }
}

//________________________________________
// 14. Monte um programa que receba três nomes e armazene em um vetor. Depois, exiba apenas o segundo nome.
let nomes = ["Ana", "Bruno", "Carla"];
console.log(nomes[1]);

// ________________________________________
// 15. Faça um programa que armazene 5 notas em um vetor e mostre a média delas.
let notas = [7, 8, 9, 6, 10];
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
let media2 = soma / notas.length;
console.log(`Média das notas: ${media2.toFixed(2)}`);

// ________________________________________
// 16. Crie um programa que pergunte o dia da semana (1 a 7) e mostre no console:
// 1 - Domingo
// 2 - Segunda
// ...
// 7 - Sábado
// ________________________________________
// Use a estrutura switch para isso.
let diaSemana = 4;
switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido");
        break;
}

// ________________________________________
// 17. Crie um código que receba o nome de uma cidade e mostre no console quantas letras ela possui.
let cidade = "São Paulo";
console.log(`A cidade ${cidade} possui ${cidade.length} letras.`);

// ________________________________________
// 18. Monte um programa que receba o nome completo de uma pessoa e exiba apenas o primeiro nome (dica: use split(" ")).
let nomeCompleto = "Davi Gabriel Rodrigues";
let primeiroNome = nomeCompleto.split(" ")[0];
console.log(`Primeiro nome: ${primeiroNome}`);

// ________________________________________
// 19. Crie um vetor com o nome de 5 alunos e, usando um laço for, exiba uma mensagem de boas-vindas para cada um deles no console.
let alunos = ["João", "Maria", "Pedro", "Isadora", "Otavio"];
for (let i = 0; i < alunos.length; i++) {
    console.log(`Bem-vindo, ${alunos[i]}!`);
}

// ________________________________________
// 20. Faça um programa que armazene em um vetor os preços de 4 produtos e mostre:
// •	O valor total da compra
// •	O preço médio dos produtos
let precos = [50, 30, 20, 100];
let totalCompra = 0;
for (let i = 0; i < precos.length; i++) {
    totalCompra += precos[i];
}
let precoMedio = totalCompra / precos.length;
console.log(`Valor total da compra: R$${totalCompra.toFixed(2)}`);
console.log(`Preço médio dos produtos: R$${precoMedio.toFixed(2)}`);
