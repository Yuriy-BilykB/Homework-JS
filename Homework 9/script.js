// #8Nmt60ZT
// const block = document.createElement('div');
// block.classList.add('wrap', 'collapse', 'alpha', 'beta');
// document.body.appendChild(block)
//
// const clonedBlock = block.cloneNode(true);
// document.body.appendChild(clonedBlock);

// #OPLI89c9G
// const arr = ['Main','Products','About us','Contacts'];
// const list = document.createElement('ul');
// document.body.appendChild(list);
// for (let el of arr){
//     const li = document.createElement('li');
//     li.innerText = el;
//     list.appendChild(li)
// };

// #jeBqHV525U5
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (let course of coursesAndDurationArray){
//     const block = document.createElement('div');
//     document.body.appendChild(block);
//     const paragraph = document.createElement('p');
//     paragraph.innerText = `${course.title} - ${course.monthDuration} `;
//     block.append(paragraph)
// }

// #Kx1xgoKy8
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for(let course of coursesAndDurationArray){
//     const block = document.createElement('div');
//     block.classList.add('item')
//     document.body.appendChild(block);
//     const title = document.createElement('h1');
//     title.innerText = course.title;
//     title.classList.add('heading');
//     const description = document.createElement('p')
//     description.innerText = course.monthDuration;
//     description.classList.add('description')
//     block.append(title, description)
// }
