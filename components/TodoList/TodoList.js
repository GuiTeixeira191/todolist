import React from "react";
import TodoListItem from '../TodoListItem/TodoListItem.js'
import NewTodoForm from "../NewTodoForm/NewTodoForm";

const TodoList = ({todos = [{text:'Hello'}]}) => {
    return (
        <div  className='list-wrapper'>
            <NewTodoForm/>
            {todos.map(todo => <TodoListItem key={todo} todo={todo}/>)}
        </div>
    )
}

export default TodoList