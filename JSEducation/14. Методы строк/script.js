// Как узнать длину строки:
let name = "Владимир";
let emptyStr = "";
let strWithOneSpace = " ";

console.log(`Длина строки: ${name}: ${name.length}.`);
console.log(`Длина строки: ${emptyStr}: ${emptyStr.length}.`);
console.log(`Длина строки: ${strWithOneSpace}: ${strWithOneSpace.length}.`);

// Получение символа из строки (2 способа):
// Через индекс. Первый символ строки имеет индекс 0.
console.log(name[0]);
console.log(name[name.length - 1]);

// Через метод at (где указываем индекс символа, если указать отрицательное значение, то тогда символы будут отображаться в обратном порядке.
console.log(name.at(0));
console.log(name.at(-1));

// Методы изменения регистра:
console.log(name.toUpperCase()); // Полный перевод всех букв в верхний регистр
console.log(name.toLowerCase()); // Полный перевод всех букв в нижний регистр.

// Методы избавления от пробелов в начеле и в конце строки.
let message = "    Привет!    "
console.log(`Длина строки ${message} : ${message.length}`);
console.log(`Длина строки ${message.trim()} : ${message.trim().length}`);

// Также есть ещё две вариации для точечного удаления пробелов (только в начале или только в конце).
message = "Привет!    "
console.log(`Длина строки ${message} : ${message.length}`);
console.log(`Длина строки ${message.trimEnd()} : ${message.trimEnd().length}`);

message = "    Привет!"
console.log(`Длина строки ${message} : ${message.length}`);
console.log(`Длина строки ${message.trimStart()} : ${message.trimStart().length}`);

// Проверка наличия подстроки в строке.
// indexOf - ищет индекс первого элемента подстроки в строке, если он там имеется. Также можно искать одиночный символ в строке.

message = "Попробуем найти ~это выражение~ в этом предложении";
console.log(message.indexOf("~это выражение~")); // Если выводит -1, значит нет такого символа/подстроки.
