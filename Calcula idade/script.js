
const pessoa1 = {
    nome: "Maria",
    idade: 40
};
const pessoa2 = {
    nome: "Paulo",
    idade: 26,
};
const pessoa2 = {
    nome: "José",
    idade: 29,
};



function calculadorDeIdade(anos){
    return `Daqui a ${anos} anos ${this.nome} terá ${this.idade + anos} anos`
};

console.log(calculadorDeIdade.call(pessoa1, 30));
console.log(calculadorDeIdade.apply(pessoa2, [20]));