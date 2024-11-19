// // #AiN5CoUQ
// const person = {
//     firstName: 'Yuriy',
//     surName: 'Bilyk',
//     age: 20,
//     arr: [1,2,3],
//     sayHi: function(){
//         return `Hello ${this.firstName}`
//     },
//     sayBy: function(){
//         return `By ${this.firstName}`
//     }
//
// };
//
// function makeDeepCopy(obj) {
//     if (obj){
//     let copy = JSON.stringify(obj);
//     let parsed = JSON.parse(copy);
//     for (let key in obj) {
//         if (typeof obj[key] === 'function') {
//             parsed[key] = obj[key].bind(parsed);
//         }
//     }
//     return parsed;
//   }
// }
// const a = makeDeepCopy(person);
// console.log(a.sayHi())
// console.log(a.sayBy())
//
// // #iz6emEsP2BA
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let changedArray = coursesAndDurationArray.map((value, index) => ({id: index + 1, ...value}));
// console.log(changedArray)






