import React, {useState} from 'react'
import Header from "./Header/Header";
import './App.css'
import AddTask from "./AddTask/AddTask";
import ToDoList from "./ToDoList/ToDoList";


const App=()=> {

   const [todo, setTodo]=useState([
       {
           id:1,
           title:'first todo',
           status:'incomplete'
       }
      ])

  return (
    <div className="App">
 <Header/>
        <AddTask todo={todo} setTodo={setTodo}/>
        <ToDoList todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
