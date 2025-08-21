// Методы примитивов.
// У переменных есть тоже свои методы, как и у объектов, которые мы прописали сами.

let price = 1580.65;
let roundedPrice = price.toFixed(0); // Округление числа, если оставить пустым, то округление будет до целого.

console.log("Округлённая цена: ", roundedPrice);

// Если число целое:
console.log(100..toFixed(2)); // Обращение к числу идёт через две точки. Добавляет нули после запятой, fractionDigits - количество знаков после запятой.
console.log((100.9567).toFixed(2)); // Если число дробное, то можно сразу воспользоваться методом, только надо число взять в скобки.

// toPrecision() - тоже округляет, но мы вводим ту длину числа, которая нам нужна.
let num = 100.055

console.log(num.toPrecision(4));

// toString - перевод числа в формат строки
num = 100;
let numAsString = num.toString();

console.log("Число: ", num);
console.log("Число в виде строки: ", numAsString);

console.log(typeof num);
console.log(typeof numAsString);

// Неочевидный функционал: при помощи метода toString можно получить в виде строки представление числа в той или иной системе счисления.
// Во фронтенде это не используется, но знать стоит.
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(4));

// А теперь пора поговорить про объект Math
// Данный объект, исходя из названия, позволяет делать нам какие-то вещи, связанные с математикой. (Частично) и не только
console.log(Math);

// Наиболее важные методы:
console.log("Случайное число: ", Math.random());
console.log("Модуль числа: ", Math.abs(-100))
console.log("Ещё один модуль: ", Math.abs(-6700))
console.log("Ещё один модуль: ", Math.abs(100))
console.log("Возведение в степень?: ", Math.pow(2, 10)); // x - возводимое в степень, y - степень
console.log("Квадратный корень: ", Math.sqrt(9));
console.log("Кубический корень: ", Math.cbrt(27));

// Методы возврата макс. и мин. значения.
console.log(Math.max(1, 2, 3, 4, 5, 6, 0, 10, 20000, 29_000_000_000));
console.log(Math.max(0, -100, -200000));

// Округление чисел c помощью Math
console.log("Math.round - округление по стандартным правилам: ", Math.round(3.69));
console.log("Math.round - округление по стандартным правилам: ", Math.round(3.49));

console.log("Math.floor - округление до ближайшего наименьшего целого: ", Math.floor(1.89));
console.log("Math.floor - округление до ближайшего наименьшего целого: ", Math.floor(-1.01));

console.log("Math.ceil - округление до ближайшего наибольшего целого: ", Math.ceil(1.01));
console.log("Math.ceil - округление до ближайшего наибольшего целого: ", Math.ceil(-1.89));

console.log("Math.trunc - положительно всегда вниз, отрицательное - всегда вверх: ", Math.trunc(2.89));
console.log("Math.trunc - положительно всегда вниз, отрицательное - всегда вверх: ", Math.trunc(-2.89));

// функции parseInt и parseFloat - созданы для того чтобы брать из строки целое число или число с плавающей точкой
// Если в начале стоит символ, не являющийся численным, то тогда будет выведен NaN
let numberAsString = "100px";
let floatNumberAsString = "100.95px";
console.log(parseInt(numberAsString));
console.log(parseFloat(floatNumberAsString));