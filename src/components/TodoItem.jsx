import styles from './Item.module.scss';

function TodoItem({ todo, onChange, onDelete }) {
  return (
    <div className={styles.Item}>
      <label>
        <input type="checkbox" checked={todo.isCompleted} onChange={(e) => {
          // e.target.checked
          onChange({
            ...todo,
            isCompleted: e.target.checked,
          })
        }}/>
        <span>{todo.text}</span>
        <button onClick={() => {
          onDelete(todo);
        }}>X</button>
      </label>
    </div>
  );
}

export default TodoItem;
