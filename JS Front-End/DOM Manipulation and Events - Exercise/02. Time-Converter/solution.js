function attachEventsListeners() {

    const daysInputElement = document.getElementById('days');
    const daysConvertButton = document.getElementById('daysBtn');

    daysConvertButton.addEventListener('click', (e) => {
        hoursInputElement.value = daysInputElement.value * 24;
        minutesInputElement.value = daysInputElement.value * 24 * 60;
        secondsInputElement.value = daysInputElement.value * 24 * 60 * 60;
    })

    const hoursInputElement = document.getElementById('hours');
    const hoursConvertButton = document.getElementById('hoursBtn');

    hoursConvertButton.addEventListener('click', (e) => {
        daysInputElement.value = hoursInputElement.value / 24;
        minutesInputElement.value = hoursInputElement.value * 60;
        secondsInputElement.value = hoursInputElement.value * 60 * 60;
    })

    const minutesInputElement = document.getElementById('minutes');
    const minutesConvertButton = document.getElementById('minutesBtn');

    minutesConvertButton.addEventListener('click', (e) => {
        daysInputElement.value = minutesInputElement.value / 24 / 60;
        hoursInputElement.value = minutesInputElement.value / 60;
        secondsInputElement.value = minutesInputElement.value * 60;
    })

    const secondsInputElement = document.getElementById('seconds');
    const secondsConvertButton = document.getElementById('secondsBtn');

    secondsConvertButton.addEventListener('click', (e) => {
        daysInputElement.value = secondsInputElement.value / 24 / 60 / 60;
        hoursInputElement.value = secondsInputElement.value / 60 / 60;
        minutesInputElement.value = secondsInputElement.value / 60;
    })

    daysInputElement.value = '';
    hoursInputElement.value = '';
    minutesInputElement.value = '';
    secondsInputElement.value = '';
}