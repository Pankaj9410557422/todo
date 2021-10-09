import React,{useState} from 'react'
import "../Css/TodoInp.css"
import MaterialIcon from 'react-google-material-icons'

function TodoInp(props) {
    const [input, setInput] = useState('');
    const handleChange =(e)=>{
        setInput(e.target.value);
    }

    const handleSubmit= (e) =>{
        e.preventDefault();
        props.onSubmit({
            id:Math.ceil(Math.random()*1000),
            text: input
        });
        setInput('');
    }
    return (
        
        <form className ="todo-form" onSubmit = {handleSubmit}>
            <input type="text" placeholder="Add a task" value={input}className="inpval" 
            onChange={handleChange}/>
            <button className="todo-button" type='submit'><MaterialIcon icon="add_task" size={40}/></button>
                
        </form>
    )
}

export default TodoInp
