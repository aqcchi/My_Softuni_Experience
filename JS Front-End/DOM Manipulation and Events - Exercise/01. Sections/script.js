function create(words) {

   const idContentElement = document.getElementById('content');
   const divElements = [];
   
   for (const word of words) {

      const divElement = document.createElement('div');
      const pElement = document.createElement('p');
      pElement.style.display = 'none';
      pElement.textContent = word;
      divElement.appendChild(pElement);
      divElements.push(divElement);

      divElement.addEventListener('click', (e) => {
         pElement.style.display = 'block';
      })

   }

   for (const divElement of divElements) {
      idContentElement.appendChild(divElement);
   }
}