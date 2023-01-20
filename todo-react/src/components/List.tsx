import Todo from './Todo'
import { TodoType } from '../types'

const List = (
  {
    todoList,
    editTodo,
    removeTodo
  }: {
    todoList: TodoType[],
    editTodo: Function,
    removeTodo: Function
  }
) => {
  const renderedList = todoList.map(todo =>
    <Todo
      title={todo.title}
      completed={todo.completed}
      editTodo={(updatedTodo: TodoType) => editTodo(todo._id, updatedTodo)}
      removeTodo={() => removeTodo(todo._id)}
      key={todo._id}
    />
  )

  return (
    <div className="ui grid center aligned">
      {renderedList}
    </div>
  )
}

export default List
