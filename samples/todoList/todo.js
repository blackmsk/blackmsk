var todoItems;
//api
function fetchTodoItems() {
    var todos = [
        { id: 1, title: "안녕", done: false },
        { id: 2, title: "타입", done: false },
        { id: 3, title: "스크립트", done: false },
    ];
    return todos;
}
// CRUD methods
function fetchTodos() {
    var todos = fetchTodoItems();
    return todos;
}
function addTodo(todo) {
    todoItems.push(todo);
}
function deleteTodo(index) {
    todoItems.splice(index, 1);
}
function completeTodo(index, todo) {
    todo.done = true;
    todoItems.splice(index, 1, todo);
}
// business Logic
function logFirstTodo() {
    //할일 목록에서 첫번째 출력
    return todoItems[0];
}
function showCompleted() {
    return todoItems.filter(function (item) {
        return item.done;
    });
}
function log() {
    console.log(todoItems);
}
// TODO 아래 함수의 내용을 채워보세요. 아래 함수는 addTodo() 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems() {
    var item1 = {
        id: 4,
        title: "아이템 4",
        done: false,
    };
    addTodo(item1);
    addTodo({
        id: 5,
        title: "아이템 5",
        done: true,
    });
}
todoItems = fetchTodoItems();
addTwoTodoItems();
log();
completeTodo(1, todoItems[1]);
log();
var completeTodoList = showCompleted();
console.log(completeTodoList);
deleteTodo(3);
log();
