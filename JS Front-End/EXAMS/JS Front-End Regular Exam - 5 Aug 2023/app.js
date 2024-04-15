const baseURL = 'http://localhost:3030/jsonstore/tasks';

const loadVacationsButtonElement = document.getElementById('load-vacations');
const listDivElement = document.getElementById('list');

const addVacationButtonElement = document.getElementById('add-vacation');
const editVacationButtonElement = document.getElementById('edit-vacation');
const mainContainerElement = document.getElementById('main-container');

const nameInputElement = document.getElementById('name');
const daysInputElement = document.getElementById('num-days');
const dateInputElement = document.getElementById('from-date');

const loadVacations = async () => {

    const response = await fetch(baseURL);
    const data = await response.json();

    listDivElement.innerHTML = '';

    for (const vacation of Object.values(data)) {

        const changeButtonElement = document.createElement('button');
        changeButtonElement.classList.add('change-btn');
        changeButtonElement.textContent = 'Change';
        const doneButtonElement = document.createElement('button');
        doneButtonElement.classList.add('done-btn');
        doneButtonElement.textContent = 'Done';

        const nameH2Element = document.createElement('p');
        nameH2Element.textContent = vacation.name;

        const dateH3Element = document.createElement('p');
        dateH3Element.textContent = vacation.date;

        const daysH3Element = document.createElement('p');
        daysH3Element.textContent = vacation.days;

        const containerDivClassElement = document.createElement('div');
        containerDivClassElement.classList.add('container');
        containerDivClassElement.appendChild(changeButtonElement);
        containerDivClassElement.appendChild(doneButtonElement);
        containerDivClassElement.appendChild(nameH2Element);
        containerDivClassElement.appendChild(dateH3Element);
        containerDivClassElement.appendChild(daysH3Element);

        listDivElement.appendChild(containerDivClassElement);

        changeButtonElement.addEventListener('click', () => {

            // getting vacation id
            mainContainerElement.setAttribute('data-id', vacation._id);

            // info back in the input fields
            nameInputElement.value = vacation.name;
            daysInputElement.value = vacation.days;
            dateInputElement.value = vacation.date; 

            // activating edit button
            editVacationButtonElement.removeAttribute('disabled');

            // deactivating add button
            addVacationButtonElement.setAttribute('disabled', 'disabled');

            // remove chosen element from the DOM
            containerDivClassElement.remove();
        })

        doneButtonElement.addEventListener('click', async () => {

            // delete request
            await fetch(`${baseURL}/${vacation._id}`, {
                method: 'DELETE'
            })

            //remove from list
            containerDivClassElement.remove();

            //fetch items again
            loadVacations();
        })
    }
}

loadVacationsButtonElement.addEventListener('click', loadVacations);

editVacationButtonElement.addEventListener('click', async () => {
    
    // get input data
    const name = nameInputElement.value;
    const days = daysInputElement.value;
    const date = dateInputElement.value;

    // get vacation id
    const vacationId = mainContainerElement.getAttribute('data-id');

    // send a PUT request
    const response = await fetch(`${baseURL}/${vacationId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ 
            name,
            days,
            date,
            _id: vacationId,
        })
    })

    // check if request successful
    if (!response.ok) {
        return;
    }

    // deactivating edit button
    editVacationButtonElement.setAttribute('disabled', 'disabled');

    // activating add button
    addVacationButtonElement.removeAttribute('disabled');

    //clear current vacationId
    mainContainerElement.removeAttribute('data-id');

    // fetch items again
    loadVacations();

    // clear input fields
    nameInputElement.value = '';
    dateInputElement.value = '';
    daysInputElement.value = '';

})

addVacationButtonElement.addEventListener('click', async () => {

    //get input data
    const name = nameInputElement.value;
    const days = daysInputElement.value;
    const date = dateInputElement.value;

    //clear input fields
    nameInputElement.value = '';
    dateInputElement.value = '';
    daysInputElement.value = '';

    const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ name, days, date})
    });

    if (!response.ok) {
        return;
    }

    //fetch vacations again
    loadVacations();
})
