function extract(content) {

    const extractedElements = document.getElementById('content');
    const matches = extractedElements.textContent.matchAll(/\(([a-zA-Z ]+)\)/g);
    // const regexp = /\(([a-zA-Z]+)\)/;
  
    const text = Array
        .from(matches)
        .map(match => match[1])
        .join('; ')
}