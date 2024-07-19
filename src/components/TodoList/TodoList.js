import { Todo } from '../Todo/Todo';
import styles from './todolist.module.css';


export const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
	return (<div className={styles.todoListContainer}>
		{!todos.length && <h2>Список дел пуст!</h2>}
		{todos.map((todo) => <Todo
			todo={todo}
			key={todo.id}
			deleteTodo={deleteTodo}
			toggleTodo={toggleTodo}
		/>)}
	</div>)

}
