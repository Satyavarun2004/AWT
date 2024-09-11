let person={
    name:"varun",
    age: 20,
};
person.age=35;
console.log(person.name);
console.log(Object.entries(person));
console.log(Object.keys(person));
let colors=["red", "blue"];
colors[1]="pink";
console.log(colors);
colors.push("greeen");
console.log(colors);
colors.pop();
console.log(colors);
colors.shift();
console.log(colors);
colors.unshift("black");
console.log(colors);
console.log(colors.length);
function greet(para){
    console.log('function greet');
}
function sum(a,b){
    return a+b;
}
greet();
let result=sum(2,3);
console.log(result);
let input=prompt('enter input')
input=parseInt(input);
alert(typeof input);
function addition() {
    let result = num1 + num2;
    alert("The result of addition is: " + result);
}

function subtraction() {
    let result = num1 - num2;
    alert("The result of subtraction is: " + result);
}

function multiplication() {
    let result = num1 * num2;
    alert("The result of multiplication is: " + result);
}
function division() {
    if (num2 === 0) {
        alert("Division by zero is not allowed!");
    } else {
        let result = num1 / num2;
        alert("The result of division is: " + result);
    }
}

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
addition();
subtraction();
multiplication();
division();
let i=10;
while(i<10){
    console.log(i);
    i++;
}
for(let i=0;i<10;i++){
    console.log(i);
}
 



