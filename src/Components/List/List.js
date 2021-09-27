import Item from "../Item/Item";
import "./List.scss";
import AddItem from "../AddItem/AddItem";
import { useEffect, useState } from "react";

function List() {
  const localItems = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(localItems ? localItems : []);
  function addItem(item) {
    setItems([...items, { text: item.text, checked: item.checked }]);
    console.log(items);
  }
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <div className="todo-list">
      {items.map((item) => (
        <Item text={item.text} checked={item.checked} />
      ))}
      <AddItem submitItem={addItem} />
    </div>
  );
}

export default List;
