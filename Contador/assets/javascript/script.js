var numberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    numberWrapper.innerHTML = currentNumber;
    
    if(currentNumber<0){
        numberWrapper.style.color = "red";
    }

    else if(currentNumber > 0){
        numberWrapper.style.color = "Blue";
    }
    else{
        numberWrapper.style.color = "Black";
    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    numberWrapper.innerHTML = currentNumber;

    if(currentNumber<0){
        numberWrapper.style.color = "red";
    }

    else if(currentNumber > 0){
        numberWrapper.style.color = "Blue";
    }
    else{
        numberWrapper.style.color = "Black";
    }
}