//Функция которая просто что-то делает. Она ничего не возвращает, никакие входные параметры не выдаёт
// Такой способ объявления функции называется function declaration, он может
function logHello () {
  console.log("Привет!");
  console.log("Пока!");
}

logHello();
logHello();
logHello();

// Время поломать мозг! глобальные и локальные переменные внутри функции можно называть одинаково, так как
// данная переменная видна только внутри функции! Такая фигня есть с любыми локальными переменными (в том числе и в цикле)
const message = "Глобальный привет!";

function localHello() {
  const message = "Локальный привет!";
  console.log(message);
}

localHello();
localHello();
localHello();

console.log(message);
console.log(message);
console.log(message);

// Функция при вызове может передавать какие-то параметры функции, чтобы внутри они использовались
function logMessage(message, count) {
  for (let i = 0; i < count; i++) {
    console.log(message);
  }
}

logMessage("Привет, мир!", 3);
logMessage("Прощай, мир!", 2);

// Имена параметров стоит задавать так, чтобы это было понятно, что он является параметром функции, для меньших головных болей.
// Также можно задавать параметрам функции значения по умолчанию, в случае, если параметры не определены.
function sumFiveNums(
  num5,
  num1 = 100,
  num2 = 200,
  num3 = 300,
  num4 = 400,
) {
  const sum = num1 + num2 + num3+ num4+ num5;

  console.log(`Сумма чисел равна ${sum}`);
}

sumFiveNums(1000);
sumFiveNums(4, 4, 4,4, 4);

// Функции с возвращаемым значением. В конце пишется ключевое слово return, которое возвращает какой-то результат (операция, значение, объект и т. д.)
function sum(a, b) {
  return a + b;
}

console.log(
  sum(111, 222)
);

function getAgeType(age) {
  if (typeof age !== "number")
    return "Возраст указан некорректно.";
  if (age < 1 || age > 125)
    return "Такого возраста не может быть!";
  if (age < 18)
    return "Несовершеннолетний.";
  else
    return `Ваш возраст ${age}.`;
}

console.log(
  getAgeType(25)
);

function getSecretMessage(name) {
  if (!name) return;
  return `О, я тебя знаю! Ты же тот самый ${name}?`;
}

console.log(
  getSecretMessage("Долбаёб")
)