import { useEffect, useState } from "react";

import "./Item.scss";

function Item(props) {
  const [checked, setChecked] = useState(props.checked);

  function toggleItem() {
    setChecked(!checked);
  }

  useEffect(() => {
    props.onUpdate({ ...props, checked });
    // props.onUpdate({ id: props.id, checked: checked, text: props.text });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

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
