function lockedProfile() {
    
    const profileElements = document.querySelectorAll('.profile');

    for (const profileElement of profileElements) {

        const showButtonElement = profileElement.querySelector('button');
        const lockInputElement = profileElement.querySelector('input[type=radio][value=lock]');

        showButtonElement.addEventListener('click', () => {

            if (lockInputElement.checked) {
                return;
            } else {
                const hiddenFieldsElement = showButtonElement.previousElementSibling;

                if (showButtonElement.textContent === 'Show more') {
                    hiddenFieldsElement.style.display = 'block';
                    showButtonElement.textContent = 'Hide it';
                } else {
                    hiddenFieldsElement.style.display = 'none';
                    showButtonElement.textContent = 'Show more';
                }
            }
            
        })

    }
}
