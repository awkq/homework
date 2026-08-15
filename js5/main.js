// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = { name: "Андрей", gender: "Боевой вертолёт", age: 10 };

for (const key in person) {
  console.log(`${key} `, person[key]);
}

console.log("");
// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(object) {
  for (const Key in object) {
    console.log(`чета есть`);
    return true;
  }
  console.log(`Ничего там нет `);
  return false;
}

console.log(isEmpty(person));

// const empty = {};
// console.log(isEmpty(empty));

console.log("");
// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
  title: "Задача",
  description: "3",
  isCompleted: false,
};

const mod = {
  name: "модификация",
  isCompleted: true,
};

function cloneAndModify(object, modifications) {
  const newObject = { ...object, ...modifications };
  return newObject;
}

const modObj = cloneAndModify(task, mod);

for (const key in modObj) {
  console.log(` ${key} `, modObj[key]);
}

//
console.log("");
// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};

const callAllMethods = (object) => {
  for (const keys in object) {
    if (typeof object[keys] == "function") {
      object[keys]();
      console.log(` ${keys} `, object[keys]);
    }
  }
};

callAllMethods(myObject);
