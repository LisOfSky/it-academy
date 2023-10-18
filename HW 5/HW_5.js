//data

const { stringify } = require("jsonfile/utils");

let str = "This is string";
let trueBool = true;
let falseBool = false;
let num = 42;


// 1) Выполнить сложение различных типов(string+boolean, string+number, number+boolean)

console.log(str + trueBool);
console.log(str + num);
console.log(num + trueBool);
console.log(num + falseBool);


// 2) Выполнить умножение различных типов(string * boolean, string * number, number * boolean)

console.log(str * trueBool);
console.log(str * num);
console.log(num * trueBool);
console.log(num * falseBool);

// 3) Выполнить деление различных типов(string/boolean, string/number, number/Boolean)

console.log(str / trueBool);
console.log(str / num);
console.log(num / trueBool);
console.log(num / falseBool);

// 4) Выполнить явное преобразование(number, string, boolean)

console.log(typeof(String(num)));
console.log(typeof(Boolean(num)));

console.log(typeof(Number(str)));
console.log(typeof(Boolean(str)));

console.log(typeof(Number(trueBool)));
console.log(typeof(String(trueBool)));

console.log(typeof(Number(falseBool)));
console.log(typeof(String(falseBool)));