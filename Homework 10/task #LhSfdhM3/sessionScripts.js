const mainBlock = document.querySelector('.main-block');
const mainList = document.querySelector('ul');
const sessionsList = JSON.parse(localStorage.getItem('listSessions'));
for (let sessionTime of sessionsList){
   const li = document.createElement('li');
   li.innerText = `First visit User by ${sessionTime}`
    mainList.append(li);
}