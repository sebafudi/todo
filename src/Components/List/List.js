import Item from "../Item/Item";
import "./List.scss";

function List() {
  return (
    <div className="todo-list">
      <Item text="First task" />
      <Item text="Second task" />
      <Item text="Third task" />
    </div>
  );
}

export default List;
