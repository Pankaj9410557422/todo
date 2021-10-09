import React,{useState} from 'react'
import TodoInp from './TodoInp'
import '../Css/Todo.css'
import MaterialIcon from 'react-google-material-icons'


function Todo(props) {
    const [editText, setEditText]= useState({
        id:null,
        value:''
    })
    
    const submitUpdate = value=>{
        props.updateTask(editText.id, value)
        setEditText({
            id:null,
            value:''
        })
    }
    if(editText.id){
        console.log("enterd");
        return <TodoInp editText={editText} onSubmit={submitUpdate}/>

    }
    return (
        <div className="task-list">
            <ul>
                {
                    props.tasks.map(task=>(

                        <li key={task.id} className="list">
                            <div className="task" contentEditable={false}>{task.text}</div>
                            <button onClick ={()=>setEditText({id:task.id, value:task.text})}><MaterialIcon icon="edit" size={50}/></button>
                            <button onClick={()=>props.removeTodo(task.id)}><MaterialIcon icon="delete" size={50}/></button>

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo
