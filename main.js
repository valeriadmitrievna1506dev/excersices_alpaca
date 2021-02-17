// Дан массив с числами.

// #1
// 	Сделайте из него массив, состоящий
//  из квадратов этих чисел.
let array = [1, 2, 5, 4, 9];
console.log(`1. start array: ${[...array]}`);
array = array.map((elem) => {
  return elem * elem;
});
console.log(`new array: ${[...array]}`);

// #2
// Верните массив, состоящий только из
// уникальных значений.
array = [1, 3, 2, 1, 6, 3, 5, 3, 11, 2, 3, 3, 1];
console.log(`2. start array: ${[...array]}`);
array = array.filter(function (item, pos) {
  return array.indexOf(item) == pos;
});
console.log(`new array: ${[...array]}`);

// #3
// 	Проверьте то, что все элементы в
//  массиве больше нуля.
array = [1, 3, 0, 5, 1, 5];
console.log(`3. start array: ${[...array]}`);
array.find((elem) => elem <= 0) || array.find((elem) => elem <= 0) === 0
  ? console.log('there element(s) that less or equal to zero')
  : console.log('all elements more than zero');

// #4
// 	Верните true, если сумма хотя бы одной
//  пары в последовательности больше 10

// WARNING! я не заметила поправку в задании
// и сделала проверку суммы любой произвольной пары
array = [1, 3, 0, 5, 1, 1];
console.log(`3. start array: ${[...array]}`);

function more10(array) {
  for (let index1 = 0; index1 < array.length; index1++) {
    for (let index2 = 0; index2 < array.length; index2++) {
      if (index1 != index2) {
        if (array[index1] + array[index2] >= 10) return true;
      }
    }
  }
}
more10(array)
  ? console.log('сумма хотя бы одной произвольной пары больше 10')
  : console.log('нет такой пары, сумма которой больше 10');

// #5
// 	Оставьте только отрицательные числа.
// 	Найдите сумму этих чисел.

array = [1, -3, 0, -5, -1, 1, 1, -3, 0, 5, 1, 1];
console.log(`5. start array: ${[...array]}`);

array = array.filter((item) => item < 0);
console.log(`new array: ${[...array]}`);
array = array.reduce((acc, cur) => acc + cur);
console.log(`sum of new array: ${array}`);

// #6
// Дан массив, в нем могут быть обычные элементы
// и подмассивы, например [1, 2, [3, 4], 5, [6, 7]].
// Оставьте в нем только подмассивы.

array = [1, 2, [3, 4], 5, [6, 7, 8]];
console.log(`6. start array: `, array);
array = array.filter((item) => typeof item === 'object');
console.log('output array: ', array);

// Дана строка

// #7
// 	Верните количество слов в строке, длина
//  которых больше 4 символов.

let string = ' hey  its my beautiful  string ';
console.log(`7. start string: ${string}`);
string = string.trim().replace(/[ ]{1,}/g, ' ')
string = string.split(' ')
let words4Count = 0
string.forEach(element => {
    if (element.length > 4) words4Count++
});
console.log(`count of words that longer than 4: ${words4Count}`);

// #8
// 	Если в строке имеется шестизначный номер
//  - верните его, как результат функции
string = ' hey 53  its  53453 my   5345  534555string ';
console.log(`8. start string: ${string}`);
let number = null;
string.trim().replace(/\d{1,}/g, (n) => {
  if (n.toString().length === 6) number = n;
});
number ? console.log(`number: ${number}`) : console.log('number doesnt exist');
