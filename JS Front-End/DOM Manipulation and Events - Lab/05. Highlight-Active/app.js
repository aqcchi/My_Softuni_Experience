function focused() {
    
    const inputTextElements = document.querySelectorAll('input[type=text]');
    
    Array.from(inputTextElements).forEach(inputTextElement => inputTextElement.addEventListener( 'focus' , (event) => {
        event.target.parentElement.classList.add('focused')
    }));

    Array.from(inputTextElements).forEach(inputTextElement => inputTextElement.addEventListener( 'blur' , (event) => {
        event.target.parentElement.classList.remove('focused')
    }));

}