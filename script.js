const inputOne = document.getElementById('numberOne');
const inputTwo = document.getElementById('numberTwo');
const addButton = document.getElementById('addButton');
const result = document.getElementById('result');

addButton.addEventListener('click', () => {
    result.innerHTML = parseInt(inputOne.value) + parseInt(inputTwo.value);
});