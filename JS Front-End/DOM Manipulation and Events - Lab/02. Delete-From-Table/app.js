function deleteByEmail() {
    
    const inputElement = document.querySelector('input[name="email"]');
    const resultElement = document.getElementById('result');
    const tableRowElements = document.querySelectorAll('tbody tr');

    let found = false;

    const tableRowElement = Array
        .from(tableRowElements)
        .forEach(trElement => {
            const emailField = trElement.querySelector('td:nth-child(2)');
            if (emailField.textContent === inputElement.value) {
                trElement.remove()
                resultElement.textContent = "Deleted."
                found = true;
            }
        })

        if (!found) {
            resultElement.textContent = "Not found.";
        }

        // found = false;

    inputElement.value = '';
    
}