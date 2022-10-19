import React,{useRef, useState,useEffect} from 'react'
import { Todo } from '../Model';
import TodoList from './TodoList';
import {MdOutlineDone} from 'react-icons/md'
import {AiTwotoneDelete} from 'react-icons/ai'
import {AiOutlineEdit} from 'react-icons/ai'

interface Props{
    todo:Todo;
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
    todos: Todo[];
}

const SingleTodo: React.FC<Props> = ({todo,setTodos,todos}) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)
  const inputRef = useRef<HTMLInputElement>(null)

const handleDone = (id:number)=>{
setTodos(todos.map((todo)=> todo.id === id ? {...todo,isDone:!todo.isDone}: todo)); 
};

const handleDelete = (id : number) =>{
   setTodos(todos.filter((todo) => todo.id !== id  ))
}

const handleSubmit = (e:React.FormEvent,id : number) =>{
e.preventDefault();
setTodos(todos.map((todo)=> todo.id === id ? {...todo,todo:editTodo} : todo))
setEdit(false)
}

useEffect(() => {
  inputRef.current?.focus()
}, [edit])

  return (

        <form action="" className="todos_single" onSubmit={(e)=>handleSubmit(e,todo.id)}>

      {
        edit ?(
        <input ref={inputRef} type="text" className="todos_single_text" value={editTodo} onChange={(e) => setEditTodo(e.target.value)}/>
        ):
        
        (
          
            todo.isDone? (
              <s className="todos_single_text">{todo.todo}</s>
            ):(
              <span className="todos_single_text">{todo.todo}</span>
            )
           
        )
      }


        <div>
          <span className="icon edit" onClick={() =>{
          if(!edit && !todo.isDone){
            setEdit(!edit)
          }}}
          
          ><AiOutlineEdit/></span>
          <span className="icon delete" onClick={()=>handleDelete(todo.id)}><AiTwotoneDelete/></span>
          <span className="icon done" onClick={()=>handleDone(todo.id)}><MdOutlineDone/></span>
          
        </div>
        </form>
        

  );
        
  
}

export default SingleTodo











