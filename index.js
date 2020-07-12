// // - створити функцію яка виводить масив
// const f = array => array

// // - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// const fu = () => {
//     let array = [];
//     for (let index = 0; index < 10; index++) {
//         const randElement = Math.floor((Math.random() + 8) * new Date().getMinutes());
//         array,push(array)
//     }
//     return f(array);
// }

// // - створити функцію яка приймає три числа та виводить та повертає найменьше.
// const fun = (a, b, c) => {
//     let result;
//     if(a < b){
//         a < c ? result = a : result = c
//     }else if(b < c){
//         result = b
//     }else{
//         result = c
//     }

//     return result
// }

// // - створити функцію яка приймає три числа та виводить та повертає найбільше.
// const func = (a, b, c) => {
//     let result;
//     if(a > b){
//         a > c ? result = a : result = c
//     }else if(b > c){
//         result = b
//     }else{
//         result = c
//     }

//     return result
// }

// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// const funct = (...args) => {
//     let result = 0;
//     for (let index = 0; index < args.length; index++) {
//         const element = args[index];
//         if (element > result) {
//             result = element
//         }
        
//     }

//     return result
// }
// console.log(funct(0,3,4,1,22,44,2,-1,-55,33,22222))

// // - створити функцію яка виводить масив
// const functi = () => {
//     let array = [];
//     for (let index = 0; index < 10; index++) {
//         const randElement = Math.floor((Math.random() + 8) * new Date().getMinutes());
//         array,push(array)
//     }
//     return array;
// }

// // - створити функцію яка повертає найбільше число з масиву
// const functio = (array) => {
//     let result = 0;
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         if (element > result) {
//             result = element
//         }
        
//     }
//     return result
// }

// // - створити функцію яка повертає найменьше число з масиву
// const function1 = (array) => {
//     let result = 0;
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         if (element < result) {
//             result = element
//         }
        
//     }
//     return result
// }
// console.log(function1([0,3,4,1,22,44,2,-1,-55,33,22222]))


// // - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// const function2 = (array) => {
//     let result = 0;
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         result = element + result
        
//     }
//     return result
// }
// console.log(function2([0,3,4,1,22,44,2,-1,-55,33,22222]))

// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// const function3 = (array) => {
//     let result = 0;
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         result = element + result
        
//     }
//     return result / array.length
// }
// console.log(function3([0,3,4,1,22,44,2,-1,-55,33,22222]))

// // - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// const function4 = (array) => {
//     let result = 0;
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         if(typeof element === 'object'){
//             result++
//         }
        
//     }
//     return `${result} - object`
// }
// console.log(function4([{x: 1}, {x: 2}, {x: 3}, 3, "2", 3333, true]))

// // - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// const function5 = (array) => {
//     let result = 0;
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         if(typeof element === 'object' && !Array.isArray(element)){
//             console.log(element)
//             let arrayKeys = Object.keys(element)
//             result = result + arrayKeys.length
//         }
        
//     }
//     return `${result} - Properties in objects`
// }
// console.log(function5([{x: 1}, {x: 2}, {x: 3}, 3, "2", [3333], true, {y: 2, i: 2}, {t: true}, [], [1,2]]))

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// const function6 = (array1, array2) => {
//     let array = []
//     for (let index = 0; index < array1.length; index++) {
//         const element1 = array1[index];
//         const element2 = array2[index];
//         array.push(element1 + element2);
//     }
//     return array;
// }
// console.log(function6([1,2,3,4], [2,3,4,5]))

// // - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// const function7 = (array, i) => {
//     let arr = [];
//     for (let index = 0; index < array.length; index++) {
//         if (index == i) {
//             arr.push(array[index + 1], array[index]);
//         }else{
//             arr.push(array[index]);
//         }
//     }
//     return arr;
// }
// console.log(function7([1, true, '', 4, 3, null, 1, 2], 1))

// // - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// // Двожина масиву від 2 до 100
// // Приклад
// // [1,0,6,0,3] => [1,6,3,0,0]
// // [0,1,2,3,4] => [1,2,3,4,0]
// // [0,0,1,0]   => [1,0,0,0]
// const function8 = (array) => {
//     let newArray = [];
//     let zero = [];
//     for (let index = 0; index < array.length; index++) {
//         let elem = array[index];
//         if(elem === 0){
//             zero.push(elem)
//         }else{
//             newArray.push(elem)
//         }
//     }
//     return newArray.concat(zero);
// }
// console.log(function8([1, 0, '', 4, 3, 0, 1, 2, 0, '']))







// // Створити функцію яка :
// const function9 = (text, cars, elementID) => {
//     // - Додає в боді блок з текстом "Hello owu"
//     const div = document.createElement('div');
//     div.innerHTML = "Hello owu";
//     document.body.appendChild(div);
    
//     // - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
//     const span = document.createElement('span');
//     span.innerHTML = `${text}`;
//     document.body.appendChild(span);
    
//     // - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//     // Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
//     // Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//     // Для кожної властивості створити всередені блока автомоблія свій блок
//     const div1 = document.getElementById(elementID)
//     for (let index = 0; index < cars.length; index++) {
//         const element = cars[index];

//         const ul = document.createElement('ul');
//         div1.appendChild(ul);

//         const l1 = document.createElement('li');
//         l1.innerHTML = `${element.name}`;
//         ul.appendChild(l1);

//         const l2 = document.createElement('li');
//         l2.innerHTML = `${element.model}`;
//         ul.appendChild(l2);

//         const l3 = document.createElement('li');
//         l3.innerHTML = `${element.doors}`;
//         ul.appendChild(l3);

//         const l4 = document.createElement('li');
//         l4.innerHTML = `${element.transmission}`;
//         ul.appendChild(l4);
//     }
// }

// const text = 'Тип елементу та текст отримати через аргументи'
// const cars = [
//     {
//         name: "Nissan",
//         model: "Sentra",
//         doors: 4,
//         transmission:"automatic"
//     },
//     {
//         name: "Nissan",
//         model: "Maxima",
//         doors: 4,
//         transmission:"automatic"
//     },    
//     {
//         name: "Ford",
//         model: "Taurus",
//         doors: 4,
//         transmission:"automatic"
//     },
//     {
//         name: "Ford",
//         model: "Escort",
//         doors: 4,
//         transmission:"automatic"
//     }
// ]
// const elementID = 'idi'
// function9(text, cars, elementID);












// // (на основі минулого ДЗ)
// // **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// // та повертає масив цих з'єднаних об'єктів.
// // Приклад масивів:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// const function10 = (arr1, arr2) => {
//     let newArray = []
//     for (const iterator of arr1) {
//         for (const iterator2 of arr2) {
//             if(iterator.id == iterator2.user_id){
//                 let copy = Object.assign(iterator, iterator2);
//                 newArray.push(copy);
//             }
//         }
//     }
//     return newArray
// }
// console.log(function10(usersWithId, citiesWithId));



// // ===========додаткове від віктора========
// // 1) Точная степень двойки.
// // Дано натуральное число N.
// // Выведите слово YES, если число N является точной степенью двойки,
// // или слово NO в противном случае.
// // Операцией возведения в степень пользоваться нельзя!
// // (на основі минулого ДЗ)

// const function11 = (n) => {
//     if( n > 1 ) {
//         return function11(n/2)
//     }else if (n < 1) {
//         return `NO`
//     }
//     return `YES`
    
// }
// console.log(function11(3));


// // 2) Deep Copy
// // реалізувати глибоке копіювання обєкту за допомогою рекурсій
// const object = {
//     a: 5,
//     b: { g: 8, y: 9, t: { q: 48 } },
//     x: 47,
//     l: { f: 85, p: { u: 89, m: 7 }, s: 71 },
//     r: { h: 9, a: 'test', s: 'test2' }
//   };
  
// const function12 = (newObj = {}, obj) => {
//     let it = 0
//     for (let key in obj) {
//         if (obj[key] === 'object') {
//             console.log(it)
//             newObj[key] = function12({}, obj[key]); 
//         }else{
//             console.log(it)
//             newObj[key] = obj[key]; 
//         }

//     }
//     return newObj
// }
// console.log(function12(object));




// // 3) Flat
// // Вирівняти багаторівневий масив в однорівневий
// // let array = [1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9] //-> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]

// const function13 = (arr) => {
//     let newArray = []
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if(Array.isArray(element)){
//             console.log(element)
//             newArray = newArray.concat(function13(element))
//         }else{
//             newArray.push(element);
//         }
//     }

//     return newArray;
// }
// console.log(function13(array));