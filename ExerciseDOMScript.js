// List adding and removing using JS to manipulate the html element

const ul = document.getElementById('todoList');
const inputField = document.getElementById('newTask');
const button = document.getElementById('addTask');
button.addEventListener('click',() =>{
    const newList = document.createElement('li');
    newList.className = 'taskList';
    newList.innerHTML = `${inputField.value}`;
    newList.addEventListener('click',() => {
        ul.removeChild(newList);
        alert('Task removed');
    });
    ul.appendChild(newList);
    alert('Task added');
});
