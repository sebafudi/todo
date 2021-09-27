import Item from "../Item/Item";
import "./List.scss";

let itemArray = [
  {
    text: "test",
    checked: false,
  },
  {
    text: "test2",
    checked: true,
  },
  {
    text: "test3",
    checked: false,
  },
  {
    text: "test1 2 3",
  },
];

function List() {
  return (
    <div className="todo-list">
      {itemArray.map((item) => (
        <Item text={item.text} checked={item.checked} />
      ))}
    </div>
  );
}

export default List;
