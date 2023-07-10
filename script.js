let a = ''; // first number
let b = ''; // second number
let sign = ''; // operation simbol
let finish = false; 

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
const action = ['–', '+', 'X', '÷'];

// дисплей

const display = document.querySelector('.calc-screen p');

function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    display.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;

    display.textContent = '';
    // получить нажатую кнопку
    const key = event.target.textContent;

    // при нажатии кнопок с 0 по 9 или запятая
    if(digit.includes(key)) {
        a += key;
        console.log(a, b , sing);
        display.textContent = a;
    }

    // при нажатии клавиши + -, X, ÷
    if(action.includes(key)) {
        sing = key;
        display.textContent = sing;
        console.log( a, b , sing);
        return;
    }
}

