
function addition(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}


let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /):");

switch (operation) {
    case '+':
        alert(addition(num1, num2));
        break;
    case '-':
        alert(subtraction(num1, num2));
        break;
    case '*':
        alert( multiplication(num1, num2));
        break;
    case '/':
        alert(division(num1, num2));
        break;
    default:
        alert("Invalid operation!");
        break;
}
