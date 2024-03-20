function extractText() {
    
    const extractableText = document.getElementById('items');
    const textArea = document.getElementById('result')

    textArea.value = extractableText.textContent
}
