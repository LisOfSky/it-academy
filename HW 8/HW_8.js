//================================================= Exercise 1 =======================================================
// 1. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. 
// Если это так - выведите 'да', в противном случае выведите 'нет'.

const string = '123456';

function exOne(someString) {
    const arr = Array.from(String(someString), Number);

    let sumOfFirstHalf = 0, sumOfSecondHalf = 0;

    for (i = 0; i < arr.length; i++) {
        if (i < (arr.length / 2)) {
            sumOfFirstHalf += arr[i];
        } else {
            sumOfSecondHalf += arr[i];
        }
    }

    if (sumOfFirstHalf === sumOfSecondHalf) {
        console.log('Задание 1. Да. Сумма первых трех цифр равняется сумме вторых трех цифр');
    } else {
        console.log('Задание 1. Нет. Суммы половин разные');
    }
};

exOne(string);



//================================================= Exercise 2 =======================================================
// 2. Дано число n=1000 (может быть любое исло). Делите его на 2 столько раз, пока результат деления не станет 
// меньше 50 (может быть любое число). Какое число получится? Посчитайте количество итераций, необходимых для 
// этого (итерация - это проход цикла), и запишите его в переменную num.

const startNumber = 1000;
const division = 2;
const limit = 50;

function exTwo(strtNum, div, lim) {
    if (strtNum < lim) {
        console.log(`Задание 2. Число ${strtNum} и так меньше ${lim}`);
    } else {
        for (num = 0; strtNum >= lim; num++) {
            strtNum /= div;
        }
        console.log(`Задание 2. Понадобилось ${num} итераций.`);
    }
}

exTwo(startNumber, division, limit);



//================================================= Exercise 3 =======================================================
// 3. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с 
// элементами 12, 15, 20, 25, 59, 79.

const arr = [12, 15, 20, 25, 59, 79];

function exThree(someArray) {
    console.log(`Задание 3. Среднее арифметическое элементов массива [${arr}] - ${someArray.reduce((a, b) => (a + b)) / someArray.length}`);
}

exThree(arr);



//================================================= Exercise 4 =======================================================
// 4. Напишите функцию, которая вставит данные в массив с заданного места в массиве. Дан массив [1, 2, 3, 4, 5]. 
// Сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const secondArr = [1, 2, 3, 4, 5];
const dataToInsert = 'Artsiom';
const insertFrom = 3; //индекс элемента в массиве, с которого начнем вставлять данные

function exFour(someArray, someData, insFrom) {    
    const newData = Array.from(someData);

    for (i = 0; i < newData.length; i++) {
        someArray.splice(insFrom, 0, newData[i]);
        insFrom +=1;
    }

    console.log(`Задание 4. Новый массив: ${someArray}`);
}

exFour(secondArr, dataToInsert, insertFrom);



//================================================= Exercise 5 =======================================================
// 5. Напишите функцию, которая вставит данные в массив в заданные несколько мест в массиве. 
// Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

//todo Переделать - сделать чередование

const thirdArr = [1, 2, 3, 4, 5];
const firstDataToInsert = 'Artsiom';
const secondDataToInsert = 'JS'
const firstInsertFrom = 3; //индекс элемента в массиве, с которого начнем вставлять первые данные
const secondInsertFrom = 4; //индекс элемента в массиве, с которого начнем вставлять вторые данные

function exFive(someArray, firstData, secondData, firstInsFrom, secondInsFrom) {    
    const firstNewData = Array.from(firstData);
    const secondNewData = Array.from(secondData);

    for (i = 0; i < firstNewData.length; i++) {
        someArray.splice(firstInsFrom, 0, firstNewData[i]);
        firstInsFrom +=1;
    }
    
    for (i = 0; i < secondNewData.length; i++) {
        someArray.splice((secondInsFrom + firstNewData.length), 0, secondNewData[i]);
        secondInsFrom +=1;
    }

    console.log(`Задание 5. Новый массив: ${someArray}`);
}

exFive(thirdArr, firstDataToInsert, secondDataToInsert, firstInsertFrom, secondInsertFrom);



//================================================= Exercise 6 =======================================================
// 6. Дан массив [3, 4, 1, 2, 7. 30. 50]. Отсортируйте его.

const yetAnotherArray = [3, 4, 1, 2, 7, 30, 50];

function exSix(arr) {
    console.log('Задание 6. Сортировка массива по возрастанию - [' + arr.sort((a, b) => a - b) + ']. Сортировка массива по убыванию - [' + arr.sort((a, b) => b - a) + ']');
}

exSix(yetAnotherArray);