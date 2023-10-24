//================================================= Exercise 1 =======================================================
// Решить используя промисы и async/await. Сделайте 3 промиса, в каждом из которых расположена функция setTimeout 
// со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.

const promiseOne = new Promise((res, rej) => {
    setTimeout(() => {
        res(1);
    }, (Math.floor(Math.random() * 4 + 1) * 1000));
})

const promiseTwo = new Promise((res, rej) => {
    setTimeout(() => {
        res(2);
    }, (Math.floor(Math.random() * 4 + 1) * 1000));
})

const promiseThree = new Promise((res, rej) => {
    setTimeout(() => {
        res(3);
    }, (Math.floor(Math.random() * 4 + 1) * 1000));
})

Promise.race([promiseOne, promiseTwo, promiseThree]).then((data) => {
    console.log(`Задание 1. Первый отрабатовший промис - ${data}`);
})



//================================================= Exercise 2 =======================================================
// Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число 
// от 1 до 5. Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем возводить его 
// в квадрат и выводить на экран.

function getNum () {
    return new Promise(resolve => {
        setTimeout(() => {
            let random = Math.floor(Math.random() * 4 + 1);
            console.log(`Задание 2. Случайное число функции getNum - ${random}`);
            resolve(random);
        }, 3000);
    })
}

async function wait () {
    const result = await getNum();
    console.log(`Асинхронная функция выполнена. Результат возведения в квадрат - ${Math.pow(result, 2)}`);
}

wait();



//================================================= Exercise 3 =======================================================
// Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число 
//  от 1 до 5. Используйте также функцию getNum, чобы вернуть промис, который с задержкой в 5 секунд выведет случайное 
// число от 6 до 10. Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем будет 
// дожидаться результата getNum, а затем найдет сумму полученных чисел и выводит на экран.

function getNumTwo (num, timeout, min, max) {
    return new Promise(resolve => {
        setTimeout(() => {
            let random = Math.floor(Math.random() * (max - min) + min);
            console.log(`Задание 3. ${num} cлучайное число функции getNum - ${random}`);
            resolve(random);
        }, timeout * 1000);
    })
}

async function waitTwo () {
    const promiseOne = await getNumTwo('Первое', 3, 1, 5);
    const promiseTwo = await getNumTwo('Второе', 5, 6, 10);
    console.log(`Сумма полученных чисел: ${promiseOne + promiseTwo}`);
}

waitTwo();