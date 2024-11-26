// #WpkK0ZH1
// const arrNumbers = [1,2,3,4,5];
// const arrStrings = ['Yura', 'Bohdan', 'Andriy', 'Serj', 'Pavlo'];
// const multiArr = [1, 2, 'Bohdan', 'Yura', false];
// for (const elem of multiArr){
//     console.log(elem)
// }

// #4aDbSgh
// const newArr = [];
// newArr[0] = 1;
// newArr[1] = 2;
// newArr[2] = 3;
// newArr[3] = 4;
// for (let element of newArr){
//     console.log(element)
// }

// #qLQLJSeN7i
// const someArr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0
// while (i < someArr.length){
//     console.log(someArr[i])
//     i++
// }
// for (const el of someArr){
//     console.log(el)
// }
// let i = 0
// while (i < someArr.length){
//     if (i % 2 !== 0){
//         console.log(someArr[i])
//     }
//     i++
// }
// for (const el in someArr){
//     if (el % 2 !== 0){
//         console.log(someArr[el])
//     }
// }
// let i = 0
// while (i < someArr.length){
//     if (i % 2 === 0){
//         console.log(someArr[i])
//     }
//     i++
// }
// for (const el in someArr){
//     if (el % 2 === 0){
//         console.log(someArr[el])
//     }
// }
// for (const el in someArr){
//     if (someArr[el] % 3 === 0){
//         someArr[el] = 'okten'
//     }
// }
// console.log(someArr)
// console.log(someArr.reverse())

// let i = someArr.length - 1
// while (i >= 0){
//     console.log(someArr[i])
//     i--
// }
// for (i = someArr.length-1; i >= 0; i-- ){
//     console.log(someArr[i])
// }

// let i = someArr.length-1
// while (i >= 0){
//     if (i % 2 !== 0){
//         console.log(someArr[i])
//     }
//     i--
// }
// for (let i = someArr.length-1; i >= 0; i--){
//     if (i % 2 !== 0){
//         console.log(someArr[i])
//     }
// }
// let i = someArr.length-1
// while (i >= 0){
//     if (i % 2 === 0){
//         console.log(someArr[i])
//     }
//     i--
// }
// for (let i = someArr.length-1; i >= 0; i--){
//     if (i % 2 === 0){
//         console.log(someArr[i])
//     }
// }
// for (let i = someArr.length-1; i >= 0; i--){
//     if (someArr[i] % 3 === 0){
//         someArr[i] = 'okten'
//     }
// }
// console.log(someArr)

// #u3vmD0YJXh
// const mixedArray = [42, "hello", true, 3.14, "world", false, 100, "JavaScript", true, -7];
//
// for (const el of mixedArray){
//     if (typeof el === "boolean"){
//         console.log(el)
//     }
// }
// for (const el of mixedArray){
//     if (typeof el === "number"){
//         console.log(el)
//     }
// }
// for (const el of mixedArray){
//     if (typeof el === "string"){
//         console.log(el)
//     }
// }

// #0pm3EyTKy9

// for (let i = 1; i <= 10; i++){
//     console.log(i);
//     document.write(i + "<br>");
// }

// for (let i = 1; i <= 100; i++){
//     if (i % 2 === 0){
//     console.log(i);
//     document.write(i + "<br>");
//         }
// }

// #reLkOkTB29Q
// const books = [
//     {
//         title: "1984",
//         pages: 328,
//         authors: ["Джордж Орвелл"],
//         genres: ["Наукова фантастика", "Антиутопія"]
//     },
//     {
//         title: "Мастер и Маргарита",
//         pages: 448,
//         authors: ["Михайло Булгаков"],
//         genres: ["Фантастика", "Роман"]
//     },
//     {
//         title: "Великий Гетсбі",
//         pages: 180,
//         authors: ["Френсіс Скотт Фіцджеральд"],
//         genres: ["Роман", "Класика"]
//     },
//     {
//         title: "Гаррі Поттер і філософський камінь",
//         pages: 320,
//         authors: ["Дж.К. Роулінг"],
//         genres: ["Фентезі", "Пригоди"]
//     }
// ]
// let largestBook = books[0];
// for (const book of books){
//         if (book.pages > largestBook.pages){
//                 largestBook = book
//         }
// }
// console.log(largestBook.title)

// let numbersGenre = books[0];
// for (const book of books){
//     if (book.genres > numbersGenre.genres){
//         numbersGenre = book
//     }
// }
// console.log(numbersGenre.title)
// let longestName = books[0];
// for (const book of books){
//     if (book.title.length > longestName.title.length){
//         longestName = book
//     }
// }
// console.log(longestName.title)

// for (const book of books){
//     if (book.authors.length === 1){
//         console.log(book)
//     }
// }
// let usersList = [
//     {
//         id: 1,
//         name: 'Leanne Graham',
//         username: 'Bret',
//         email: 'Sincere@april.biz',
//         address: {
//             street: 'Kulas Light',
//             suite: 'Apt. 556',
//             city: 'Gwenborough',
//             zipcode: '92998-3874',
//             geo: {
//                 lat: '-37.3159',
//                 lng: '81.1496'
//             }
//         },
//         phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//         company: {
//             name: 'Romaguera-Crona',
//             catchPhrase: 'Multi-layered client-server neural-net',
//             bs: 'harness real-time e-markets'
//         }
//     },
//     {
//         id: 2,
//         name: 'Ervin Howell',
//         username: 'Antonette',
//         email: 'Shanna@melissa.tv',
//         address: {
//             street: 'Victor Plains',
//             suite: 'Suite 879',
//             city: 'Wisokyburgh',
//             zipcode: '90566-7771',
//             geo: {
//                 lat: '-43.9509',
//                 lng: '-34.4618'
//             }
//         },
//         phone: '010-692-6593 x09125',
//         website: 'anastasia.net',
//         company: {
//             name: 'Deckow-Crist',
//             catchPhrase: 'Proactive didactic contingency',
//             bs: 'synergize scalable supply-chains'
//         }
//     },
//     {
//         id: 3,
//         name: 'Clementine Bauch',
//         username: 'Samantha',
//         email: 'Nathan@yesenia.net',
//         address: {
//             street: 'Douglas Extension',
//             suite: 'Suite 847',
//             city: 'McKenziehaven',
//             zipcode: '59590-4157',
//             geo: {
//                 lat: '-68.6102',
//                 lng: '-47.0653'
//             }
//         },
//         phone: '1-463-123-4447',
//         website: 'ramiro.info',
//         company: {
//             name: 'Romaguera-Jacobson',
//             catchPhrase: 'Face to face bifurcated interface',
//             bs: 'e-enable strategic applications'
//         }
//     },
//     {
//         id: 4,
//         name: 'Patricia Lebsack',
//         username: 'Karianne',
//         email: 'Julianne.OConner@kory.org',
//         address: {
//             street: 'Hoeger Mall',
//             suite: 'Apt. 692',
//             city: 'South Elvis',
//             zipcode: '53919-4257',
//             geo: {
//                 lat: '29.4572',
//                 lng: '-164.2990'
//             }
//         },
//         phone: '493-170-9623 x156',
//         website: 'kale.biz',
//         company: {
//             name: 'Robel-Corkery',
//             catchPhrase: 'Multi-tiered zero tolerance productivity',
//             bs: 'transition cutting-edge web services'
//         }
//     },
//     {
//         id: 5,
//         name: 'Chelsey Dietrich',
//         username: 'Kamren',
//         email: 'Lucio_Hettinger@annie.ca',
//         address: {
//             street: 'Skiles Walks',
//             suite: 'Suite 351',
//             city: 'Roscoeview',
//             zipcode: '33263',
//             geo: {
//                 lat: '-31.8129',
//                 lng: '62.5342'
//             }
//         },
//         phone: '(254)954-1289',
//         website: 'demarco.info',
//         company: {
//             name: 'Keebler LLC',
//             catchPhrase: 'User-centric fault-tolerant solution',
//             bs: 'revolutionize end-to-end systems'
//         }
//     },
//     {
//         id: 6,
//         name: 'Mrs. Dennis Schulist',
//         username: 'Leopoldo_Corkery',
//         email: 'Karley_Dach@jasper.info',
//         address: {
//             street: 'Norberto Crossing',
//             suite: 'Apt. 950',
//             city: 'South Christy',
//             zipcode: '23505-1337',
//             geo: {
//                 lat: '-71.4197',
//                 lng: '71.7478'
//             }
//         },
//         phone: '1-477-935-8478 x6430',
//         website: 'ola.org',
//         company: {
//             name: 'Considine-Lockman',
//             catchPhrase: 'Synchronised bottom-line interface',
//             bs: 'e-enable innovative applications'
//         }
//     },
//     {
//         id: 7,
//         name: 'Kurtis Weissnat',
//         username: 'Elwyn.Skiles',
//         email: 'Telly.Hoeger@billy.biz',
//         address: {
//             street: 'Rex Trail',
//             suite: 'Suite 280',
//             city: 'Howemouth',
//             zipcode: '58804-1099',
//             geo: {
//                 lat: '24.8918',
//                 lng: '21.8984'
//             }
//         },
//         phone: '210.067.6132',
//         website: 'elvis.io',
//         company: {
//             name: 'Johns Group',
//             catchPhrase: 'Configurable multimedia task-force',
//             bs: 'generate enterprise e-tailers'
//         }
//     },
//     {
//         id: 8,
//         name: 'Nicholas Runolfsdottir V',
//         username: 'Maxime_Nienow',
//         email: 'Sherwood@rosamond.me',
//         address: {
//             street: 'Ellsworth Summit',
//             suite: 'Suite 729',
//             city: 'Aliyaview',
//             zipcode: '45169',
//             geo: {
//                 lat: '-14.3990',
//                 lng: '-120.7677'
//             }
//         },
//         phone: '586.493.6943 x140',
//         website: 'jacynthe.com',
//         company: {
//             name: 'Abernathy Group',
//             catchPhrase: 'Implemented secondary concept',
//             bs: 'e-enable extensible e-tailers'
//         }
//     },
//     {
//         id: 9,
//         name: 'Glenna Reichert',
//         username: 'Delphine',
//         email: 'Chaim_McDermott@dana.io',
//         address: {
//             street: 'Dayna Park',
//             suite: 'Suite 449',
//             city: 'Bartholomebury',
//             zipcode: '76495-3109',
//             geo: {
//                 lat: '24.6463',
//                 lng: '-168.8889'
//             }
//         },
//         phone: '(775)976-6794 x41206',
//         website: 'conrad.com',
//         company: {
//             name: 'Yost and Sons',
//             catchPhrase: 'Switchable contextually-based project',
//             bs: 'aggregate real-time technologies'
//         }
//     },
//     {
//         id: 10,
//         name: 'Clementina DuBuque',
//         username: 'Moriah.Stanton',
//         email: 'Rey.Padberg@karina.biz',
//         address: {
//             street: 'Kattie Turnpike',
//             suite: 'Suite 198',
//             city: 'Lebsackbury',
//             zipcode: '31428-2261',
//             geo: {
//                 lat: '-38.2386',
//                 lng: '57.2232'
//             }
//         },
//         phone: '024-648-3804',
//         website: 'ambrose.net',
//         company: {
//             name: 'Hoeger LLC',
//             catchPhrase: 'Centralized empowering task-force',
//             bs: 'target end-to-end models'
//         }
//     }
// ];
//
// for(const user of  usersList){
//     document.write(  `
//      <div class="users-box">
//             <div class="user-block">
//                 <h2>${user.id} - ${user.name} - ${user.username}</h2>
//                 <h3>${user.email} - ${user.phone}</h3>
//                 <div class="address-block">
//                     <p>City - ${user.address.city}</p>
//                     <p>Street - ${user.address.street}</p>
//                     <p>Suite - ${user.address.suite}</p>
//                     <p>Zip code - ${user.address.zipcode}</p>
//                 </div>
//
//             </div>
//     `)
//
// }

// const someArr = [];
//
// for (let i = 0; i < 20; i++) {
//     // Генеруємо випадкове число від 8 до 732
//     const randomNum = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
//     someArr.push(randomNum);
// }
// const someArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// console.log(someArr);
// const newArr = [];
// for (let i = 2; i < someArr.length; i += 3) {
//     if (someArr[i] % 2 === 0){
//         newArr[newArr.length] = someArr[i]
//     }
// }
// console.log(newArr)
// const arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i - 1])
//     }
// }

// const arrPrices = [100,250,50,168,120,345,188];
// let a = 0;
// for (const price of arrPrices){
//     a += price;
// }
// const averagePrice = a / arrPrices.length;
// console.log(Math.round(averagePrice))

// const randomArr = [];
// for (let i = 0; i < 10; i++) {
//     randomArr.push(Math.floor(Math.random() * 10))
// }
// const expArr = [];
// for (const el of randomArr){
//     expArr.push(el * 5)
// }
// console.log(randomArr)
// console.log(expArr)

// const arr = ['Yura', 5, true, 8, 'Pasha', false, 'Nazik', true, 9];
// const arrBool = [];
// const arrNums = [];
// const arrStr = [];
// for (const el of arr){
//     if (typeof el === "boolean"){
//         arrBool.push(el)
//     }else if(typeof el === "number"){
//         arrNums.push(el)
//     }else if(typeof el === "string"){
//         arrStr.push(el)
//     }
// }
//
// console.log(arrBool)
// console.log(arrNums)
// console.log(arrStr)

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// let usersWithCities = [];
// for (const user of usersWithId){
//     for (const city of citiesWithId){
//         if (user.id === city.user_id){
//             usersWithCities.push({
//                 user,
//                 address: city
//             });
//     }
// }
// }
// console.log(usersWithCities)

// const arr = [ 'a', 'b', 'c'];
// let newArr = [];
// for (const item of arr){
//     newArr += item
// }
// console.log(newArr)