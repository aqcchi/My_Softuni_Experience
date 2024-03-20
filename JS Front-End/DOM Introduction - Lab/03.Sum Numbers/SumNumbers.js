function calc() {
    
    const firstInputElement = document.getElementById('num1');
    const secondInputElement = document.getElementById('num2');
    const sumInputElement = document.getElementById('sum')

    const firstNumber = Number(firstInputElement.value);
    const secondNumber = Number(secondInputElement.value);
    
    sumInputElement.value = firstNumber + secondNumber;
}
