// Объект -- ссылочный тип данных!
const obj1 = {
  age: 10,
  name: "Володя",
  address: {
    city: "Тула",
    zipcode: 123456,
  },
};

const obj2 = {
  age: 10,
  name: "Александр",
  address: {
    city: "Тула",
    zipcode: 123456,
  },
};

console.log(obj1 === obj2); // false - даже если они оба пустые.

// JS проверяет при сравнении объектов, ссылаются ли они на одно и то же место в памяти?
// Если нет, результат false, если да, то true.
// В случае если мы приравниваем один объект другому, то тогда объект два просто начинает ссылаться на то же место в памяти,
// что и объект 1, то бишь значение НЕ КОПИРУЕТСЯ
const obj3 = {age: 12};
const obj4 = obj3;

console.log(obj3);
console.log(obj4);
console.log(obj3 === obj4);

// Задачка сравнения двух объектов.
const areObjectEqual = (object1, object2) => {
  const keys1 = Object.keys(object1); // Object.keys() - возвращает массив ключей (имён свойств) объекта.
  const keys2 = Object.keys(object2);


  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key in keys2) {
    const value1 = object1[key];
    const value2 = object2[key];
    const areValuesObjects =
      typeof value1 === "object"
      && typeof value2 === "object"; //Проверка ключа на тип "Объект"

    if (areValuesObjects) {
      return areObjectEqual(value1, value2);
    }

    if (value1 !== value2) {
      return false;
    }
  }

  return true;
}

console.log(
  "Одинаковы ли объекты obj1 и obj2: ",
  areObjectEqual(obj1, obj2)
);

// Копирование объекта. Через for in.
const objNew1 = {
  age: 10,
  name: "Володя",
  address: {
    city: "Тула",
    zipcode: 123456,
  },
};

const objNew2 = {};

for (const key in objNew1) {
  objNew2[key] = objNew1[key];
}

console.log(objNew1);
console.log(objNew2);

// Копирование объекта. Через Object.assign()
const objNew3 = {name: "Александр", age: 28,};
const objNew4 = Object.assign({}, objNew3);

objNew4.name = "Владимир";

console.log(objNew3);
console.log(objNew4);

// Копирование объекта через Spread Operator (оператор расширения).
const objNew5 = {name: "Владимир"};
const objNew6 = {...objNew5};

console.log(objNew5);
console.log(objNew6);

// Объединение объектов. Через Object.assign
const name = {name: "Александр"};
const age = {age: 34};
const randomPerson = {
  name: "Володя",
  isDeveloper: true,
}

const user = Object.assign({}, name, age, randomPerson); //ВАЖНО: если какое-то свойство повторяется, и у свойства разные значения в объектах,
// то тогда свойство перезапишется при объединении, возьмётся значение из конечного в этой цепочке объекта.
// Также можно использовать spread оператор: const user = {...name, ...age, ...randomPerson};

console.log("user: ", user)
// Продолжение в следующем файле.
