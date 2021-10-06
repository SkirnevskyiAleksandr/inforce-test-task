import{useState} from 'react'
import ToDo from './toDo'
import ToDoForm from './toDoForm' 


function App() {
  const [todos, setTodos] = useState([])

  const addTask = () =>{

  }

  const remooveTask = ()=> {

  }

  const handleToggle = () =>{

  }


  return (
    <div className="App">
    <header>
      <h1> Products list: {todos.length}</h1>
    </header>
    <ToDoForm addTask={addTask}/>
    {todos.map((todo) => {
      return(
        <ToDo
        todo={todo}
        key={todo.id}
        toggleTask={handleToggle}
        remooveTask={remooveTask}
        />
      )
    })}  
    </div>
  );
}

export default App;

