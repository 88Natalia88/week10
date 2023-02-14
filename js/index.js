//let name = prompt ('Как тебя зовут?');
//alert (`Привет ${name}`);


let a = prompt('первое число');
a = Number(a);

const operator = prompt('оператор (/,+,*,-)');

let b = prompt('второе число');
b = Number(b);

switch (operator) {
    case '+':
        alert (a + b);
        break;
    case '-':
        alert (a - b);
        break;
    case '/':
        alert (a / b);
        break;
    case '*':
        alert (a * b);
}