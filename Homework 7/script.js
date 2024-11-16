// // #XjJuucOMR0
// function User(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
// };
// const arrUsers = [];
//
// const user1 = new User(1, 'Yura', 'Bilyk', 'yur45@gmail.com', +38564465454);
// const user2 = new User(2, 'Anna', 'Ivanova', 'anna.ivanova@gmail.com', +38562344567);
// const user3 = new User(3, 'Oleh', 'Kravchuk', 'oleh.kravchuk@gmail.com', +38561789432);
// const user4 = new User(4, 'Maria', 'Shevchenko', 'maria.shevchenko@gmail.com', +38562217890);
// const user5 = new User(5, 'Petro', 'Tymoshenko', 'petro.tymoshenko@gmail.com', +38563567891);
// const user6 = new User(6, 'Olha', 'Kovalchuk', 'olha.kovalchuk@gmail.com', +38561467834);
// const user7 = new User(7, 'Dmytro', 'Lysenko', 'dmytro.lysenko@gmail.com', +38561897654);
// const user8 = new User(8, 'Inna', 'Mazurenko', 'inna.mazurenko@gmail.com', +38563784567);
// const user9 = new User(9, 'Viktor', 'Polischuk', 'viktor.polischuk@gmail.com', +38564712345);
// const user10 = new User(10, 'Svitlana', 'Bondarenko', 'svitlana.bondarenko@gmail.com', +38562893456);
// arrUsers.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
//
// // #2ikXsE2WiKZ
// // const filterUsers = arrUsers.filter(val => val.id % 2 === 0);
// // console.log(filterUsers);
//
// // #pOeHKct
// console.log(arrUsers.sort((a, b) => a.id - b.id));

// #nkMXISv
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// const allClients = [];
// allClients.push(new Client(1, 'Yura', 'Bilyk', 'yur45@gmail.com', +38564465454, ['banana', 'apple', 'milk']));
// allClients.push(new Client(2, 'Anna', 'Ivanova', 'anna.ivanova@gmail.com', +38562344567, ['bread', 'butter', 'juice', 'cheese', 'yogurt']));
// allClients.push(new Client(3, 'Oleh', 'Kravchuk', 'oleh.kravchuk@gmail.com', +38561789432, ['coffee', 'sugar']));
// allClients.push(new Client(4, 'Maria', 'Shevchenko', 'maria.shevchenko@gmail.com', +38562217890, ['chocolate', 'milk', 'cookies', 'juice']));
// allClients.push(new Client(5, 'Petro', 'Tymoshenko', 'petro.tymoshenko@gmail.com', +38563567891, ['tea', 'honey', 'lemon', 'bread']));
// allClients.push(new Client(6, 'Olha', 'Kovalchuk', 'olha.kovalchuk@gmail.com', +38561467834, ['pasta', 'tomato sauce', 'parmesan']));
// allClients.push(new Client(7, 'Dmytro', 'Lysenko', 'dmytro.lysenko@gmail.com', +38561897654, ['rice', 'beans']));
// allClients.push(new Client(8, 'Inna', 'Mazurenko', 'inna.mazurenko@gmail.com', +38563784567, ['chips', 'soda', 'popcorn', 'juice', 'cookies', 'milk']));
// allClients.push(new Client(9, 'Viktor', 'Polischuk', 'viktor.polischuk@gmail.com', +38564712345, ['meat', 'potatoes', 'carrots', 'fish']));
// allClients.push(new Client(10, 'Svitlana', 'Bondarenko', 'svitlana.bondarenko@gmail.com', +38562893456, ['fish', 'lemon', 'herbs', 'chocolate', 'milk']));
// console.log(allClients[0].order.length)
//
// // #8abtVjRv
// console.log(allClients.sort((a, b) => a.order.length - b.order.length));

// #vV9a6584I5
// function Car(model, producer, realisedYear, maxSpeed, capacityEngine, driver){
//     this.model = model;
//     this.producer = producer;
//     this.realisedYear = realisedYear;
//     this.maxSpeed = maxSpeed;
//     this.capacityEngine = capacityEngine;
//     this.driver = driver;
// }
//
// const bmwM5 = new Car('Bmw', 'Bmw', 2018, 290, 3.5);
//
// Car.prototype.drive = function (){
//     console.log(`We are driving ${this.maxSpeed} per hour`)
// };
// Car.prototype.info = function (){
//     console.log(`
//             model: ${this.model}
//             producer: ${this.producer}
//             realisedYear: ${this.realisedYear}
//             maxSpeed: ${this.maxSpeed}
//             capacityEngine: ${this.capacityEngine}
//         `)
// };
// Car.prototype.increaseMaxSpeed = function (newSpeed){
//     console.log(this.maxSpeed + newSpeed)
// };
// Car.prototype.changeYear = function (newValue){
//     return  this.realisedYear = newValue
//
// };
// Car.prototype.addDriver = function (driver){
//     this.driver = driver
// }
//
// bmwM5.drive(20);
// bmwM5.info()
// bmwM5.increaseMaxSpeed(20)
// console.log(bmwM5.changeYear(2022))
//
// bmwM5.addDriver({name: 'Michael Schumaсher', age: 35});
// console.log(bmwM5.driver)

// #5kla3yMpgp
// class Car{
//     constructor(model, producer, realisedYear, maxSpeed, capacityEngine, driver) {
//         this.model = model;
//         this.producer = producer;
//         this.realisedYear = realisedYear;
//         this.maxSpeed = maxSpeed;
//         this.capacityEngine = capacityEngine;
//         this.driver = driver
//     }
//     drive (speed){
//         console.log(`We are driving ${this.maxSpeed} per hour`)
//     }
//     info(){
//         console.log(`
//             model: ${this.model}
//             producer: ${this.producer}
//             realisedYear: ${this.realisedYear}
//             maxSpeed: ${this.maxSpeed}
//             capacityEngine: ${this.capacityEngine}
//         `)
//     }
//     increaseMaxSpeed (newSpeed){
//         console.log(this.maxSpeed + newSpeed)
//     }
//     changeYear (newValue){
//        return  this.realisedYear = newValue
//
//     }
//     addDriver (driver){
//         this.driver = driver
//     }
//
// }
//
// const mercedesAmg = new Car('MercedesBenz', 'Mercedes-Benz Corporation', 2015, 260, 3.0);
// mercedesAmg.drive(90);
// mercedesAmg.info();
// mercedesAmg.increaseMaxSpeed(20);
// console.log(mercedesAmg.changeYear(2020))
// mercedesAmg.addDriver({name: 'Yura Bilyk', age: 21 })
// console.log(mercedesAmg.driver);

// #zg6Fifnqig

// class Cinderella {
//     constructor(name, age, sizeLeg) {
//         this.name = name;
//         this.age = age;
//         this.sizeLeg = sizeLeg;
//     }
//
// }
// const cinderellas = [
//     new Cinderella('Anna', 18, 36),
//     new Cinderella('Maria', 19, 37),
//     new Cinderella('Olha', 20, 38),
//     new Cinderella('Sophia', 21, 39),
//     new Cinderella('Diana', 22, 40),
//     new Cinderella('Nadia', 23, 37),
//     new Cinderella('Viktoria', 24, 36),
//     new Cinderella('Kateryna', 25, 38),
//     new Cinderella('Iryna', 26, 39),
//     new Cinderella('Oksana', 27, 40)
// ];
//
// class Prince extends Cinderella{
//     constructor(name, age, shoeSize) {
//         super(name, age);
//         this.shoeSize = shoeSize
//     }
//     findCinderella(cinderellas){
//         for (let cinderella of cinderellas){
//             if (cinderella.sizeLeg === this.shoeSize){
//                 return cinderella
//             }
//         }
//     }
// }
//
// const princeAndriy = new Prince('Andriy', 25, 36);
// console.log(princeAndriy.findCinderella(cinderellas));
//
// const foundCinderella = cinderellas.find((cinderella) => cinderella.sizeLeg === princeAndriy.shoeSize);
// console.log(foundCinderella)

// #gsKLAsNWM
// Array.prototype.myFuncForeach = function (callback) {
//     for (let i = 0; i < this.length; i++){
//         callback(this[i], i, this);
//     }
// };
// const numbers1 = [10, 25, 30, 45, 50];
// numbers1.myFuncForeach((el) => {
//     console.log(el);
//
// });
//
//
// Array.prototype.myFuncFilter = function (callback) {
//     const arr = []
//     for (let el of this){
//         if (callback(el)){
//             arr.push(el)
//         }
//     }
//     return arr;
// };
// const numbers2 = [10, 25, 30, 45, 50];
// const filteredNums = numbers2.myFuncFilter(num => num % 2 === 0);
// console.log(filteredNums)
//
//
// console.log(Array.prototype)