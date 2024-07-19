import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './todo.module.css';


export const Todo = ({ todo, deleteTodo, toggleTodo }) => {
	return (
		<div className={`${styles.todo}  ${todo.isCompleted && styles.completedTodo}`}>
			<RiTodoFill className={styles.todoIcon} />
			<div className={styles.todoText} >
				{todo.text}
			</div>
			<RiDeleteBin2Line
				className={styles.deleteIcon}
				onClick={() => deleteTodo(todo.id)}
				title='Удалить задачу'
			/>
			<FaCheck
				className={styles.checkIcon}
				onClick={() => toggleTodo(todo.id)}
				title='Завершить задачу'
			/>
		</div>
	)

}
