let a = ''; // first number
let b = ''; // second number
let sing = ''; // operation simbol
let finish = false; 

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['–', '+', 'X', '÷'];

// дисплей

const display = document.querySelector('.calc-screen p');

function clearAll () {
    display.textContent = 0;
    finish = false;
    a = '';
    b = '';
    sing = '';
}

document.querySelector('.AC').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('AC')) return;
}