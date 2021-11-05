// function palindrom(str) {
//   // Приводим к нижнему регистру
//   str = str.toLowerCase();
//   return str === str.split("").reverse().join("");
//   //   // Приводим сторку  в массив
//   //   let str2 = str.split("");
//   //   // Зазворачиваем строку
//   //   str2 = str2.reverse();
//   //   // Обьеденяем  строку
//   //   str2 = str2.join();
//   //   if (str === str2) return true;
//   //   else return false;
//   //   return str2;
// }
// console.log(palindrom("hello"));
// console.log(palindrom("abba"));

const palindrom = (str) => {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
};

console.log(palindrom("tippit"));
console.log(palindrom("word"));
console.log(palindrom("palindrom"));
