function addItem() {
    
    const inputTextElement = document.getElementById('newItemText');
    const newInputElement = document.createElement('li');
    newInputElement.textContent = inputTextElement.value;

    const parentElement = document.getElementById('items');
    parentElement.appendChild(newInputElement);

    const deleteLinkElement = document.createElement('a');
    deleteLinkElement.textContent = '[Delete]';
    deleteLinkElement.href = '#';

    newInputElement.appendChild(deleteLinkElement);

    deleteLinkElement.addEventListener('click', () => {
        newInputElement.remove();
    })

    inputTextElement.value = '';
}