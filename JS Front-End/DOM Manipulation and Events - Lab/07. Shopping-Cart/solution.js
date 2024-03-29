function solve() {
   
   const addProductButtonElements = document.querySelectorAll('button.add-product');
   const resultFieldElement = document.querySelector('textarea');
   const checkOutButton = document.querySelector('button.checkout');
   
   let totalPrice = 0;
   let uniqueProducts = {};

   for (const buttonElement of addProductButtonElements) {
      const productElement = buttonElement.parentElement.parentElement;

      buttonElement.addEventListener('click', () => {
         productName = productElement.querySelector('.product-title').textContent;
         money = Number(productElement.querySelector('.product-line-price').textContent);

         totalPrice += money
         uniqueProducts[productName] = true;

         resultFieldElement.textContent += `Added ${productName} for ${money.toFixed(2)} to the cart.\n`
      })
   }

   checkOutButton.addEventListener('click', (event) => {
      Array.from(addProductButtonElements).forEach(buttonElement => buttonElement.setAttribute('disabled', 'disabled'));
      event.target.setAttribute('disabled', 'disabled');
      const list = Object.keys(uniqueProducts).join(', ');

      resultFieldElement.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.`
   })
}

