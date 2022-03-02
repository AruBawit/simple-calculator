const inputOne = document.getElementById('numberOne');
const inputTwo = document.getElementById('numberTwo');
const addButton = document.getElementById('addButton');
const result = document.getElementById('result');

addButton.addEventListener('click', () => {
    const inputOnevalue = inputOne.value;
    const inputTwovalue = inputTwo.value;
    if(validation(inputOnevalue, inputTwovalue) === true){
    result.innerHTML = parseInt(inputOne.value) + parseInt(inputTwo.value);
    }
});

const validation = (inputOne, inputTwo) =>{
    if((numberOne == false)  || (numberTwo == false) || (isNaN(numberOne)) || (isNaN(numberTwo))){
        return false;
    }
    return true;
}