import Item from "../Item/Item";
import "./List.scss";
import AddItem from "../AddItem/AddItem";
import { useEffect, useState } from "react";

function List() {
  const localItems = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(localItems ? localItems : []);

  function addItem(item) {
    const lastId = items.reduce(
      (prev, current) => (prev.y > current.y ? prev : current).id,
      -1
    );
    setItems([
      ...items,
      {
        id: lastId + 1,
        text: item.text,
        checked: item.checked,
      },
    ]);
  }

  function itemUpdate(item) {
    let index = items.findIndex((i) => i.id === item.id);
    items[index] = item;
    setItems([...items]);
  }

  function deleteItem() {
    let index = items.findIndex((i) => i.id === this.id);
    if (index > -1) {
      items.splice(index, 1);
    }
    setItems([...items]);
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
          onUpdate={itemUpdate}
          onDelete={deleteItem}
        />
      ))}
      <AddItem submitItem={addItem} />
    </div>
  );
}

export default List;
