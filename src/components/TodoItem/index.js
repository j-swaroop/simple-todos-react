// Write your code here
import "./index.css"

const TodoItem = (props) => {
    const {todoItem, onDeleteTodo} = props
    const {title, id} = todoItem
    // console.log(onDelete)
    
    const deleteTodo = () => {
        onDeleteTodo(id)
    }

    return(
        <li className="todo">
            <p className="todo-title"> {title} </p>
            <button onClick={deleteTodo} type="button" className="button"> Delete</button>
        </li>
    )
}


export default TodoItem;