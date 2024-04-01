function addItem() {
    
    const dropdownMenuElement = document.getElementById('menu');

    const inputTextElement = document.getElementById('newItemText');
    const inputValueElement = document.getElementById('newItemValue');

    let newOptionElement = document.createElement('option');
    newOptionElement.textContent = inputTextElement.value;
    newOptionElement.value = inputValueElement.value;

    dropdownMenuElement.appendChild(newOptionElement);

    inputTextElement.value ='';
    inputValueElement.value = '';

}