const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function recebeArray(array, media = 6){
    if (!array.length ){return "Não possui alunos na lista! tente novamente"};
    let alunosAprovados = [];
     for(indice = 0; indice < array.length; indice++){
         const {nota, nome} = array[indice];
         let aprovado = nota >= media;
         if (aprovado){
             alunosAprovados.push(nome);
         };         
    };
    return alunosAprovados;
};
console.log(recebeArray(alunos, 7));