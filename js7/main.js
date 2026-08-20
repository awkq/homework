// 1
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

let a = "the-stealth-warrior";
let b = "The_Stealth_Warrior";
let c = "The_Stealth-Warrior";

function toCamelCase(str) {
  const words = str.split(/-|_/);
  let result = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    result += word[0].toUpperCase() + word.slice(1);
  }
  return result;
}

console.log(toCamelCase(a));
console.log(toCamelCase(b));
console.log(toCamelCase(c));

// 2
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

let num1 = 493193;
let num2 = 16;

function digitalRoot(n) {
  let x = String(n).split("");
  while (1 < x.length) {
    x = x.reduce(function (acc, x) {
      acc += Number(x);
      return acc;
    }, 0);
    x = String(x).split("");
  }
  return Number(x[0]);
}
console.log(digitalRoot(num1));
console.log(digitalRoot(num2));

// 3
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

let arr1 = [2, 4, 0, 100, 4, 11, 2602, 36];
let arr2 = [160, 3, 1719, 19, 11, 13, -21];

// function findOutlier(integers) {
//   let a = integers.filter((item) => {
//     return item % 2;
//   });
//   let b = integers.filter((item) => {
//     return !(item % 2);
//   });
//   // if (a > b) {
//   //   return b;
//   // } else {
//   //   return a;
//   // }
//   return Number(a > b ? b : a);
// }
function findOutlier(integers) {
  let a = integers.filter((item) => {
    return item % 2;
  });
  let b = integers.filter((item) => {
    return !(item % 2);
  });
  return Number(a.length > b.length ? b : a);
}

console.log(findOutlier(arr2));

// 4
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

// There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.

function nbYear(p0, percent, aug, p) {
  let year = 0;
  percent /= 100;
  while (p0 < p) {
    p0 = p0 + Math.floor(p0 * percent) + aug;
    year++;
  }
  return year;
}
console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));

// 5
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

s1 = "aaabbbbhaijjjm";
s2 = "aaaxbbbbyyhwawiwjjjwwm";

function printerError(s) {
  let err = 0;
  let x = String(s).split("");
  x.forEach((item) => {
    if (item.localeCompare("m") > 0) {
      err++;
    }
  });
  return `${err}/${x.length}`;
}
console.log(printerError(s1));
console.log(printerError(s2));

// 6
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.
function likes(names) {
  if (names.length == 0) {
    return `no one likes this`;
  }
  if (names.length == 1) {
    return `${names} likes this`;
  }
  if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

//7
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.
// test("a", { a: 1 });
// test("ab", { a: 1, b: 1 });
// test("aba", { a: 2, b: 1 });
// test("ABC", { A: 1, B: 1, C: 1 });

function count(string) {
  return string.split("").reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    // console.log(acc);
    return acc;
  }, {});
}
let ab = "hellow";
console.log(count(ab));

//8
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  const counts = text
    .toLowerCase()
    .split("")
    .reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
  return Object.values(counts).filter((counts) => counts > 1).length;
}

console.log(duplicateCount("aabBcde"));

//9
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  let row = x.split(" ");
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let bestWord = "";
  let MaxScore = 0;

  row.forEach((word) => {
    let score = 0;
    for (let i = 0; i < word.length; i++) {
      score += alphabet.indexOf(word[i]) + 1;
    }
    if (score > MaxScore) {
      MaxScore = score;
      bestWord = word;
    }
  });
  return bestWord;
}

console.log(high("what time are we climbing up the volcano"));

//10
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  return string.replace(/[A-Z]/g, (item, off) =>
    off === 0 ? item : " " + item,
  );
}
console.log(solution("camelCasing"));
