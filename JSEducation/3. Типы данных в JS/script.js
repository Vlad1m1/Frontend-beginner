// Есть 8 типов данных.
// 6 примитивных - string, number, boolean, big int, symbol, underfined
// 2 уникальных - null и object

let string1 = 'Привет', string2 = "Владимир", string3 = `Пока`
//`` - бэктики, используются для того, чтобы вставить другие переменные в строку с помощью ${}
//Также можно с их помощью писать на другие строки.
console.log(`${string1 + string2 + string3}`)
console.log('Слово' / 100) //Спец. значение - Nan
console.log(100/0) //Спец значение - Infinity
console.log(-100/0) //Спец значение - -Infinity

let bigInt = 9_900_000_000_000_000_000n + 123n
console.log(bigInt);

let shouldLearnJs = true;
let isAlreadyLate = false;

let age = 38;
let condition = age > 45;
console.log(condition);

let data = null; //Ничто, пустое, неизвестно значение.
console.log(data)

let name;
console.log(name);

const user = {
  name: 'Владимир',
  age: 21,
  isStajer: true
}; //Объект
console.log(user);

//Оператор typeof - определяет тип данных
console.log(typeof 100n);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof {});

//Пример неявных преобразований
let num = 111;
let str = '222';
let result = num + str;

console.log(result);
console.log(typeof result);

//Такого быть не должно, да это возможно, но не так делать не стоит с неявным преобразованием!
console.log('18' / '9')
console.log(typeof ('18' / '9'))

//Явное преобразование. Используем ключевые слова типов данных!
const isAdult = false;
console.log(isAdult);
console.log(String(isAdult));

console.log(
  Number(null)
);
console.log(
  String(user) //Попытки всегда будут неудачны.
);

//Если строка заполнена, то будет true
//Если пустая, то false
console.log(
  Boolean('0')
);
console.log(
  Boolean(null)
);
console.log(
  Boolean(0)
);
console.log(
  Boolean(undefined)
);
console.log(
  Boolean(NaN)
);
console.log(
  Boolean(0)
);
console.log(
  Boolean(1)
);
console.log(
  Boolean(-100)
);
