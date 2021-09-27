import "./Item.scss";

function Item() {
  return (
    <div className="todo-item">
      <div className="todo-item-checkbox">
        <input type="checkbox" name="todo-item-checkbox-done" />
      </div>
      <div className="todo-item-text">Test todo task</div>
    </div>
  );
}

export default Item;
