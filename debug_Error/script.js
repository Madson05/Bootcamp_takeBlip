function validaErro(array, tamanho){
    try{
        if(!array && !tamanho){throw new ReferenceError("Os parametros não foram enviados")
        }
        
        else if(typeof array !== "object"){
            throw new TypeError("O array deve ser do tipo object!")

        }else if(typeof tamanho !== "number"){
            throw new TypeError("O parametro tamanho deve ser do tipo number")

        }else if(array.length !== tamanho){
            throw new RangeError(`O tamanho do array deve ser igual a ${tamanho}`)

        }else{
            return array
        };
    }

    catch(e){
        if(e instanceof ReferenceError){
            console.log("Erro do tipo ReferenceError");
            console.log(e.message);
        }else if(e instanceof TypeError){
            console.log("Erro do tipo TypeError");
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log("Erro do tipo RangeError");
            console.log(e.message);
        }else{
            console.log("Erro não esperado");
            console.log(e);
        };

    };
};

console.log(validaErro([1, 6, 7, 9], 4))