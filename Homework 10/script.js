// // #sH8c4er
// const title = document.createElement('h1');
// const button = document.createElement('button');
// title.innerText = 'Hello World';
// title.classList.visibility = 'hide'
// button.style.width = '100px'
// button.style.height = '30px'
// button.innerText = 'hide/show Title';
// document.body.append(title, button)
// button.addEventListener('click', function () {
//     if (title.style.visibility === 'visible') {
//         title.style.visibility = 'hidden';
//     } else {
//         title.style.visibility = 'visible';
//     }
// });

// #j693ca8
// const personAge = document.createElement('input');
// const btnConfirmAge = document.createElement('button');
// btnConfirmAge.style.width = '100px';
// btnConfirmAge.style.height = '30px';
// // personAge.type = "age";
// document.body.append(personAge, btnConfirmAge);
// btnConfirmAge.addEventListener('click', function () {
//     if (personAge.value < 18){
//
//         alert('Ýou are too young, to end this action')
//     }
// })

// #ymAmN2xJ
// const form = document.createElement('form');
// document.body.append(form);
// const inputName = document.createElement('input');
// inputName.setAttribute('type', 'text');
// inputName.setAttribute('placeholder', 'Name');
// inputName.setAttribute('name', 'name');
// const inputSurname = document.createElement('input');
// inputSurname.setAttribute('type', 'text');
// inputSurname.setAttribute('placeholder', 'Surname');
// inputSurname.setAttribute('name', 'surname');
// const inputAge = document.createElement('input');
// inputAge.setAttribute('type', 'number');
// inputAge.setAttribute('placeholder', 'Age');
// inputAge.setAttribute('name', 'age');
// const btnCreateObj = document.createElement('button');
// btnCreateObj.setAttribute('type', 'button');
// btnCreateObj.innerText = 'Create Object';
// form.append(inputName, inputSurname, inputAge, btnCreateObj);
// btnCreateObj.style.width = '100px';
// btnCreateObj.style.height = '30px';
//
// btnCreateObj.addEventListener('click', function () {
//     if (inputName.value && inputSurname && inputAge){
//         const block = document.createElement('div');
//         document.body.append(block);
//         const obj = document.createElement('p');
//         block.append(obj);
//         obj.innerText = `Name: ${inputName.value}, Surname: ${inputSurname.value}, Age: ${inputAge.value}`;
//     }else {
//         alert('Please fill in all fields!');
//     }
// })

// #2VaLt4vDczH
// const block = document.getElementById('counter');
// let valFromLocalStorage = parseInt(localStorage.getItem('num')) || parseInt(block.value);
// valFromLocalStorage += 1
// block.value = valFromLocalStorage
// localStorage.setItem('num', block.value)

// #Jg0gPO00
// const inputCalculator = document.createElement('input');
// document.body.append(inputCalculator)
// inputCalculator.addEventListener('input', function() {
//     if (inputCalculator.value) {
//         console.log(Number(inputCalculator.value) * 2.20462);
//     }
// });


// #RbQGnH5DuC
// let coursesTitleArray = [
//     'JavaScript Complex',
//     'Java Complex',
//     'Python Complex',
//     'QA Complex',
//     'Fullstack',
//     'Frontend'
// ];
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// localStorage.setItem('coursesTitleArray', JSON.stringify(coursesTitleArray));
// localStorage.setItem('coursesAndDurationArray', JSON.stringify(coursesAndDurationArray));
//
// function addToLocalStorage(arrayName, objToAdd) {
//     const array = localStorage.getItem(arrayName)
//     const parseArray = JSON.parse(array);
//     parseArray.push(objToAdd)
//     localStorage.setItem(arrayName, JSON.stringify(parseArray))
// }
// addToLocalStorage('coursesAndDurationArray', {title: 'Embeded', monthDuration: 10})

// #kUSgFqWY
// const table = document.createElement('table');
// const inputColumns = document.createElement('input');
// const inputRows = document.createElement('input');
// const inputContent = document.createElement('input');
// const btnInputs = document.createElement('button');
//
// inputColumns.placeholder = 'Кількість стовпців';
// inputRows.placeholder = 'Кількість рядків';
// inputContent.placeholder = 'Вміст ячеєк';
// btnInputs.textContent = 'Створити таблицю';
//
// document.body.append(table, btnInputs, inputColumns, inputRows, inputContent);
// btnInputs.addEventListener('click', function () {
//     const columns = parseInt(inputColumns.value);
//     const rows = parseInt(inputRows.value);
//     const content = inputContent.value;
//     for (let i = 0; i < rows; i++) {
//         const row = document.createElement('tr');
//         for (let j = 0; j < columns; j++) {
//             const cell = document.createElement('td');
//             cell.textContent = content;
//             row.appendChild(cell);
//         }
//         table.appendChild(row);
//     }
// });


// #bq1zkx7WP
// const block = document.createElement('div');
// block.textContent = localStorage.getItem('amount') || '100грн';
// document.body.append(block)
// const lastUpdateTime = parseInt(localStorage.getItem('lastUpdateTime')) || 0;
// const currentTime = Date.now();
//
// if (currentTime - lastUpdateTime > 10000){
//     let amount = parseInt(localStorage.getItem('amount')) || 100;
//     amount += 10;
//     block.textContent = `${amount} грн`;
//     localStorage.setItem('amount', amount);
//     localStorage.setItem('lastUpdateTime', currentTime);
// }

// #NKB0tgWIK1G
const people = [
    { name: "Юра", age: 21 }, { name: "Іра", age: 22 }, { name: "Олег", age: 23 },
    { name: "Катя", age: 24 }, { name: "Андрій", age: 25 }, { name: "Марія", age: 26 },
    { name: "Дмитро", age: 27 }, { name: "Олена", age: 28 }, { name: "Богдан", age: 29 },
    { name: "Наталія", age: 30 }, { name: "Василь", age: 31 }, { name: "Тетяна", age: 32 },
    { name: "Іван", age: 33 }, { name: "Світлана", age: 34 }, { name: "Роман", age: 35 },
    { name: "Оксана", age: 36 }, { name: "Максим", age: 37 }, { name: "Людмила", age: 38 },
    { name: "Володимир", age: 39 }, { name: "Алла", age: 40 }, { name: "Сергій", age: 41 },
    { name: "Зоряна", age: 42 }, { name: "Юрій", age: 43 }, { name: "Артем", age: 44 },
    { name: "Ганна", age: 45 }, { name: "Ігор", age: 46 }, { name: "Вікторія", age: 47 },
    { name: "Микола", age: 48 }, { name: "Ярослава", age: 49 }, { name: "Мирон", age: 50 },
    { name: "Ніна", age: 51 }, { name: "Ольга", age: 52 }, { name: "Євген", age: 53 },
    { name: "Любов", age: 54 }, { name: "Петро", age: 55 }, { name: "Вадим", age: 56 },
    { name: "Леся", age: 57 }, { name: "Станіслав", age: 58 }, { name: "Ілона", age: 59 },
    { name: "Арсен", age: 60 }, { name: "Дарина", age: 61 }, { name: "Аліна", age: 62 },
    { name: "Ростислав", age: 63 }, { name: "Карина", age: 64 }, { name: "Григорій", age: 65 },
    { name: "Софія", age: 66 }, { name: "Степан", age: 67 }, { name: "Інна", age: 68 },
    { name: "Мирослава", age: 69 }, { name: "Тарас", age: 70 }, { name: "Лілія", age: 71 },
    { name: "Денис", age: 72 }, { name: "Емілія", age: 73 }, { name: "Михайло", age: 74 },
    { name: "Люба", age: 75 }, { name: "Павло", age: 76 }, { name: "Юлія", age: 77 },
    { name: "Костянтин", age: 78 }, { name: "Наталя", age: 79 }, { name: "Орися", age: 80 },
    { name: "Єлизавета", age: 81 }, { name: "Анатолій", age: 82 }, { name: "Поліна", age: 83 },
    { name: "Данило", age: 84 }, { name: "Злата", age: 85 }, { name: "Богуслав", age: 86 },
    { name: "Віра", age: 87 }, { name: "Віталій", age: 88 }, { name: "Еліна", age: 89 },
    { name: "Єва", age: 90 }, { name: "Радомир", age: 91 }, { name: "Марта", age: 92 },
    { name: "Владислав", age: 93 }, { name: "Уляна", age: 94 }, { name: "Агата", age: 95 },
    { name: "Аріна", age: 96 }, { name: "Едуард", age: 97 }, { name: "Олеся", age: 98 },
    { name: "Федір", age: 99 }, { name: "Ксенія", age: 100 }
];

const list = document.createElement('ul');
const prevBtn = document.createElement('button')
prevBtn.textContent = 'Preveous';
const nextBtn = document.createElement('button');
nextBtn.textContent = 'Next';
document.body.append(list, prevBtn, nextBtn);
let startIndex = 0;
let number = 10;
let slicedPeople = people.slice(startIndex, number);
    for (const person of slicedPeople){
        const li = document.createElement('li');
        li.innerText = `Name: ${person.name}, Age: ${person.age}`;
        list.append(li)
}
nextBtn.addEventListener('click', function () {
    list.innerText = '';
    startIndex += number;
    if (startIndex >= people.length) {
        startIndex = 0;
    }
    const endIndex = startIndex + number;
    let slicedPeople = people.slice(startIndex, endIndex);
    for (const person of slicedPeople){
        const li = document.createElement('li');
        li.innerText = `Name: ${person.name}, Age: ${person.age}`;
        list.append(li)
    }
});
prevBtn.addEventListener('click', function () {
    list.innerText = '';
    startIndex -= number;
    if (startIndex < 0) {
        startIndex = people.length-10;
    }
    const endIndex = startIndex + number;
    let slicedPeople = people.slice(startIndex, endIndex);
    for (const person of slicedPeople){
        const li = document.createElement('li');
        li.innerText = `Name: ${person.name}, Age: ${person.age}`;
        list.append(li)
    }
});