import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TodoList } from './components/TodoList/TodoList';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodosActions } from './components/TodoActions/TodosActions';
import { Footer } from './components/Footer/Footer';

import styles from './app.module.css';

function App() {
	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todo_list')) || []);

	const addTodoHandler = (text) => {
		const newTodo = {
			text: text,
			isCompleted: false,
			id: uuidv4()
		}
		setTodos([...todos, newTodo]);
		localStorage.setItem('todo_list', JSON.stringify(todos))
	}

	const deleteTodoHandler = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id))
		localStorage.setItem('todo_list', JSON.stringify(todos))
	}

	const toggleTodoHandler = (id) => {
		setTodos(
			todos.map((todo) => todo.id === id
				? { ...todo, isCompleted: !todo.isCompleted }
				: { ...todo }
			))
		localStorage.setItem('todo_list', JSON.stringify(todos))
	}
	const resetTodosHandler = () => {
		setTodos([])
	}
	const deleteCompletedTodosHandler = () => {
		setTodos(todos.filter(todo => !todo.isCompleted))
		localStorage.setItem('todo_list', JSON.stringify(todos))

	}
	let completedTodosCount = todos.filter(todo => todo.isCompleted).length;
	useEffect(() => { },
		localStorage.setItem('todo_list', JSON.stringify(todos)),
		[...todos])


	return (
		<div className={styles.App}>
			<h1>Список дел</h1>
			<TodoForm addTodo={addTodoHandler} />
			{!!todos.length && <TodosActions
				completedTosodosExist={!!completedTodosCount}
				resetTodos={resetTodosHandler}
				deleteCompletedTodos={deleteCompletedTodosHandler} />}
			<TodoList todos={todos}
				deleteTodo={deleteTodoHandler}
				toggleTodo={toggleTodoHandler}
			/>

			{completedTodosCount > 0 && <h2>{`Завершенных задач -  ${completedTodosCount}`}</h2>}
			<Footer />
		</div>
	);
}

export default App;
