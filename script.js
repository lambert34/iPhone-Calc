let a = ''; // first number
let b = ''; // second number
let sign = ''; // operation simbol
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
const action = ['–', '+', 'X', '÷'];

// дисплей

const display = document.querySelector('.calc-screen p');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    display.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;

    display.textContent = '';
    // получить нажатую кнопку
    const key = event.target.textContent;

    // при нажатии кнопок с 0 по 9 или запятая
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            console.log(a, b, sign);
            display.textContent = a;
        } else if (a!=='' && b!== '' && finish) {
        
        } else {
            b += key;
            display.textContent = a;
        }
        console.log(a, b, sign);
        return;
    }

    // при нажатии клавиши + -, X, ÷
    if (action.includes(key)) {
        sing = key;
        display.textContent = sign;
        console.log(a, b, sign);
        return;
    }
}

