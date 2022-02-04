function substituiPares(array){
    if(!array || !array.length) return -1;

    for (let indice = 0; indice < array.length; indice++){
        if (array[indice] % 2 === 0 && array[indice] !== 0){
            array[indice] = 0
        };
    };
    return array
};

let lista = [1, 5, 0, 6, 8, 7];
console.log(substituiPares(lista));