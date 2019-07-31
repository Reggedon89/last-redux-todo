import React, { useState, useEffect } from "react";
import MaterialIcon from "material-icons-react";
import { modifyTodo, removeTodo } from "../actions/todo.action";

export default props => {
  const [value, setValue] = useState(props.value);
  const [checked, setChecked] = useState(props.checked);

  useEffect(() => {
    modifyTodo({
      value: value,
      checked: checked,
      id: props.id
    });
  }, [value, checked, props.id]);

  function remove(e) {
    removeTodo(props.id);
  }

  return (
    <li>
      <input
        id={"check" + props.id}
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(!checked)}
      />
      <label htmlFor={"check" + props.id} className="replace">
        <MaterialIcon icon="done" />
      </label>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button type="button" onClick={remove}>
        X
      </button>
    </li>
  );
};
