//======================================== Задача 1 ============================================
/* 1. Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. 
У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.*/

let playerOne = 0;
let playerTwo = 0;

console.log('Игра в кубики началась!');

// Бросаем кубики
for (let i = 0; i < 3; i++){

    playerOneCast = Math.floor(Math.random() * 6) + 1;
    playerOne += playerOneCast;
    console.log('Первый игрок бросил кости. Результат броска - ' + playerOneCast);
    console.log('В сумме у первого игрока - ' + playerOne + ' очков.');

    playerTwoCast = Math.floor(Math.random() * 6) + 1;
    playerTwo += playerTwoCast;
    console.log('Второй игрок бросил кости. Результат броска - ' + playerTwoCast);
    console.log('В сумме у второго игрока - ' + playerTwo + ' очков.');
}

// Выводим результат
switch (playerOne > playerTwo){
    case true:
        console.log('Поздравляем первого игрока с победой!');
        break;
    case false:
        switch (playerOne < playerTwo){
            case true:
                console.log('Поздравляем второго игрока с победой!');
                break;
            case false:
                console.log('Победила дружба! Сыграйте еще раз.');
                break;
        }
        break;
    default:
        console.log('Извините, что-то пошло не так. Попробуйте сыграть еще раз.');
}



//======================================== Задача 2 ============================================
/* 2. Подсчитать количество Пятниц 13-ого с 01/01/2000 до сегодня. 
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )*/

let fridayThirteenthSum = 0;
const firstDate = new Date('2000-01-01');
const lastDate = new Date(Date.now());
let thirteenthDay

//Универсальный метод, обрабатывающий любую входящую дату firstDate
switch (firstDate.getDate() === 13){
    case true:
        thirteenthDay = new Date(firstDate.setDate(firstDate.getDate()));
        break;
    case false:
        switch (firstDate.getDate() < 13){
            case true:
                thirteenthDay = new Date(firstDate.setDate(firstDate.getDate() + (13 - firstDate.getDate())));
                break;
            case false:
                thirteenthDay = new Date(firstDate.setDate(firstDate.getDate() + (13 - firstDate.getDate())));
                thirteenthDay = new Date(firstDate.setMonth(firstDate.getMonth()+ 1));
                break;
        }
        break;
    default:
        console.log('Извините, что-то пошло не так. Проверьте дату, с которой нужно начать подсчет всех пятницы 13.');
        break;
}

//Подсчет количества пятниц 13 начиная с даты firstDate и по сегодняшний день
while (thirteenthDay <= lastDate) {
    if (thirteenthDay.getDay() === 5) {
        fridayThirteenthSum += 1;
        thirteenthDay = thirteenthDay.setMonth(thirteenthDay.getMonth()+ 1);
        thirteenthDay = new Date (thirteenthDay);
    } else {
        thirteenthDay = thirteenthDay.setMonth(thirteenthDay.getMonth()+ 1);  
        thirteenthDay = new Date (thirteenthDay);
    }
}

let newFirstDate = new Intl.DateTimeFormat("ru").format(firstDate);
console.log('Интересный факт: Начиная с ' + newFirstDate + ' прошло ' + fridayThirteenthSum + ' пятниц(а) тринадцатое ;-)');



//======================================== Задача 3 ============================================
/* 3. Напишите код который будет разбивать число на заданное количество рандомных чисел сумма 
которых будет равна изначальному числу. Пример: разбить 15 на 3 части (сумма трех чисел 
будет равна 15) (4,6,5)
    а. изначальное число целое, числа разбивки - целые (4,6,5)
    б. числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25) */

const num = 15; //число для разбивки
const div = 3; //кол-во частей, на которое разбиваем num

console.log('А теперь давайте разобъем число ' + num + ' на ' + div + ' части(ей): ')

// Разбиваем num на целые числа, кол-во которых заданно в div 
let n = 0;
let arr = [];
let i = 0;
let res;

while (n < div){
    if (((div - n) > 1) && (i < num)){
        res = Math.floor(Math.random() * (num - i) + 1);
        i += res;
        n += 1;
        arr.push(res);
    } else {
        res = num - i;
        n += 1;
        arr.push(res);  
    }
} 

console.log('а. числа разбивки целые: ' + arr);


// Разбиваем num на дробные числа, кол-во которых заданно в div 
n = 0;
arr = [];
i = 0;
res;

while (n < div){
    if (i < num){
        res = (Math.floor(Math.random() * ((num - i) * 100) + 1)) / 100;
        i += res;
        n += 1;
        arr.push(res);
    } else {
        res = 0;
        n += 1;
        arr.push(res); 
    }
} 

console.log('б. числа разбивки дробные: ' + arr);

