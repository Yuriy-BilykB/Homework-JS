// // #I2XsG6f
// const calcAreaRectangle = (a, b) => a * b;
// console.log(calcAreaRectangle(5, 5));
//
// // #ETGAxbEn8l
// const calcAreaCircle = (r) => Math.PI * r * r;
// console.log(calcAreaCircle(5));
//
// // #Mbiz5K4yFe7
// const calcAreaCylindr = (r, h) => {
//    return  2 * r * Math.PI + calcAreaCircle(r) * 2
// };
// console.log(calcAreaCylindr(5, 5));
//
// // #SIdMd0hQ
// const newArr = [1,2,3,4,5,6,7,8,9];
// const printAllElements = (arr) => {
//    for (let i of arr){
//       console.log(i)
//    }
// };
// printAllElements(newArr)
//
// // #59g0IsA
// const createParagraph = (arg) => {
//    document.write(`<p>${arg}</p>`)
// };
// createParagraph('Hi')

// #hOL6126
// const createList = (text) => {
//    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
// }
// createList('Hello')

// #0Kxco1edSN
// const createList = (text, amount) => {
//    for (let i = 0; i < amount; i++){
//       document.write(`<ul><li>${text}</li></ul>`)
//    }
// }
// createList('Hello', 5)

// #gEFoxMMO
// const mixArr = [1, 'Yura', false, 5, true]
// const buildList = (arr) => {
//    document.write('<ul>')
//    for (const el of arr){
//       document.write(`<li>${el}</li>`)
//    }
//    document.write('</ul>')
// }
// buildList(mixArr)

// #bovDJDTIjt
// const arrUsers = [
//     {id: 1, name: 'Andriy', age: 28},
//     {id: 2, name: 'Yura', age: 20},
//     {id: 3, name: 'Nazar', age: 10}
// ];
// const printObjectsValues = (arr) => {
//     for (let el of arr){
//         document.write(`<div><ul><li>${el.id}</li><li>${el.name}</li><li>${el.age}</li></ul></div>`)
//     }
// }
// printObjectsValues(arrUsers);

// #pghbnSB
// const someArr = [5,2,3,8,9,10,15];
// const findMinNum = (arr) => {
//    let minNum = arr[0]
//    for (let i = 1; i < arr.length; i++){
//       if (minNum > arr[i]){
//          minNum = arr[i]
//       }
//    }
//    return minNum
// }
// console.log(findMinNum(someArr))

// #EKRNVPM
// const someArr = [5,2,3,8,9,10,15];
// const sum = (arr) => {
//    let a = 0
//    for (const el of arr){
//       a += el
//    }
//    return a
// }
// console.log(sum(someArr))

// #kpsbSQCt2Lf
// const swap = (arr,index1,index2) => {
//        let a = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = a;
//         return arr
// }
//
// console.log(swap([11,22,33,44],0,1))

// #mkGDenYnNjn
// const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
//       for (const el of  currencyValues){
//          if (el.currency === exchangeCurrency ){
//            return  sumUAH / el.value
//          }
//       }
// };
// console.log(exchange(10000, [{currency:'USD',value:40},{currency:'EUR',value:42}], 'USD'))