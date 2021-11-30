// 1) Напишите функцию, которая принимает в себя год и возвращает век, в котором он находится.
// Пример:
//         "centry(1705) => return 18",
//         "centry(1601) => return 17",
//         "centry(1900) => return 19",
//         "centry(81) => return 1",
function change(year) {
if (year/100 === 0) return 1;  // Если год 0 или меньше 1 возрвщаем 1
else if(year % 100 === 0) return year/100; // Если остаток от деления 0, то возвращаем год/100
else return Math.trunc(year/100) + 1; // Убираем цифры после запятой и добавляем 1
}
console.log(change(1705));
console.log(change(1900));
console.log(change(81));


// 2) Напишите функцию, которая будет принимать в себя текущий цвет светофора,
//  а возвращать цвет, в который он должен перейти.
//   Учитывайте то, что после красного, всегда загорается зеленый, а после зеленого желтый, а затем красный.
// Пример:
//         "updateLight('Зелёный') => 'Жёлтый'",
//         "updateLight('Жёлтый') => 'Красный'",
//         "updateLight('Красный') => 'Зелёный'",
function updateLight (currentColor) {
switch(currentColor) {
  case 'Зелёный': return 'Жёлтый';     // Если value = Зелёный, тогда Жёлтый  
  case 'Жёлтый': return 'Красный';     // Если value = Жёлтый, тогда Красный  
    case 'Красный': return 'Зелёный';  // Если value = Красный, тогда Зелёный  
    default: return 'Error'; 
}
}
console.log(updateLight('Зелёный'));
console.log(updateLight('Жёлтый'));
console.log(updateLight('Красный'));
console.log(updateLight('Синий'));



// // 3) Напишите функцию, которая принимает в себя массив, а возвращает произведение элементов массива,
//  умноженных по порядку друг на друга.
// Пример:
//         "example([1, 2, 3, 4]) => 24"

// function example (arr){
// let arr1=[]

// }

let mult = 1;

let example = (arr) => {
for (let i of arr) {
  // console.log(i);
    mult *= i;
    console.log(mult);
  }
  return mult;
}
console.log(example([5,7,10]));