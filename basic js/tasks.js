//вывести от 1 до 100
// for(let n = 1; n <= 100; n++) {
//     document.write(n + '<br>')
// }
// console.log(i)

//Выведите с помощью цикла столбец чисел от 100 до 1.
// for (let j = 100; j > 0; j--) {
//     document.write(j + '<br>');
// }

//Выведите столбец четных чисел в промежутке от 0 до 100.
// for (let i = 0; i < 100; i++) {
//     if(i % 2 === 0)
//     document.write( i + '<br>')
// }

//С помощью цикла найдите сумму чисел от 1 до 100.
// let result = 0
// for (let i = 0; i <= 5; i++) {
//     result = result + i
// }
// console.log(result)

//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

// let array1 = [1, 2, 3, 4, 5]
// let arr = array1;
// for (let i = 0; i < arr.length; i++) {
//     alert(arr[i])
// }
//Заполните массив 10-ю иксами с помощью цикла
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr[i] = 'x';
// }
// console.log(arr);

//Заполните массив числами от 1 до 10 с помощью цикла
// let arr = [];
// for (let i = 1; i <= 10; i++) {
//     arr.push(i);
// }
// console.log(arr);
//Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла.
// Дроби округляйте до двух знаков в дробной части.
// let arr = [];
// for (let i = 1; i <= 10; i++) {
//     arr.push(Math.random().toFixed(2));
// }
// console.log(arr);

//Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла
// let arr = [];
// for (let i = 1; i <= 10; i++) {
//     arr.push(Math.floor(Math.random()*10) + 1);
// }
// console.log(arr);

//8. Дан массив с числами. С помощью цикла выведите
// только те элементы массива, которые больше нуля и меньше 10-ти
// let array1 = [1, 22, 3, 12, 5, -2, -11]
// for (let i = 0; i < array1.length; i++) {
//     if(array1[i] > 0 && array1[i] < 10) {
//         console.log(array1[i])
//     }
// }

//9 Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент
// со значением 5. Как только будет найден первый такой элемент - выведите
// 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите
// let array1 = [1, 22, 3, 12, -2, -11]
// for (let i = 0; i < array1.length; i++) {
//     if(array1[i] === 5) {
//         console.log("Есть")
//     }
// }

//10 Дан массив с числами. С помощью цикла найдите сумму элементов
// этого массива.
// let array1 = [1, 2, 3]
// let sum = 0
// for (let i = 0; i < array1.length; i++) {
//     sum += array1[i]
// }
// console.log(sum)

//11  Дан массив с числами. С помощью цикла найдите сумму
// квадратов элементов этого массива.
// let array1 = [1, 2, 3]
// let sum = 0
// for (let i = 0; i < array1.length; i++) {
//     sum += array1[i]*array1[i]
// }
// console.log(sum)

//12 Дан массив с числами. Найдите среднее арифметическое его элементов
// (сумма элементов, делить на количество).
// let array1 = [1, 2, 3]
// let sum = 0
// let srArf = 0
// for (let i = 0; i < array1.length; i++) {
//     sum += array1[i]
//     srArf = sum/array1.length
// }
// console.log(srArf)

//дан массив. нужно вывести сумму двух наименьших в нем чисел
let numbers = [1, 22, 3, 122, 5, -2, -11]

function sumTwoSmallestNumbers(numbers) {
    return numbers
        .sort(function(a, b) { return a - b; })
        .filter(el => el > 0)
        .slice(0,2)
        .reduce((acc, el) => acc + el)
    //Code here
}

console.log(sumTwoSmallestNumbers(numbers))