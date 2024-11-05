// #67kfznmiMl
const arr = [1,2,3,4,5, true, 'hello', 'okten', 'false', 10]
console.log(arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);

// #LARqoUj5I
 const firstBook = {
     title: 'Lord of the Rings',
     pageCount: 500,
     genre: 'novel'
}
const secondBook = {
     title: 'Hobbit',
     pageCount: 400,
     genre: 'novel'
}
const thirdBook = {
     title: 'Harry Potter',
     pageCount: 600,
     genre: 'fantasy'
}

// #sA3Gg1sCp

const book1 = {
    title: "Good Omens",
    pageCount: 432,
    genre: "fantasy",
    authors: [
        { name: "Neil Gaiman", age: 60 },
        { name: "Terry Pratchett", age: 66 }
    ]
}

const book2 = {
    title: "The Sword of Shannara",
    pageCount: 726,
    genre: "fantasy",
    authors: [
        { name: "Terry Brooks", age: 78 },
        { name: "Robert Kirsch", age: 72 }
    ]
};

const book3 = {
    title: "The Mongoliad",
    pageCount: 512,
    genre: "fantasy",
    authors: [
        { name: "Neal Stephenson", age: 64 },
        { name: "Greg Bear", age: 71 },
        { name: "Mark Teppo", age: 55 }
    ]
};

// #jCHFnEbdmFd

const arrUsers = [
    {name: 'Yuriy', userName: 'YU_R1', password: 123},
    {name: 'Andriy', userName: 'Andy', password: 124},
    {name: 'Martha', userName: 'Tysia', password: 125},
    {name: 'Nazar', userName: 'Nazik', password: 126},
    {name: 'Pavlo', userName: 'Pasha', password: 127},
    {name: 'Ivan', userName: 'Vano', password: 128},
    {name: 'Ivan', userName: 'Vano', password: 128},
    {name: 'Oleksandr', userName: 'Sanya', password: 129},
    {name: 'Mycola', userName: 'Kolyan', password: 130},
    {name: 'Zinoviy', userName: 'Zenyk', password: 131}
];
console.log(arrUsers[0].password)
console.log(arrUsers[1].password)
console.log(arrUsers[2].password)
console.log(arrUsers[3].password)
console.log(arrUsers[4].password)
console.log(arrUsers[5].password)
console.log(arrUsers[6].password)
console.log(arrUsers[7].password)
console.log(arrUsers[8].password)
console.log(arrUsers[9].password)

// #coYydZuaeEB

const weekDays = [
    Monday = {
        morning: 5,
        midDay: 10,
        evening: 1
    },
    Tuesday = {
        morning: 5,
        midDay: 10,
        evening: 1
    },
    Wednesday= {
        morning: 5,
        midDay: 10,
        evening: 1
    },
    Thursday = {
        morning: 5,
        midDay: 10,
        evening: 1
    },
    Friday = {
        morning: 5,
        midDay: 10,
        evening: 1
    },
    Saturday = {
        morning: 5,
        midDay: 10,
        evening: 1
    },
    Sunday = {
        morning: 5,
        midDay: 10,
        evening: 1
    }
]

// #bAUsaq6LI

const z = -3;
if (z !== 0){
    console.log(true)
}else {
    console.log(false)
}

// #3ckURgvs

const time = 44;

if (time <= 14 && time > 0){
    console.log('first part')
} else if(time >= 15 && time <= 30){
    console.log('second part')
}else if(time >= 31 && time <= 45){
    console.log('third part')
}else if (time >= 46 && time <= 60){
    console.log('forth part')
}

// #UMoNq4biWGe
const day = 15

if (day <= 10 && day > 0){
    console.log('first decade')
}else if (day > 10 && day <= 20){
    console.log('second decade')
}else if (day > 20 && day <= 31) {
    console.log('third decade')
}

const dayNumber = 5;

switch (dayNumber){
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    case 7:
        console.log('Sunday')
        break
}

// #uwsz1RnTQJ1
const firstNum = 10;
const secondNum = 10;

if (firstNum > secondNum){
    console.log(firstNum)
}else if (firstNum < secondNum){
    console.log(secondNum)
}else {
    console.log('Numbers are equal')
}

// #iBvqtjEm

let x = null;

if (x === undefined || x === null || x === 0 || x === "" || x === false || isNaN(x)) {
    x = "default";
}

console.log(x);

// #awLXL6TBzg

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('super')
}
