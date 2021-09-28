import { useEffect, useState } from "react";

import "./Item.scss";

function Item(props) {
  const localChecked = JSON.parse(localStorage.getItem("todo-item" + props.id));
  const [checked, setChecked] = useState(
    localChecked !== null ? localChecked : props.checked ? true : false
  );

  function toggleItem() {
    setChecked(!checked);
  }

  useEffect(() => {
    localStorage.setItem("todo-item" + props.id, checked);
  }, [checked, props.id]);

  return (
    <label htmlFor={props.id} className="todo-item">
      <div className="todo-item-checkbox">
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={toggleItem}
          id={props.id}
        />
        <span className="checkmark"></span>
      </div>
      <div className="todo-item-text">{props.text}</div>
    </label>
  );
}

export default Item;
