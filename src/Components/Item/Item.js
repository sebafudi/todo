import "./Item.scss";

function Item({ text }) {
  return (
    <label htmlFor={text} className="todo-item">
      <div className="todo-item-checkbox">
        <input type="checkbox" id={text} />
        <span class="checkmark"></span>
      </div>
      <div className="todo-item-text">{text}</div>
    </label>
  );
}

export default Item;
