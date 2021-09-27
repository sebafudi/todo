import { useEffect, useState } from "react";

import "./Item.scss";

function Item(props) {
  const localChecked = JSON.parse(localStorage.getItem(props.text));
  const [checked, setChecked] = useState(
    localChecked !== null ? localChecked : props.checked ? true : false
  );

  function toggleItem() {
    setChecked(!checked);
  }

  useEffect(() => {
    localStorage.setItem(props.text, checked);
  }, [checked, props.text]);

  return (
    <label htmlFor={props.text} className="todo-item">
      <div className="todo-item-checkbox">
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={toggleItem}
          id={props.text}
        />
        <span className="checkmark"></span>
      </div>
      <div className="todo-item-text">{props.text}</div>
    </label>
  );
}

export default Item;
