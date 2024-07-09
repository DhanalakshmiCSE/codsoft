let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for (let item of buttons) {
    item.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);

        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == '=') {
            try {
                screen.value = eval(screenValue);
            } catch (error) {
                screen.value = 'Error';
            }
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}
