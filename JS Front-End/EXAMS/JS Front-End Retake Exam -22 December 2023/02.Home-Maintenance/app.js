window.addEventListener("load", solve)

function solve() {

    const placeInputElement = document.getElementById('place'); 
    const actionInputElement = document.getElementById('action');
    const personInputElement = document.getElementById('person');

    const addButtonElement = document.getElementById('add-btn');
    const taskListElement = document.getElementById('task-list');
    const doneListElement = document.getElementById('done-list');

    addButtonElement.addEventListener('click', () => {

        const place = placeInputElement.value;
        const action = actionInputElement.value;
        const person = personInputElement.value;

        if (!place || !action || !person ) {
            return;
        }

        const cleanTaskElement = createLiElement(place, action, person);
        taskListElement.appendChild(cleanTaskElement);
        
        placeInputElement.value = '';
        actionInputElement.value = '';
        personInputElement.value = '';

        const editButtonElement = cleanTaskElement.querySelector('.edit');
        const doneButtonElement = cleanTaskElement.querySelector('.done');

        editButtonElement.addEventListener('click', () => {

            placeInputElement.value = place;
            actionInputElement.value = action;
            personInputElement.value = person;

            cleanTaskElement.remove();
        })

        doneButtonElement.addEventListener('click', () => {

            const elementToRemove = cleanTaskElement.querySelector('.buttons');
            elementToRemove.remove();

            const deleteButtonElement = document.createElement('button');
            deleteButtonElement.classList.add('delete');
            deleteButtonElement.textContent = 'Delete';
            cleanTaskElement.appendChild(deleteButtonElement)

            doneListElement.appendChild(cleanTaskElement);

            taskListElement.innerHTML = '';

            deleteButtonElement.addEventListener('click', () => {
                doneListElement.innerHTML = '';
            })

        })
    })


    function createLiElement(place, action, person) {

        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('edit');
        editButtonElement.textContent = 'Edit';
        const doneButtonElement = document.createElement('button');
        doneButtonElement.classList.add('done');
        doneButtonElement.textContent = 'Done';

        const classButtonsElement = document.createElement('div');
        classButtonsElement.classList.add('buttons');
        classButtonsElement.appendChild(editButtonElement);
        classButtonsElement.appendChild(doneButtonElement);

        const placeParElement = document.createElement('p');
        placeParElement.textContent = `Place:${place}`;
        const actionParElement = document.createElement('p');
        actionParElement.textContent = `Action:${action}`;
        const personParElement = document.createElement('p');
        personParElement.textContent = `Person:${person}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(placeParElement);
        articleElement.appendChild(actionParElement);
        articleElement.appendChild(personParElement);

        const liElement = document.createElement('li');
        liElement.classList.add('clean-task');
        liElement.appendChild(articleElement);
        liElement.appendChild(classButtonsElement);

        return liElement;
    }

}