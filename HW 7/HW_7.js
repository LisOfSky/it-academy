//================================================= Exercise 1 =======================================================
// 1. поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]

const arrOne = [1,2,3,-4,5,6];

function exOne(arr) {
    return console.log('Задание 1. Массив в обратном порядке: ' + '[' + arr.reverse() + ']');
}

exOne(arrOne);



//================================================= Exercise 2 =======================================================
// 2. найти максимальное значение числа в массиве ([3,67,15...])

const arrTwo = [3,67,15,17,324,42,-19,-324.1];

function exTwo(arr) {
    return console.log('Задание 2. Максимальное число в массиве: ' + Math.max(...arr));
}

exTwo(arrTwo);



//================================================= Exercise 3 =======================================================
// 3. записать в массив ряд фибоначчи начиная с N члена с длинной массива M

const numStart = 8;
const numLenght = 5;

function exThree(num, lenght) {
    let newFib = [];

    function getFib(num) {
        return num <= 1 ? num : getFib(num - 1) + getFib(num - 2);
    }

    for (i = 0; i < lenght; i++) {
        newFib.push(getFib(num));
        num += 1;
    }

    return console.log('Задание 3. Ряд фибоначи по заданным параметрам: ' + newFib);
}

exThree(numStart, numLenght);



//================================================= Exercise 4 =======================================================
// 4. даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают 
// по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )

const numOne = 3487;
const numTwo = 3794;

function exFour(firstNum, secondNum) {
    const firstArr = Array.from(String(firstNum), Number);
    const secondArr = Array.from(String(secondNum), Number);
    
    let sumPos = 0, sumAll = 0;

    for (i = 0; i < firstArr.length; i++) {
        if (firstArr[i] === secondArr[i]) {
            sumPos += 1;
        } else {
            for (j = 0; j < firstArr.length; j++) {
                if (firstArr[i] === secondArr[j]) {
                    sumAll += 1;
                }
            }
        }
    }  

    return console.log('Задание 4. Количество совпадающих чисел по позиции и значению - ' + sumPos + '; количество совпадающих чисел только по значению - ' + sumAll);
}

exFour(numOne, numTwo);



//================================================= Exercise 5 =======================================================
// 5. сортировка массива по возрастанию/убыванию числа

const yetAnotherArray = [3,67,15,1,17,324,42,-19,1,324.1];

function exFive(arr) {
    return console.log('Задание 5. Сортировка массива по возрастанию - [' + arr.sort((a, b) => a - b) + ']. Сортировка массива по убыванию - [' + arr.sort((a, b) => b - a) + ']');
}

exFive(yetAnotherArray);



//================================================= Exercise 6 =======================================================
// 6. удалить из массива все повторяющиеся элементы числа и строки

const lastArr = ['a',-15,47,89,42,'b',3,47,'r',18,-15,'a',89,'r'];

function exSix(arr) {
    let newArr = new Set(arr);
    return console.log('Задание 6. Массив после удаления всех повторяющихся элементов - [' + Array.from(newArr) + ']');
}

exSix(lastArr);



/* все действия и переборы стараться выполнять методами конструктора Array и Object
** все примеры должны быть решены функция, функция должна принимать параметры и работать с любыми заданными атрибутами.
*/