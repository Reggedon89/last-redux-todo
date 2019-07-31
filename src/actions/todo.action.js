import store from "../store";

let id = 1;

export function addTodo(todo) {
  store.dispatch({
    type: "ADD_TODO",
    payload: {
      id: id,
      value: todo,
      checked: false
    }
  });

  id++;
}

export function modifyTodo(todo) {
  store.dispatch({
    type: "MODIFY_TODO",
    payload: {
      id: todo.id,
      value: todo.value,
      checked: todo.checked
    }
  });
}

export function removeTodo(id) {
  store.dispatch({
    type: "REMOVE_TODO",
    payload: id
  });
}

export function setFilter(filter) {
  store.dispatch({
    type: "CHANGE_FILTER",
    payload: filter
  });
}

export function clearCompleted() {
  store.dispatch({
    type: "CLEAR"
  });
}

export function markAll() {
  store.dispatch({
    type: "MARK_ALL"
  });
}
