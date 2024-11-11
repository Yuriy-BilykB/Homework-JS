// #I2XsG6f
// function calcAreaRectangle(a, b){
//     return a * b
// }
// // console.log(calcRectangle(5, 5))
//
// // #ETGAxbEn8l
// function calcAreaCircle(r){
//     return  Math.PI * r * r
// }
// // console.log(calcAreaCircle(5));
//
// // #Mbiz5K4yFe7
// function calcSideCylinder(r, h){
//     return  2 * Math.PI * r * h
// }
// function calcAreaCylinder(r, h){
//     return calcSideCylinder(r, h) + calcAreaCircle(r) * 2
// }
// console.log(calcAreaCylinder( 5, 10))

// #SIdMd0hQ
// const someArr = [1,2,3,4,5,6,7,8,9,10]
// function printArr(arr){
//     for (let el of arr){
//         console.log(el)
//     }
// }
// printArr(someArr)

// #59g0IsA
// function printText(text) {
//     document.write(`<p>${text}</p>`)
// }
// printText('Hello World')

// #hOL6126
// function printText(text) {
//     document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
// }
// printText('Hello')

// #0Kxco1edSN
// function printText(text, number) {
//     document.write('<ul>');
//     for (let i = 0; i < number; i++){
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>');
// }
// printText('Hello', 5)

// #gEFoxMMO
// const arr = [1, 2, false, true, 'Yura'];
// function printText(arr) {
//     document.write('<ul>');
//     for (let el of arr){
//         document.write(`<li>${el}</li>`)
//     }
//     document.write('</ul>');
// }
// printText(arr)

// #bovDJDTIjt
// const arrUsers = [
//     {id: 1, name: 'Andriy', age: 28},
//     {id: 2, name: 'Yura', age: 20},
//     {id: 3, name: 'Nazar', age: 10}
// ];
// function printUsersArr(arr) {
//     for (let el of arr){
//         document.write(`<div><ul><li>${el.id}</li><li>${el.name}</li><li>${el.age}</li></ul></div>`)
//     }
// }
// printUsersArr(arrUsers);

// #pghbnSB
// const arrNumbers = [5,2,3,4,8,9,6];
// function findMinNumber(arr) {
//     let minNum = arr[0];
//         for (let i = 1; i < arr.length; i++){
//             if (minNum > arr[i]){
//                 minNum = arr[i]
//             }
//     }
//     return minNum
// }
// console.log(findMinNumber(arrNumbers))

// #EKRNVPM
const arrNumbers = [5,2,3,4,8,9,6];
function calcAllSum(arr) {
    let minNum = 0;
        for (const num of arr){
           minNum += num
        }
    return minNum
}

console.log(calcAllSum(arrNumbers))

// #kpsbSQCt2Lf
// function swap(arr,index1,index2) {
//
//        let a = arr[index1];
//         arr[index1] = arr[index2];
//         arr[index2] = a;
//         return arr
// }
//
// console.log(swap([11,22,33,44],0,1))

// #mkGDenYnNjn
// function exchange(sumUAH,currencyValues,exchangeCurrency) {
//     let exchangeRate
//     for (let i = 0; i < currencyValues.length; i++) {
//         if (currencyValues[i].currency === exchangeCurrency) {
//             exchangeRate = currencyValues[i].value;
//         }
//     }
//         return sumUAH / exchangeRate;
// }
//
// console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'))