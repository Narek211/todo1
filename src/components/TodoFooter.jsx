import styles from './Footer.module.scss'

function TodoFooter({ todos, onClearCompleted }) {
  const completed = todos.filter((todo) => todo.isCompleted).length;
  return (
    <div className={styles.Footer}>
      <span>
        {completed}/{todos.length}
      </span>
      <button onClick={onClearCompleted}>Clear completed</button>
    </div>
  );
}
export default TodoFooter;
