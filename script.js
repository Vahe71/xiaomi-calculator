const buttons = document.querySelectorAll('.calculator .buttons button');
const display = document.querySelector('.calculator .display');
const equal = document.querySelector('.calculator .buttons .equal');
const AC = document.querySelector('.calculator .buttons .AC')
let string = '';
buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        string = string.toString();
        let inner = btn.innerText;
        if (inner == '=')
        string = eval(string);
        else if (inner == 'AC' || inner == 'C')
            string = '';
        else if (inner == '←')
        string = string.slice(0, string.length - 1);
        else
        string += btn.innerText;
        if (string == Infinity) string = 'Error!';
        display.value = string;
        string == '' ? AC.innerText = 'AC' : AC.innerText = 'C';
    });
})















