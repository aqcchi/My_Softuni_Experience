window.addEventListener("load", solve)

function solve() {

    const expenseTypeInputElement = document.querySelector('input[type=text][id=expense]');
    const amountInputElement = document.querySelector('input[type=number][id=amount]');
    const dataTypeInputElement = document.querySelector('input[type=date][id=date]');

    const addButtonElement = document.getElementById('add-btn');
    const deleteButtonElement = document.querySelector('button[class="btn delete"]');

    const ulPreviewListElement = document.getElementById('preview-list');
    const ulExpensesListElement = document.getElementById('expenses-list');

    addButtonElement.addEventListener('click', () => {

            const expense = expenseTypeInputElement.value;
            const amount = amountInputElement.value;
            const date = dataTypeInputElement.value;

            if (!expense || !amount || !date) {
                return;
            }

            const expenseLiElement = createLiElement(expense, amount, date);
            ulPreviewListElement.appendChild(expenseLiElement);

            addButtonElement.setAttribute("disabled", "");
            expenseTypeInputElement.value = '';
            amountInputElement.value = '';
            dataTypeInputElement.value = '';

            const editButtonElement = expenseLiElement.querySelector('.btn.edit');
            const okButtonElement = expenseLiElement.querySelector('.btn.ok');

            editButtonElement.addEventListener('click', () => {
                
                expenseTypeInputElement.value = expense;
                amountInputElement.value = amount;
                dataTypeInputElement.value = date;

                expenseLiElement.remove();
                addButtonElement.removeAttribute("disabled");
          
            })

            okButtonElement.addEventListener('click', () => {

                const expenseButtonsElement = expenseLiElement.querySelector('.buttons');
                expenseButtonsElement.remove();

                ulExpensesListElement.appendChild(expenseLiElement);
                
                ulEpListElement.innerHTML = '';
                addButtonElement.removeAttribute("disabled");

            })

    })

    function createLiElement(expense, amount, date) {

        const pTypeElement = document.createElement('p');
            pTypeElement.textContent = `Type: ${expense}`;
            const pAmountElement = document.createElement('p');
            pAmountElement.textContent = `Amount: ${amount}$`;
            const pDateElement = document.createElement('p');
            pDateElement.textContent =  `Date: ${date}`;

            const articleElement = document.createElement('article');

            articleElement.appendChild(pTypeElement);
            articleElement.appendChild(pAmountElement);
            articleElement.appendChild(pDateElement);

            const divButtonsElement = document.createElement('div');
            divButtonsElement.classList.add('buttons');

            const editButtonElement = document.createElement('button');
            editButtonElement.classList.add("btn", "edit");
            editButtonElement.textContent = 'edit';
            const okButtonElement = document.createElement('button');
            okButtonElement.classList.add("btn", "ok");
            okButtonElement.textContent = 'ok';

            divButtonsElement.appendChild(editButtonElement);
            divButtonsElement.appendChild(okButtonElement);

            const liElement = document.createElement('li');
            liElement.classList.add('expense-item');
            liElement.appendChild(articleElement);
            liElement.appendChild(divButtonsElement);

            return liElement;
    }

    deleteButtonElement.addEventListener('click', () => {
        location.reload();
    })

}



