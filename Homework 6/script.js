// #dFeorS3m7u
// const calcLength = (str) => {
//    const arr = str.split('');
//     const newArr = [];
//     for (let el of arr){
//         if (el !== ' '){
//             newArr.push(el)
//         }
//     }
//     return newArr.length
// };
// console.log(calcLength('hello world'));
// console.log(calcLength('lorem ipsum'));
// console.log(calcLength('javascript is cool'));

// #8lld9HMxXWB
// const makeUpperCase = (str) => {
//    return  str.toUpperCase()
// };
// console.log(makeUpperCase('hello world'))
// console.log(makeUpperCase('lorem ipsum'));
// console.log(makeUpperCase('javascript is cool'));

// #ClDsAm7xba7
// const makeLowerCase = (str) => {
//    return  str.toLowerCase()
// };
// console.log(makeLowerCase('HELLO WORLD'))
// console.log(makeLowerCase('LOREM IPSUM'));
// console.log(makeLowerCase('JAVASCRIPT IS COOL'));

// #0b89BkYZwu
// const clearStrSpaces = (str) => {
//     return str.trim()
// }
// console.log(clearStrSpaces(' dirty string   '));

// #bfoJuse4ZzP
// const strToArray = (str) => {
//    return str.split(' ')
// };
// console.log(strToArray('Ревуть воли як ясла повні'));

// #Rbr5kEQ
// const elToStr = (arr) => {
//   return arr.map((el) => el + '')
// };
// console.log(elToStr([10,8,-7,55,987,-1011,0,1050,0]));

// #5hqyKTfmc
// const sortNums = (nums,direction) => {
//         if (direction === 'ascending'){
//             nums.sort(function(a, b){return a - b});
//         }else if (direction === 'descending'){
//             nums.sort(function(a, b){return b - a});
//         }
//         return nums
// };
// console.log(sortNums([3,11,21], 'ascending'));
// console.log(sortNums([3,11,21], 'descending'));

// #yo06d74c1C
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// coursesAndDurationArray.sort(function(a, b) {
//     return b.monthDuration - a.monthDuration;
// });
// console.log(coursesAndDurationArray);
// const filteredUsers = coursesAndDurationArray.filter(user => user.monthDuration > 5);
// console.log(filteredUsers)
// coursesAndDurationArray.map((value, index) => {
//     value.id = index + 1 ;
// });
// console.log(coursesAndDurationArray)

// #bolvdlhP
// const cardSuits = ['spade', 'diamond', 'heart', 'club'];
// const CardNumbers = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
//
// const cards = [];
// for (const suit of cardSuits) {
//     for (const number of CardNumbers) {
//         const card = {cardSuit: suit, number: number};
//         if (suit === 'heart' || suit === 'diamond') {
//             card.color = 'red';
//         } else {
//             card.color = 'black';
//         }
//         cards.push(card);
//     }
// }
// console.log(cards)
// console.log(cards.find(card => card.cardSuit === 'spade' && card.number === 'ace'))
// const allSixCards = cards.filter((value) => value.number === '6');
// console.log(allSixCards)
// const allRedCards = cards.filter((value) => value.color === 'red');
// console.log(allRedCards)
// const allDiamondCards = cards.filter((value) => value.cardSuit === 'diamond');
// console.log(allDiamondCards)
// const allClubCard = cards.filter(card => card.cardSuit === 'club' && (card.number === '9' || card.number === '10' ||
//     card.number === 'jack' || card.number === 'queen' ||
//     card.number === 'king' || card.number === 'ace'));
// console.log(allClubCard)

// #EP5I1UUzAX
// const packageCards = cards.reduce((previousValue, currentValue) => {
//     if (currentValue.cardSuit === 'spade'){
//         previousValue.spades.push(currentValue)
//     }
//     if (currentValue.cardSuit === 'diamond'){
//         previousValue.diamonds.push(currentValue)
//     }
//     if (currentValue.cardSuit === 'heart'){
//         previousValue.hearts.push(currentValue)
//     }
//     if (currentValue.cardSuit === 'club'){
//         previousValue.clubs.push(currentValue)
//     }
//     return previousValue
// }, {spades:[], diamonds:[], hearts:[], clubs:[]});
// console.log(packageCards)

// #4LJn7zBx
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// coursesArray.forEach((obj) => {
//     // console.log(obj.modules.includes('sass'))
//     for (const el of obj.modules){
//         if (el === 'sass'){
//             console.log(obj)
//         }
//     }
// })
// coursesArray.forEach((obj) => {
//     // console.log(obj.modules.includes('sass'))
//     for (const el of obj.modules){
//         if (el === 'docker'){
//             console.log(obj)
//         }
//     }
// })
