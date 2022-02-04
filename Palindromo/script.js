function verificaPalindromo(string) {

    if(!string) return "O parametro não é uma string!";

    for (let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length-1 - i]){
            return "A palavra não é um palindromo!";
        }
    

    return "A palavra é um palindromo!";
    }   
}


console.log(verificaPalindromo("ovo"))