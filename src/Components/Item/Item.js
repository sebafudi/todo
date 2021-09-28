import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./Item.scss";

function Item(props) {
  const [checked, setChecked] = useState(props.checked);

  function toggleItem() {
    setChecked(!checked);
  }

  function deleteItem(e) {
    e.preventDefault();
    props.onDelete();
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
      <div className="todo-item-delete">
        <div>
          <FontAwesomeIcon icon={faTrash} onClick={deleteItem} />
        </div>
      </div>
    </label>
  );
}

export default Item;
