import React from 'react'
import { Todo } from '../Model';
import SingleTodo from './SingleTodo';
import './style.css'

interface Props {
    todos: Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
  <div className="container">
  <div className='todos'>
    <span className="active_heading">Active Tasks</span>
        {
      
        todos.map((todo) =>(
          todo.isDone === false ?
            <SingleTodo 
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}/>
            : ""
        ))
    }
   </div>

   <div className='todos remove'>
    <span className="active_heading">Completed Tasks</span>
        {
      
        todos.map((todo) =>(
          todo.isDone === true ?
            <SingleTodo 
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}/>
            : ""
        ))
    }
   </div>
   </div>
        
  )
  
}

export default TodoList