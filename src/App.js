import './App.css';
import React , {useState,useEffect} from "react"
import TodoInp from "./Components/TodoInp";
import Todo from "./Components/Todo"
import images from "./Images/to-do-list-apps.png"

function App() {
  const [tasks, setTasks]=useState(()=>{
    const savedTasks = localStorage.getItem("tasks");
    if(savedTasks){
      return JSON.parse(savedTasks)
    }else{
      return [];
    }
  });

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks]);
  
  const addToDo = inp=>{
    let str = inp.text.trim();
    if(str===''){
      return;
    }else{
      inp.text=str;
    }

    const newTasks = [...tasks, {id:inp.id, text:inp.text}];
    setTasks(newTasks);
    // console.log(...tasks);
  }
  console.log(tasks);

  const removeTodo = id =>{
    const newTasks =tasks.filter(obj=>{
      return obj.id !== id;
    })
    // console.log();
    setTasks(newTasks);
  }

  const updateTask=((id, newVal)=>{
    // console.log(newVal);
    if(newVal.text.trim()===''){
      return;
    }
    setTasks(prev=>prev.map(item=>(item.id === id ? newVal : item)))
  })
  

  return (
  <div className='App'>
    <div className="header">
    <img src= {images} className ="logo"/>
    </div>
    <div className="wrapper">
    <h1>DO-DO LIST</h1>
    <TodoInp onSubmit={addToDo}/>
    <Todo removeTodo={removeTodo} tasks={tasks} updateTask={updateTask}/>
    </div>
  </div>
  );
}

export default App;
