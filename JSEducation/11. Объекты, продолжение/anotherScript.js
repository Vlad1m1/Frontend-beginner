// Поверхностное и глубокое копирование
// Если в объекте лежат вложенные объекты, то последний со спрэд оператором или последний по счёту в assign перезапишет этот объект
// и полная информация, которая нам нужна не запишется, запишется только то значение, которое было у последнего объекта. Это поверхностное копирование
// Для того, чтобы делать глубокое копирование объектов внутри объектов, нужны сторонние библиотеки (ladash) или свои костыли с рекурсиями.
const name = {name: "Володя"};

const age = {
  age: 28,
  address: {
    city: "Москва",
  },
};

const somePerson = {
  name: "Максик",
  isDeveloper: true,
  address: {
    zipcode: 123456,
  },
}

const someUser = {...name, ...age, ...somePerson};
console.log("User: ", someUser);

//Опциональная цепочка.
const user = {
  name: "Владимир",
  age: 28,
  // address: { // Может быть такое, что в теории такого свойства не может быть у объекта. //Из-за этого скрипт остановится, и ничего не прогрузится дальше.
  //   city: "Тула",
  //   zipcode: 123456,
  // },
};

// Тут нам поможет Опциональная цепочка (Optional chaining, ?.).
console.log(user?.address?.city);
console.log("Какой-то текст.");

// Деструктуризация объекта - разбитие объекта на отдельные переменные.
// Первый способ:
const userAnother = {
  name: "Владимир",
  age: 28,
  isDeveloper: true,
}

// const namee = userAnother.name; - такой спсособ более муторный, есть куда проще способ.
// const agee = userAnother.age;
// const isDeveloper = userAnother.isDeveloper;
// В данном случае я сделал деструктуризация с переименованием, так как имена свойств уже я определял ранее в виде констант.
// В случае, если у нас нет таких же объявленных переменных (например: isDeveloper), то можно использовать имена, которые совпадают с именованием свойств.
const {
  name: namee,
  age: agee,
  isDeveloper,
} = userAnother;

console.log("name: ", namee);
console.log("agee", agee);
console.log("isDeveloper", isDeveloper);

// Продолжение в файле otherDestructurizations.js
