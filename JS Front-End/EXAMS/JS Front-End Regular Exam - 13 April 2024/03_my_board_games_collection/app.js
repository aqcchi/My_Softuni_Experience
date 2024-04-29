const baseURL = 'http://localhost:3030/jsonstore/games';

const loadButtonElement = document.getElementById('load-games');
const addButtonElement = document.getElementById('add-game');
const editButtonElement = document.getElementById('edit-game');

const gameNameinputElement = document.getElementById('g-name');
const typeinputElement = document.getElementById('type');
const maxPlayersinputElement = document.getElementById('players');

const divGamesListElement = document.getElementById('games-list');
const currentBoardGameContainerElement = document.querySelector('.board-game');

const loadGames = async () => {

    // fetch all games
    const response = await fetch(baseURL);
    const data = await response.json();

    // clear game list element
    divGamesListElement.innerHTML = '';

    // create game element for each
    for (const game of Object.values(data)) {

        const changeButtonElement = document.createElement('button');
        changeButtonElement.classList.add('change-btn');
        changeButtonElement.textContent = 'Change';

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('delete-btn');
        deleteButtonElement.textContent = 'Delete';

        const buttonsContainerDivElement = document.createElement('div');
        buttonsContainerDivElement.classList.add('buttons-container');
        buttonsContainerDivElement.appendChild(changeButtonElement);
        buttonsContainerDivElement.appendChild(deleteButtonElement);

        const gameNameParElement = document.createElement('p');
        gameNameParElement.textContent = game.name;
        const maxPlayersParElement = document.createElement('p');
        maxPlayersParElement.textContent = game.players;
        const typeParElement = document.createElement('p');
        typeParElement.textContent = game.type;

        const divClassContent = document.createElement('div');
        divClassContent.classList.add('content');
        divClassContent.appendChild(gameNameParElement);
        divClassContent.appendChild(maxPlayersParElement);
        divClassContent.appendChild(typeParElement);

        const divClassBoardGame = document.createElement('div');
        divClassBoardGame.classList.add('board-game');
        divClassBoardGame.appendChild(divClassContent);
        divClassBoardGame.appendChild(buttonsContainerDivElement);

        divGamesListElement.appendChild(divClassBoardGame);

        // editButtonElement.setAttribute('disabled', 'disabled');

        changeButtonElement.addEventListener('click', () => {

            // save current game id
            // IS THIS CORRECT????
            currentBoardGameContainerElement.setAttribute('data-id', game._id);

            // populate input
            gameNameinputElement.value = game.name;
            typeinputElement.value = game.type;
            maxPlayersinputElement.value = game.players;

            // activate edit button
            editButtonElement.removeAttribute('disabled');

            // deactivate add button
            addButtonElement.setAttribute('disabled', 'disabled');

            // remove from list
            divClassBoardGame.remove()
        });

        deleteButtonElement.addEventListener('click', async () => {

            // delete http request
            await fetch(`${baseURL}/${game._id}`, {
                method: 'DELETE'
            });

            // remove from list
            divClassBoardGame.remove();

        });

    }
};

loadButtonElement.addEventListener('click', loadGames);

editButtonElement.addEventListener('click', async () => {

    // get data from inputs
    const { name, players, type } = getInputData();

    // get game id
    const gameId = currentBoardGameContainerElement.getAttribute('data-id');

    // make aput request
    const response = await fetch(`${baseURL}/${gameId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            _id: gameId,
            name, 
            type,
            players, 
        })
    });

    if (!response.ok) {
        return;
    }

    // deactivate edit button
    editButtonElement.setAttribute('disabled', 'disabled');

    // activate add button
    addButtonElement.removeAttribute('disabled');

    // clear current GameId
    currentBoardGameContainerElement.removeAttribute('data-id');

    // clear input fields
    clearInputData();

    // load games
    loadGames();

})

addButtonElement.addEventListener('click', async () => {

    // get input data
    const newGame = getInputData();

    // create post request
    const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newGame),
    })

    if (!response.ok) {
        return;
    }

    // clear input fields
    clearInputData();

    //load all meals
    loadGames();

})

function getInputData() {
    const name = gameNameinputElement.value;
    const players = maxPlayersinputElement.value;
    const type = typeinputElement.value;

    return { name, players, type };

}

function clearInputData() {

    gameNameinputElement.value = '';
    typeinputElement.value = '';
    maxPlayersinputElement.value = '';

}