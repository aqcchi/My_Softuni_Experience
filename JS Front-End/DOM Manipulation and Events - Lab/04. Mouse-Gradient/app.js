function attachGradientEvents() {

    const gradientFieldElement = document.getElementById('gradient');
    const resultFieldElement = document.getElementById('result');

    gradientFieldElement.addEventListener('mousemove', (event) => {
        const currentWidth = event.offsetX;
        const elementWidth = event.target.clientWidth;
        const progress = Math.floor((currentWidth / elementWidth) * 100);

        resultFieldElement.textContent = `${progress}%`;
    })
}



