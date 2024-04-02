function solve() {

  const textareaInputElement = document.querySelector('#exercise textarea:first-of-type');
  const generateButtonElement = document.querySelector('#exercise button:first-of-type');
  const textareaOutputElement = document.querySelector('#exercise textarea:last-of-type');
  const buyButtonElement = document.querySelector('#exercise button:last-of-type');
  const furnitureTBodyElement = document.querySelector('.table tbody');

  generateButtonElement.addEventListener('click', () => {
    const furnitures = JSON.parse(textareaInputElement.value);

    for (const furniture of furnitures) {
      const imgElement = document.createElement('img');
      imgElement.src = furniture.img;
      const imgTdElement = document.createElement('td');
      imgTdElement.appendChild(imgElement);

      const pNameElement = document.createElement('p');
      pNameElement.textContent = furniture.name;
      const pNameTdElement = document.createElement('td');
      pNameTdElement.appendChild(pNameElement);

      const pPriceElement = document.createElement('p');
      pPriceElement.textContent = furniture.price;
      const pPriceTdElement = document.createElement('td');
      pPriceTdElement.appendChild(pPriceElement);

      const pDecFactorElement = document.createElement('p');
      pDecFactorElement.textContent = furniture.decFactor;
      const pDecFactorTdElement = document.createElement('td');
      pDecFactorTdElement.appendChild(pDecFactorElement);

      const checkBoxElement = document.createElement('input');
      checkBoxElement.setAttribute('type', 'checkbox');
      const checkBoxTdElement = document.createElement('td');
      checkBoxTdElement.appendChild(checkBoxElement)

      const furnitureTrElement = document.createElement('tr');
      furnitureTrElement.appendChild(imgTdElement);
      furnitureTrElement.appendChild(pNameTdElement);
      furnitureTrElement.appendChild(pPriceTdElement);
      furnitureTrElement.appendChild(pDecFactorTdElement);
      furnitureTrElement.appendChild(checkBoxTdElement);

      furnitureTBodyElement.appendChild(furnitureTrElement);
    }
  })

    buyButtonElement.addEventListener('click', (e) => {
      let totalPrice = 0;
      let totalDecorationFactor = 0;
      let markedChildren = 0;
      let names = [];

      Array.from(furnitureTBodyElement.children)
          .forEach(furnitureTrElement => {
              const markInputElement = furnitureTrElement.querySelector('input[type=checkbox]');
              if (!markInputElement.checked) {
                  return;
              }

              const name = furnitureTrElement.children.item(1).textContent;
              const price = Number(furnitureTrElement.children.item(2).textContent);
              const decorationFactor = Number(furnitureTrElement.children.item(3).textContent);

              names.push(name);
              totalPrice += price;
              totalDecorationFactor += decorationFactor;
              markedChildren++;
          });

      const averageDecorationFactor = totalDecorationFactor / markedChildren;
      textareaOutputElement.textContent += `Bought furniture: ${names.join(', ')}\n`;
      textareaOutputElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
      textareaOutputElement.textContent += `Average decoration factor: ${averageDecorationFactor}`;
  })
  
}
