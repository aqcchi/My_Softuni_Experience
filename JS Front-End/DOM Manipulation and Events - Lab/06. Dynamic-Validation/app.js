function validate() {
    
    const inputEmailFieldElement = document.getElementById('email');

    const regexp = /^[a-z]+@[a-z]+\.[a-z]+/

    inputEmailFieldElement.addEventListener('change', (event) => {
        if (!regexp.test(event.target.value)) {
            event.target.classList.add('error') 
        } else {
            inputEmailFieldElement.classList.remove('error') 
        }
    })

}