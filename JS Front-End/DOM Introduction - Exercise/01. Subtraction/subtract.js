function subtract() {

    const getFirstElement = document.getElementById('firstNumber');
    const getSecondElement = document.getElementById('secondNumber');
    const resultElement = document.getElementById('result')

    const num1 = Number(getFirstElement.value);
    const num2 = Number(getSecondElement.value);

    resultElement.textContent = num1 - num2;
}