function search() {

   const townsListElements = document.getElementById('towns');
   const searchTextElement = document.getElementById('searchText');
   const resultElement = document.getElementById('result');

   const searchText = searchTextElement.value;
   const townElements = Array.from(townsListElements.children);

   let matchesCount = 0
   for (let townElement of townElements) {
      if (townElement.textContent.toLowerCase().includes((searchText).toLowerCase())) {
         townElement.style.fontWeight = 'bold';
         townElement.style.textDecoration = 'underline';
         matchesCount += 1
      } else {
         townElement.style.fontWeight = 'none';
         townElement.style.textDecoration = 'none';
      }
   }
   
   resultElement.textContent = `${matchesCount} matches found`
}
