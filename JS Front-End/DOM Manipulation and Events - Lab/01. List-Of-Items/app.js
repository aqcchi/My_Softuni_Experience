function addItem() {
    
    const inputElement = document.getElementById('newItemText');
    const addingField = document.getElementById('items')

    let li = document.createElement('li');
    addingField.appendChild(li);
    li.textContent = inputElement.value;

    inputElement.value = '';
}
