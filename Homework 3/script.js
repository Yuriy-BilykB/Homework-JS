// // #y7crMeFwHcS
// for (i = 0; i < 10; i++){
//     document.write('<div><h1>Hello</h1></div>')
// }
//
// // #TYj7ncx
// for (i = 0; i < 10; i++){
//     document.write(`<div><h1>Hello ${i}</h1></div>`)
// }
//
// // #uzkt71dp
// let i = 0;
// while (i < 20){
//     i++
//     document.write('<h1>Hi</h1>')
// }
//
// // #OeT7t3uUMFi
// let i = 0;
// while (i < 20){
//     i++
//     document.write(`<h1>Hi ${i}</h1>`)
// }
//
// // #vLSZKMlO
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// for (const elem of listOfItems){
//     document.write(`<ul><li>${elem}</li></ul>`)
// }
//
// // #Hdjws7E
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
// for (const item of products){
//     document.write(
//         `<div class="product-card">
//             <h3 class="product-title">${item.title}. - ${item.price}</h3>
//             <img src="${item.image}" alt=""
//         </div>`
//
//     )
// }
//
// // #4WrHwFTEop0
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// for (const user of users){
//     if (user.status === true){
//         console.log(user)
//     }
// }
// for (const user of users){
//  if (user.status === false){
//         console.log(user)
//     }
// }
// for (const user of users){
//     if (user.age > 30){
//         console.log(user)
//     }
// }