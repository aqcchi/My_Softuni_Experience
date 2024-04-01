function encodeAndDecodeMessages() {
    
    const firstTextareaElement = document.querySelector('#main div:first-of-type textarea');
    const secondTextareaElement = document.querySelector('#main div:last-of-type textarea');

    const encodeButtonElement = document.querySelector('#main div:first-of-type button');
    const decodeButtonElement = document.querySelector('#main div:last-of-type button');
    
    encodeButtonElement.addEventListener('click', () => {

        let encodedMessage = ''
        for (const char of firstTextareaElement.value) {
            let asciiValueOfChar = char.charCodeAt(0);
            let newAsciiValueofChar = asciiValueOfChar + 1;
            let newChar = String.fromCharCode(newAsciiValueofChar);
            encodedMessage += newChar;
        }

        firstTextareaElement.value = '';
        secondTextareaElement.value = encodedMessage;
    })

    decodeButtonElement.addEventListener('click', () => {

        let decodedMessage = ''
        for (const char of secondTextareaElement.value) {
            let asciiValueOfChar = char.charCodeAt(0);
            let newAsciiValueofChar = asciiValueOfChar - 1;
            let newChar = String.fromCharCode(newAsciiValueofChar);
            decodedMessage += newChar;
        }

        secondTextareaElement.value = decodedMessage;
    })
}