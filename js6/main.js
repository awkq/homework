"use strict";
// Задание 1.
// Дан массив пользователей:
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];
console.log(users);
// Добавьте в конец массива двух пользователей:
users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);
console.log(users);
// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

const getUserAverageAge = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].age;
  }
  sum /= array.length;
  return sum;
};

console.log(getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

const getAllAdmins = (array) => {
  const admins = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].isAdmin === true) {
      admins.push(array[i]);
    }
    // console.log(admins);
  }
  return admins;
};

console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

function first(arr, n) {
  const newArr = [];
  if (n === 0) {
    return [];
  } else if (n > arr.length) {
    console.error(`не может быть больше длинны массива: ${arr.length}`);
    return;
  } else if (n === undefined) {
    newArr.push(arr[0]);
    return newArr;
  }
  for (let i = 0; i < n; i++) {
    newArr.push({ ...arr[i] });
  }
  return newArr;
}

console.log(first(users, undefined));
