//================================================= Exercise 1 =======================================================
// 1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.

interface User {
    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number,
}

const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
    }
];

console.log(users);


//================================================= Exercise 2 =======================================================
// 2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфей Person, который будет 
// соответствовать массиву

interface Admin {
    name: string,
    age: number,
    role: string
}

type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

console.log(persons);


//================================================= Exercise 3 =======================================================
// 3. Напишите анотации типов к этому классу.

export class ObjectManipulator {

    constructor(protected obj: object) {}

    public set(key: string, value: any): object {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key: string): any {
        return this.obj[key];
    }

    public delete(key: string): object {
        const newObj: any = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): object {
        return this.obj;
    }
}


//================================================= Exercise 4 =======================================================
// 4. Обеспечьте правильную типизацию для указанных функций.

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */


export function map(mapper: Function, input: any[]): any[] | Function {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: any[]): any[] | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper());
        };
    }
    return input.map(mapper());
}


/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
// export function filter(filterer, input) {
//     if (arguments.length === 0) {
//         return filter;
//     }
//     if (arguments.length === 1) {
//         return function subFunction(subInput) {
//             if (arguments.length === 0) {
//                 return subFunction;
//             }
//             return subInput.filter(filterer);
//         };
//     }
//     return input.filter(filterer);
// }


/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
// export function add(a, b) {
//     if (arguments.length === 0) {
//         return add;
//     }
//     if (arguments.length === 1) {
//         return function subFunction(subB) {
//             if (arguments.length === 0) {
//                 return subFunction;
//             }
//             return a + subB;
//         };
//     }
//     return a + b;
// }

// Следующее воскресенье крайний срок.
// Крайний срок 12.11