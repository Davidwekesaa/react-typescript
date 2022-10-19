import React, { useRef } from 'react'
import "./style.css"

interface Props{
    todo: string;
    setTodo :React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent) => void

}

const InputField = ({todo,setTodo,handleAdd}:Props) => {
const inputref = useRef<HTMLInputElement>(null)

  return <form className='input' onSubmit={(e) => {
    handleAdd(e);
    inputref.current?.blur()
  }}>
    <input type='input' 
    ref ={inputref}
    value ={todo}
    onChange ={(e)=> setTodo( e.target.value)}
    placeholder='Enter a task'
    className='input_box' />
    <button type='submit' className='input_submit'>GO</button>
  </form>
}

export default InputField