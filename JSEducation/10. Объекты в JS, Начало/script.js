//Объект придуман ля того, чтобы хранить не примитивный тип данных, который состоит из примитивных. Хранится в виде пар ключ-значение.
// Два способа объявления объекта.
let firstEmptyObject = {};
let secondEmptyObject = new Object();

const user = {
  login: 'iamsuperhero',
  password: 'qwerty',
  "registration date": "01.01.2024", //Если имя свойства содержит пробел или дефис, то кавычки стоит указывать.
  "last-auth": "05.04.2024",

  age: 33,
  isAdult: true,
  job: null,
  kids: undefined,
  address: {
    city: "Tula",
    zipCode: 112233,
  },
  sayHi: () => console.log("Привет!"), // висячая запятая, пусть будет
  "say goodbye": () => console.log("Пока!"),
};

console.log(user.login); //Если свойство не в кавычках
console.log(user["registration date"]);
user.sayHi(); //Если свойство объекта указана как функция одним словом.
user["say goodbye"](); //Если свойство объекта названо в кавычках и является функицией.
console.log(user.blblblbl); // Вывод несуществующего свойства объекта user

const anotherUser = {};

anotherUser.name = "Владимир"; // Пример добавления свойств к объекту (для одного слова и свойства в кавычках)
anotherUser["is developer"] = true;

console.log(anotherUser);

anotherUser.name = "Максим";
console.log(anotherUser)

delete anotherUser.name;
delete anotherUser["is developer"];
delete anotherUser.age; // Мы также можем удалить свойство, которого не было. Так конечно лучше не надо делать. Но имей ввиду, что такое возможно и ничего не ругает.

console.log(anotherUser);

