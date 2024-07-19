import { Button } from '../UI/Button';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import style from './todosActions.module.css';

export const TodosActions = ({ resetTodos, deleteCompletedTodos, completedTosodosExist }) => {
	return <div className={style.buttonWrapper}>
		<Button title='Сброс задач' onClick={resetTodos}> <RiRefreshLine /> </Button>
		<Button title='Удаление завершенных задач'
			onClick={deleteCompletedTodos}
			disabled={!completedTosodosExist}
		> <RiDeleteBin2Line /> </Button>
	</div>
}
