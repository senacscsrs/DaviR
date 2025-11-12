// Lista de Exercícios – Objetos em JavaScript
// 1. Criando um objeto simples
// Crie um objeto chamado pessoa com as propriedades nome, idade e cidade.
// Depois, exiba todas as informações no console.
let pessoa = {
    nome: "Davi Gabriel",
    idade: 19,
    cidade: "Santa Cruz do Sul"
};
console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);


// 2. Atualizando informações
// Usando o objeto pessoa do exercício anterior:
// Altere a cidade para “Santa Cruz do Sul RS”.
// Adicione uma nova propriedade chamada profissao.
// Mostre o resultado final no console.

let pessoaAtualizada = {
    nome: "Davi Gabriel",
    idade: 19,
    cidade: "Santa Cruz do Sul RS",
    profissao: "Estudante"
};
console.log(`Nome: ${pessoaAtualizada.nome}, Idade: ${pessoaAtualizada.idade}, Cidade: ${pessoaAtualizada.cidade}, Profissão: ${pessoaAtualizada.profissao}`);

// 3. Objeto com função
// Crie um objeto carro com as propriedades marca, modelo, ano e uma função ligar() que mostre no console:
// “O carro [marca] [modelo] foi ligado!”
// Execute o método.

let carro = {
    marca: "Honda",
    modelo: "HR-V",
    ano: 2017,
    ligar: function() {
        console.log(`O carro ${this.marca} ${this.modelo} foi ligado!`);
    }
};
carro.ligar();

// 4. Usando if dentro de um método
// Crie um objeto usuario com as propriedades nome e idade.
// Adicione um método chamado verificarIdade() que:
// Mostre “Maior de idade” se a idade for 18 ou mais.
// Mostre “Menor de idade” caso contrário.

let usuario = {
    nome: "Otavio",
    idade: 17,
    verificarIdade: function() {
        if (this.idade >= 18) {
            console.log("Maior de idade");
        } else {
            console.log("Menor de idade");
        }
    }
};
usuario.verificarIdade();

// 5. Objeto com array
// Crie um objeto aluno com:
// nome,
// notas (array com 3 números),
// e um método media() que calcule e retorne a média.
// Mostre a média no console.
let aluno ={
    nome: "Mariana",
        notas: [8, 7, 9],
        media: function() {
            let soma = 0;
            for (let i = 0; i < this.notas.length; i++) {
                soma += this.notas[i];
            }
            return soma / this.notas.length;
        }
}
console.log(`A média do aluno ${aluno.nome} é ${aluno.media()}`);

// 6. Laço com array de objetos
// Crie um array chamado produtos com 3 objetos, cada um contendo nome e preco.
// Use um for para mostrar o nome e o preço de cada produto.

let produtos = [
    { nome: "Camisa", preco: 45.90 },
    { nome: "Calça", preco: 89.90 },
    { nome: "Tênis", preco: 120.00 }
];
for (let i = 0; i < produtos.length; i++) {
    console.log(`Produto: ${produtos[i].nome}, Preço: R$${produtos[i].preco.toFixed(2)}`);
}

// 7. Condicional em objetos
// Com base no array produtos do exercício anterior, mostre apenas os produtos com preço maior que 50.

let produtosCaros = produtos.filter(function(produto) {
    return produto.preco > 50;
});
for (let i = 0; i < produtosCaros.length; i++) {
    console.log(`Produto caro: ${produtosCaros[i].nome}, Preço: R$${produtosCaros[i].preco.toFixed(2)}`);
}

// 8. Função que recebe um objeto
// Crie uma função chamada mostrarFilme(filme) que recebe um objeto com titulo e ano e mostre:
// “O filme [titulo] foi lançado em [ano].”
// Chame a função passando um objeto criado por você.

let filme = {
    titulo: "Inception",
    ano: 2010
};
mostrarFilme(filme);
function mostrarFilme(filme) {
    console.log(`O filme ${filme.titulo} foi lançado em ${filme.ano}.`);
}

// 9. Objeto dentro de objeto
// Crie um objeto empresa com:
// nome,
// endereco (outro objeto com rua, numero, cidade).
// Mostre no console o nome da empresa e o nome da rua.

let empresa = {
    nome: "Tech Solutions",
    endereco: {
        rua: "Av. Central",
        numero: 1000,
        cidade: "São Paulo"
    }
};
console.log(`Empresa: ${empresa.nome}, Rua: ${empresa.endereco.rua}`);

// 10. Controle de estoque
// Crie um objeto produto com as propriedades:
// nome,
// preco,
// estoque,
// e um método chamado vender() que:
// Diminua o estoque em 1 cada vez que for chamado.
// Mostre no console:
// “Venda realizada! Estoque atual: [estoque].”
// Teste o método várias vezes e veja o estoque diminuindo.

let produto = {
    nome: "Notebook",
    preco: 2500.00,
    estoque: 5,
    vender: function() {
        if (this.estoque > 0) {
            this.estoque--;
            console.log(`Venda realizada! Estoque atual: ${this.estoque}.`);
        } else {
            console.log("Estoque esgotado!");
        }
    }
};
produto.vender();
produto.vender();
produto.vender();