import './index.css'

const TodoItem = props => {
  const {initialTodosList, deleteUser} = props
  const {id, title} = initialTodosList

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="lists">
      <p className="paragraph">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
