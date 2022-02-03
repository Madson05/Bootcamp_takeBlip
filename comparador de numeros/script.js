function reuneFrases(numero1, numero2){

    frase1 = comparaNumeros(numero1, numero2);
    frase2 = relacaoEntreDezenas(numero1, numero2);

    return fraseGeral = frase1 + frase2;

}

function comparaNumeros(numero1, numero2){

    const IGUAL = numero1 === numero2;

    return IGUAL ? "os numeros " + numero1 + " e " + numero2 + " são iguais. " : "os numeros " + numero1 + " e " + numero2 + " não são iguais. ";
}



function relacaoEntreDezenas(numero1, numero2){

    const SOMA = numero1 + numero2;
    const RELACAOPOR10 = SOMA < 10;
    const RELACAOPOR20 = SOMA < 20;

    let frase = RELACAOPOR10 ? "Sua soma é: " + SOMA + " que é menor que 10 ":"Sua soma é: " + SOMA + " que é maior que 10 ";

    frase  += RELACAOPOR20 ? "e menor que 20": "e maior que 20";

    return frase;

}

console.log(reuneFrases(10,12));
