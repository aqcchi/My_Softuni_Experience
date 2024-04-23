window.addEventListener("load", solve)

function solve() {
    
  const nameInputElement = document.getElementById('name');
  const phoneInputElement = document.getElementById('phone');
  const categoryInputElement = document.getElementById('category');

  const addButtonElement = document.getElementById('add-btn');
  const checkListUlElement = document.getElementById('check-list');
  const contactListUlElement = document.getElementById('contact-list');

  addButtonElement.addEventListener('click', () => {

    const name = nameInputElement.value;
    const phone = phoneInputElement.value;
    const category = categoryInputElement.value;

    if (!name || !phone || !category) {
      return;
    }

    const infoLiElement = createLiElement(name, phone, category);
    checkListUlElement.appendChild(infoLiElement);

    // should I disable add button?
    addButtonElement.setAttribute('disabled', 'disabled');
    nameInputElement.value = '';
    phoneInputElement.value = '';
    categoryInputElement.value = '';

    const editButtonElement = infoLiElement.querySelector('.edit-btn');
    const saveButtonElement = infoLiElement.querySelector('.save-btn');

    editButtonElement.addEventListener('click', () => {

      nameInputElement.value = name;
      phoneInputElement.value = phone;
      categoryInputElement.value = category;

      infoLiElement.remove();
      addButtonElement.removeAttribute('disabled');

    })

    saveButtonElement.addEventListener('click', () => {

      const infoButtonsElement = infoLiElement.querySelector('.buttons');
      infoButtonsElement.remove()
      const deleteButtonElement = document.createElement('button');
      deleteButtonElement.classList.add('del-btn');
      deleteButtonElement.textContent = 'Delete';
      infoLiElement.appendChild(deleteButtonElement);

      contactListUlElement.appendChild(infoLiElement);
      checkListUlElement.innerHTML = '';
      
      deleteButtonElement.addEventListener('click', () => {

        contactListUlElement.innerHTML = '';

      })

    })


  })
  
  function createLiElement(name, phone, category) {

    const editButtonElement = document.createElement('button');
    editButtonElement.classList.add('edit-btn');
    editButtonElement.textContent = 'Edit';

    const saveButtonElement = document.createElement('button');
    saveButtonElement.classList.add('save-btn');
    saveButtonElement.textContent = 'Save';

    const divClassButtonsElement = document.createElement('div');
    divClassButtonsElement.classList.add('buttons');
    divClassButtonsElement.appendChild(editButtonElement);
    divClassButtonsElement.appendChild(saveButtonElement);

    const nameParElement = document.createElement('p');
    nameParElement.textContent = `name:${name}`;

    const phoneParElement = document.createElement('p');
    phoneParElement.textContent = `phone:${phone}`;

    const categoryParElement = document.createElement('p');
    categoryParElement.textContent = `category:${category}`;

    const articleElement = document.createElement('article');
    articleElement.appendChild(nameParElement);
    articleElement.appendChild(phoneParElement);
    articleElement.appendChild(categoryParElement);

    const liElement = document.createElement('li');
    liElement.appendChild(articleElement);
    liElement.appendChild(divClassButtonsElement);

    return liElement;
  }

}
