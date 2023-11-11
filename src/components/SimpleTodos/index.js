import {Component} from 'react'
import {v4} from 'uuid'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
    title: '',
    editTodoClicked: true,
  }

  onDeleteTodo = id => {
    const {todoList} = this.state
    const newTodoList = todoList.filter(eachTodo => eachTodo.id !== id)
    // console.log(newTodoList)
    this.setState({
      todoList: newTodoList,
    })
    // console.log(todoList)
  }

  onClickAdd = () => {
    const {title} = this.state

    if (title !== '') {
      const newTodo = {
        id: v4(),
        title,
      }
      this.setState(prevState => ({
        todoList: [...prevState.todoList, newTodo],
        title: '',
      }))
    }
  }

  onChangeInput = event => {
    this.setState({title: event.target.value})
  }

  onEditTodoTitle = id => {
    const {todoList} = this.state

    const todoObj = todoList.find(item => item.id === id)

    this.setState({editTodoClicked: false, title: todoObj.title})
  }

  onSaveTodoTitle = id => {
    const {title} = this.state
    if (title !== '') {
      this.setState(prevstate => ({
        todoList: prevstate.todoList.map(item => {
          if (item.id === id) {
            return {...item, title}
          }
          return item
        }),
        title: '',
        editTodoClicked: true,
      }))
    }
  }

  render() {
    const {todoList, title, editTodoClicked} = this.state

    return (
      <div className="bg-container">
        <div className="todos-container">
          <h1 className="heading"> Simple Todos</h1>
          <div className="input-container">
            <input
              type="text"
              className="input"
              onChange={this.onChangeInput}
              value={title}
            />
            {editTodoClicked && (
              <button
                className="add-btn"
                type="button"
                onClick={this.onClickAdd}
              >
                {' '}
                Add
              </button>
            )}
          </div>
          <ul className="todos-list-container">
            {todoList.map(eachTodo => (
              <TodoItem
                onDeleteTodo={this.onDeleteTodo}
                key={eachTodo.id}
                todoItem={eachTodo}
                onEditTodoTitle={this.onEditTodoTitle}
                onSaveTodoTitle={this.onSaveTodoTitle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
