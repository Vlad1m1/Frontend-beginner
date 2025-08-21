// Ключевое слово this.
// Если указать this в теле функции или в глобальной инструкии (console.log), то this будет показывать глобальный объект окно,
// все его методы и свойства.
console.log("this глобальный: ", this);

function fn() {
  console.log("this внутри функции: ", this);
}

fn();

// А если указать this просто в методе объекта?
const user = {
  name: "Владимир",
  age: 23,
  printInfo: function () {
    console.log(this);
  }
}

// В данном случае информация будет выведена в целом об объекте.
user.printInfo();

// Исходя из опыта использования this из других языков, могу сделать вывод, что this также является указателем на объект
// В глобальной инструкции (функции не привязанной к объекту или через console.log) this будет указывать
// На глобальный объект window, выводя весь объект в консоль (все его свойства и методы).
// this следует использовать внутри методов объекта, для манипуляции со свойствами внутри него.
// В качестве примера сделаю калькулятор.
const calculator = {
  read() {
    this.a = Number(prompt("Введите число a: ", 0));
    this.b = Number(prompt("Введите число b: ", 0));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// Задачка ladder с сайта LearnJS
let ladder = {
  step: 0,
  up() {
    this.step++;
    console.log(this)
    return this;
  },
  down() {
    this.step--;
    console.log(this)
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};

ladder
  .up()
  .up()
  .down()
  .showStep()
  .down()
  .showStep(); // показывает 1 затем 0

