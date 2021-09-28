import Item from "../Item/Item";
import "./List.scss";
import AddItem from "../AddItem/AddItem";
import { useEffect, useState } from "react";

function List() {
  const localItems = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(localItems ? localItems : []);
  function addItem(item) {
    let lastId = items.length > 0 ? items.sort((a, b) => b.id - a.id)[0].id : 0;
    setItems([
      ...items,
      {
        id: lastId + 1,
        text: item.text,
        checked: item.checked,
      },
    ]);
  }
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <div className="todo-list">
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          text={item.text}
          checked={item.checked}
        />
      ))}
      <AddItem submitItem={addItem} />
    </div>
  );
}

export default List;
