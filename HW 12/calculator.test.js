// 1. Файл calculator.js лежит в облаке;
// 2. Создать проект для автотестов;
// 3. Выбрать один из пройденных фреймворков: Jamine, Mocha, Jest;
// 4. Написать максимальное количество юнит тестов для методов класса, каждый тест должен содержать проверку;
// 5. Установить eslint, настроить правила для статической проверки кода, добавить папки, которые не надо проверять в игнор на проверку.

const { Calculator } = require('./calculator')

const calculator = new Calculator();

describe('"Add" function:', () => {
  test.each([
    [1, 2, 3],
    [0, 4, 4],
    [5, -4, 1],
    [-1, -6, -7],
    [0, 0, 0],
  ])('should return sum of two integer values: %d + %d = %d', (a, b, c) => {
    expect(calculator.add(a, b)).toBe(c);
  });

  test.each([
    [1, 0.2, 1.2],
    [0.1, 0.2, 0.3],
    [-0.1, 0.2, 0.1],
  ])('should return sum of two float values: %d + %d = %d', (a, b, c) => {
    expect(calculator.add(a, b)).toBeCloseTo(c);
  });

  test('set of numbers should return sum of values', () => {
    expect(calculator.add(2, 5, 8, 23)).toBe(38);
  });

  test('should return sum of two big values', () => {
    expect(calculator.add(123456789012345678, 876543210987654321)).toBe(1000000000000000000);
  });

  test('should return values if one of the argument is null', () => {
    expect(calculator.add(null, 1)).not.toBeNull();
  });

  test('should returned result is defined', () => {
    expect(calculator.add(3, 1)).toBeDefined();
  });

  test('should return NaN if one of the argument = string', () => {
    expect(calculator.add('2', 1)).toBeNaN();
  });

  test('should return NaN if one of the argument is Undefined', () => {
    expect(calculator.add(undefined, 1)).toBeNaN();
  });

  test('should return NaN if one of the argument is boolean', () => {
    expect(calculator.add(true, 1)).toBeNaN();
  });
});



describe('"Multiply" function:', () => {
  test.each([
    [1, 2, 2],
    [3, 4, 12],
    [0, 4, 0],
    [5, -4, -20],
    [-2, -6, 12],
    [0, 0, 0],
  ])('should return multiplication result of two integer values: %d * %d = %d', (a, b, c) => {
    expect(calculator.multiply(a, b)).toBe(c);
  });

  test.each([
    [1, 0.2, 0.2],
    [0.1, 0.3, 0.03],
    [-0.1, 0.2, -0.02],
  ])('should return multiplication result of two float values: %d * %d = %d', (a, b, c) => {
    expect(calculator.multiply(a, b)).toBeCloseTo(c);
  });

  test('set of numbers should return multiplication result of values', () => {
    expect(calculator.multiply(2, 5, 8, 23)).toBe(1840);
  });

  test('should return multiplication result of two big values', () => {
    expect(calculator.multiply(123456789012345678, 1)).toBe(123456789012345678);
  });

  test('should return values if one of the argument is null', () => {
    expect(calculator.multiply(null, 1)).not.toBeNull();
  });

  test('should returned result is defined', () => {
    expect(calculator.multiply(3, 1)).toBeDefined();
  });

  test('should return NaN if one of the argument = string', () => {
    expect(calculator.multiply('2', 1)).toBeNaN();
  });

  test('should return NaN if one of the argument is Undefined', () => {
    expect(calculator.multiply(undefined, 1)).toBeNaN();
  });

  test('should return NaN if one of the argument is boolean', () => {
    expect(calculator.multiply(true, 1)).toBeNaN();
  });
});



describe('"Subtraction" function:', () => {
  test.each([
    [3, 2, 1],
    [3, 4, -1],
    [0, 4, -4],
    [5, 0, 5],
    [-2, -6, 4],
    [0, 0, 0],
  ])('should return subtraction result of two integer values: %d - %d = %d', (a, b, c) => {
    expect(calculator.subtraction(a, b)).toBe(c);
  });

  test.each([
    [1, 0.2, 0.8],
    [0.5, 0.1, 0.4],
    [0.1, 0.3, -0.2],
    [-0.1, -0.2, 0.1],
  ])('should return subtraction result of two float values: %d - %d = %d', (a, b, c) => {
    expect(calculator.subtraction(a, b)).toBeCloseTo(c);
  });

  test('set of numbers should return subtraction result of values', () => {
    expect(calculator.subtraction(33, 5, 8, 14)).toBe(6);
  });

  test('should return subtraction result of two big values', () => {
    expect(calculator.subtraction(876543210987654321, 123456789012345678)).toBe(753086421975308500);
  });

  test('should return values if one of the argument is null', () => {
    expect(calculator.subtraction(null, 1)).not.toBeNull();
  });

  test('should returned result is defined', () => {
    expect(calculator.subtraction(3, 1)).toBeDefined();
  });

  test('should return NaN if one of the argument = string', () => {
    expect(calculator.subtraction('2', 1)).toBeNaN();
  });

  test('should return NaN if one of the argument is Undefined', () => {
    expect(calculator.subtraction(undefined, 1)).toBeNaN();
  });

  test('should return NaN if one of the argument is boolean', () => {
    expect(calculator.subtraction(true, 1)).toBeNaN();
  });
});



describe('"Divide" function:', () => {
  test.each([
    [3, 2, 1.5],
    [12, 4, 3],
    [9, 1, 9],
    [0, 4, 0],
    [4, -2, -2],
    [-6, -2, 3],
  ])('should return division result of two integer values: %d / %d = %d', (a, b, c) => {
    expect(calculator.divide(a, b)).toBe(c);
  });

  test.each([
    [1, 0.2, 5],
    [0.6, 0.1, 6],
    [0.3, -0.1, -3],
    [-0.3, -0.1, 3],
  ])('should return division result of two float values: %d / %d = %d', (a, b, c) => {
    expect(calculator.divide(a, b)).toBeCloseTo(c);
  });

  test('should return Infinity if dividing to 0', () => {
    expect(calculator.divide(4, 0)).toBe(Infinity);
  });

  test('set of numbers should return division result of values', () => {
    expect(calculator.divide(42, 2, 3)).toBe(7);
  });

  test('should return division result of two big values', () => {
    expect(calculator.divide(876543210987654321, 123456789012345678)).toBeCloseTo(7.1);
  });

  test('should return values if one of the argument is null', () => {
    expect(calculator.divide(null, 1)).not.toBeNull();
  });

  test('should returned result is defined', () => {
    expect(calculator.divide(3, 1)).toBeDefined();
  });

  test('should return NaN if one of the argument = string', () => {
    expect(calculator.divide('2', 1)).toBeNaN();
  });

  test('should return NaN if one of the argument is Undefined', () => {
    expect(calculator.divide(undefined, 1)).toBeNaN();
  });

  test('should return NaN if one of the argument is boolean', () => {
    expect(calculator.divide(true, 1)).toBeNaN();
  });
});



describe('"Exponentiation" function:', () => {
  test.each([
    [3, 9],
    [0, 0],
    [-2, 4],
    [-1, 1],
  ])('should return exponentiation result of integer value', (a, c) => {
    expect(calculator.exponentiation(a)).toBe(c);
  });

  test.each([
    [0.5, 0.25],
    [-0.3, 0.09],
  ])('should return exponentiation result of float value:', (a, c) => {
    expect(calculator.exponentiation(a)).toBeCloseTo(c);
  });

  test('should return exponentiation result of big value', () => {
    expect(calculator.exponentiation(1234567890)).toBeCloseTo(1524157875019052000);
  });

  test('should return values if one of the argument is null', () => {
    expect(calculator.exponentiation(null)).not.toBeNull();
  });

  test('should returned result is defined', () => {
    expect(calculator.exponentiation(3)).toBeDefined();
  });

  test('should return NaN if one of the argument = string', () => {
    expect(calculator.exponentiation('2')).toBe(NaN);
  });

  test('should return NaN if one of the argument is Undefined', () => {
    expect(calculator.exponentiation(undefined)).toBe(NaN);
  });

  test('should return NaN if one of the argument is boolean', () => {
    expect(calculator.exponentiation(true)).toBe(NaN);
  });
});
