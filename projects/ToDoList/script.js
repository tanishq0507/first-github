const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

// Load todos from localStorage
function loadTodos() {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.forEach(todo => {
    list.appendChild(createTodoItem(todo.text, todo.checked));
  });
}

// Save todos to localStorage
function saveTodos() {
  const todos = [];
  list.querySelectorAll('li').forEach(li => {
    todos.push({
      text: li.querySelector('span').textContent,
      checked: li.classList.contains('checked')
    });
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}

function createTodoItem(text, checked = false) {
  const li = document.createElement('li');
  if (checked) li.classList.add('checked');

  const checkBtn = document.createElement('button');
  checkBtn.className = 'check-btn';
  checkBtn.innerHTML = checked ? '☑' : '☐';
  checkBtn.onclick = function() {
    li.classList.toggle('checked');
    checkBtn.innerHTML = li.classList.contains('checked') ? '☑' : '☐';
    saveTodos();
  };

  const span = document.createElement('span');
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.innerHTML = '✖';
  deleteBtn.onclick = function() {
    list.removeChild(li);
    saveTodos();
  };

  li.appendChild(checkBtn);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  return li;
}

addBtn.onclick = function() {
  const text = input.value.trim();
  if (text) {
    list.appendChild(createTodoItem(text));
    input.value = '';
    saveTodos();
  }
};

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addBtn.onclick();
});

// Load todos
loadTodos();