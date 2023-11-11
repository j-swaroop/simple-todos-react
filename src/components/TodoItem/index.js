// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    isCompleted: false,
    isEditedClicked: false,
  }

  deleteTodo = () => {
    const {todoItem, onDeleteTodo} = this.props
    const {id} = todoItem
    onDeleteTodo(id)
  }

  onEditTodo = () => {
    const {todoItem, onEditTodoTitle} = this.props
    const {id} = todoItem
    this.setState({isEditedClicked: true})
    onEditTodoTitle(id)
  }

  onSaveTodo = () => {
    const {todoItem, onSaveTodoTitle} = this.props
    const {id} = todoItem
    this.setState({isEditedClicked: false})
    onSaveTodoTitle(id)
  }

  onCompleteTodoItem = () => {
    this.setState(prevState => ({isCompleted: !prevState.isCompleted}))
  }

  render() {
    const {todoItem} = this.props
    const {title, id} = todoItem
    const {isCompleted, isEditedClicked} = this.state

    const classNameComplete = isCompleted ? 'text-decaration' : ''

    return (
      <li className="todo">
        <div className="todo-todo">
          <input
            type="checkbox"
            id={id}
            onClick={this.onCompleteTodoItem}
            className="checkbox-input"
          />
          <label htmlFor={id} className={`todo-title ${classNameComplete}`}>
            {' '}
            {title}{' '}
          </label>
        </div>
        <div className="btns-container">
          <button onClick={this.deleteTodo} type="button" className="button">
            {' '}
            Delete
          </button>
          {isEditedClicked ? (
            <button
              onClick={this.onSaveTodo}
              type="button"
              className="button-1"
            >
              {' '}
              Save
            </button>
          ) : (
            <button
              onClick={this.onEditTodo}
              type="button"
              className="button-1"
            >
              {' '}
              Edit
            </button>
          )}
        </div>
      </li>
    )
  }
}

export default TodoItem
