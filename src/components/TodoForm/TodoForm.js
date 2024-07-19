import { useState } from 'react'
import { Button } from '../UI/Button';

import styles from './TodoForm.module.css'

export const TodoForm = (props) => {
	const { addTodo } = props
	const [text, setText] = useState('');
	const onSubmitHandler = (event) => {
		event.preventDefault();
		addTodo(text)
		setText('')
	}
	return (
		<div className={styles.todoFormContainer}>
			<form onSubmit={onSubmitHandler}>
				<input
					placeholder="Введите новую задачу"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<Button type="submit" title="Submit" disabled={text === ""}>Добавить</Button>
			</form>
		</div>
	)
} 
