import React, { useState } from 'react';
import { isMapIterator } from 'util/types';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './Model';

const App : React.FC = () => {
const [todo,setTodo] = useState<string>("")
const [todos, setTodos] = useState<Todo[]>([])

const handleAdd = (e:React.FormEvent) =>{
e.preventDefault()

if(todo){
  setTodos([...todos,{id:Date.now(),todo,isDone:false}])
  setTodo("")
}
}


console.log(todos);

  return (
    <div className="App">
     <span className="heading">MY TASKS</span>
     <InputField todo={todo} setTodo={setTodo} 
     handleAdd={handleAdd}/>
     <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
