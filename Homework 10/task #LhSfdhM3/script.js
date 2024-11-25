const sessionsList = JSON.parse(localStorage.getItem('listSessions')) || [];
window.onload = function() {
    const sessionTime = new Date();
    sessionsList.push(sessionTime)
    localStorage.setItem('listSessions', JSON.stringify(sessionsList))
};

console.log(sessionsList)