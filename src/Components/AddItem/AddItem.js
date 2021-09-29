import { useEffect, useState } from "react";

import "./AddItem.scss";

function AddItem(props) {
  const localAddChecked = JSON.parse(localStorage.getItem("addInputChecked"));
  const localAddText = localStorage.getItem("addInputText");
  const [checked, setChecked] = useState(
    localAddChecked !== null ? localAddChecked : false
  );
  const [text, setText] = useState(localAddText ? localAddText : "");

  function toggleItem() {
    setChecked(!checked);
  }

  useEffect(() => {
    localStorage.setItem("addInputChecked", checked);
  }, [checked]);

  useEffect(() => {
    localStorage.setItem("addInputText", text);
  }, [text]);

  function submitItem(e) {
    if (e.key === "Enter" && text.trim().length > 0) {
      props.submitItem({ checked, text: text.trim() });
      setText("");
      setChecked(false);
    }
  }

  return (
    <div htmlFor={"x"} className="add-todo-item">
      <label>
        <div className="add-todo-item-checkbox">
          <input
            type="checkbox"
            checked={checked}
            onChange={toggleItem}
            id={"x"}
          />
          <span className="checkmark"></span>
        </div>
      </label>
      <input
        type="text"
        className="add-todo-item-text"
        placeholder="add an item..."
        name="x"
        id="x"
        value={text}
        onInput={(e) =>
          e.target.value.length > 1
            ? setText(e.target.value)
            : setText(e.target.value.trim())
        }
        onKeyDown={submitItem}
      />
    </div>
  );
}

export default AddItem;
