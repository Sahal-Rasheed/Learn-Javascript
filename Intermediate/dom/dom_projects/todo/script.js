const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const addBtn = document.querySelector('#add');
const count = document.querySelector('#count');

addBtn.addEventListener('click', () => {
    if (inputBox.value === '') {
        alert('Input cannot be empty');
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = inputBox.value;
        listContainer.appendChild(listItem);
        const span = document.createElement("span");
        span.textContent = '\u00d7';
        listItem.appendChild(span);
    }
    inputBox.value = "";
    count.textContent = `Count: ${listContainer.children.length}`;
    saveTodo();
})

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveTodo();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveTodo();
        count.textContent = listContainer.children.length === 0 ? '' : `Count: ${listContainer.children.length}`;
    }
})



const saveTodo = () => {
    localStorage.setItem("todo", listContainer.innerHTML)
    localStorage.setItem("count", listContainer.children.length) 
}

const showTodo = () => {
    listContainer.innerHTML = localStorage.getItem("todo");
    count.textContent = localStorage.getItem("count") !== "0" ? 'Count: ' + localStorage.getItem("count") : '';
}
showTodo();