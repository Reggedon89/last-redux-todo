const initialState = {
  todos: [],
  filter: "all"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case "MODIFY_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? action.payload : todo
        )
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case "CHANGE_FILTER":
      return {
        ...state,
        filter: action.payload
      };
    case "CLEAR":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.checked)
      };
    case "MARK_ALL":
      return {
        ...state,
        todos: state.todos.map(todo => ({
          ...todo,
          checked: true
        }))
      };
    default:
      return state;
  }
}
