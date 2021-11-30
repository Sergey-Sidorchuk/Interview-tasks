// 1) Паше 17 лет. Пока он еще ребенок, но через год станет полноценной ячейкой общества. 
// Напишите скрипт, который бы показывал, что пока Паше 17 лет, 
// он - ребенок, но, когда станет 18 - он взрослый. 
// Возраст Паши поместите в переменную."

const age = 17;
if(age < 18){
  console.log('Ребенок');
}
else{
  console.log(' Не ребенок');

}

// 2) Дана строка 'Гуляю по городу и вижу солнце'.
//  Сделайте так, чтобы каждое слово было отдельным элементом массива.
// Должно получиться: ["Гуляю","по","городу", "и", "вижу", "cолнце"];

let string = 'Гуляю по городу и вижу солнце';
console.log(string.split(' '));

// 3) Напишите функцию, которая делает каждую первую букву в предложении 
// 'я тебя очень люблю и ценю' Заглавной.",

let str2 = 'я тебя очень люблю и ценю';
console.log(str2.split(/\s+/)
.map(word => word[0]
.toUpperCase() 
+ word.substring(1))
.join(' '));

// 4) Вам дан массив брендов машин:
//  ['BMW', 'Mersedes', 'Opel', 'Mazda', 'FIAT', 'Ferarri', 'Reno'].
  // Напишите функцию, которая принимает данный массив в качестве параметра
  //  и возвращает массив только с теми брендами,
    // название которых состоит из заглавных букв.

const arr = ['BMW', 'Mersedes', 'Opel', 'Mazda', 'FIAT', 'Ferarri', 'Reno'];
function cars (arr){
let newArr = [];    // создаем новый массив, в который будем пушить результат //
for(let i = 0; i < arr.length; i++) {   // счетчик //
  let upperElement = arr[i].toUpperCase()  // записываем в переменную элементы массива и приводим их в верхний регистр//
  if(upperElement === arr[i]) { // сравниваем элементы массива и созданную переменную //
    newArr.push(arr[i]); // пушим в новый массив элементы в верхнем регистре//
  }
}
return newArr 
} 
console.log(cars(arr));




// 5) Дана строка: 'abcde'. Проверьте, что первым символом этой строки является буква
//  'a'. Если это так - выведите 'да',
//   в противном случае выведите 'нет'.
let string1 = "abcde";
let firstLetter = string1.charAt(0); // Получаем первую букву строки

if(firstLetter === 'a'){ // Сравниваем ее с "а"
  console.log('Да');
}
else {
  console.log('Нет');
}

