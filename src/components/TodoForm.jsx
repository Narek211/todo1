import { useState } from 'react';
import styles from './Form.module.scss';

function TodoForm ({onAdd}) {

    const [text, setText] = useState("")
    return(
        <form className={styles.Form} onSubmit={(e) => {
            e.preventDefault();
            onAdd(text);
            setText("");
        }}>
            <input type='text' value={text}  onChange={(e) => {
                if (e.value !== '') {
                    setText(e.target.value);
                }
            }}/>
            <button>+</button>
        </form>
    )
}

export default TodoForm;