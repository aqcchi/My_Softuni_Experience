function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {      
      const peopleListElement = document.querySelectorAll('table.container tbody tr');
      const searchFieldElement = document.getElementById('searchField');

      const searchText = searchFieldElement.value;

      for (let personInfo of peopleListElement) {
         const cellsInfo = personInfo.querySelectorAll('td');
         let isSelected = false;

         personInfo.classList.remove('select');

         for (const cell of cellsInfo) {
            if (cell.textContent.includes(searchText)) {
               isSelected = true;
               break;
            }
         }
         
         if (isSelected) {
            personInfo.className = 'select';
         }     
      }

      searchFieldElement.value = '';

   }
}

