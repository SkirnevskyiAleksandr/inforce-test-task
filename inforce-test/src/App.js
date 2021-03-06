import{useState} from 'react'
import ToDo from './toDo'
import ToDoForm from './toDoForm'


function App() {
  const [todos, setTodos] = useState([])

  const addTask = (userInput) =>{
    if(userInput){
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete:false,
        imageUrl: "some url here",
        name: "Product name",
        count: 4,
        size: {
        width: 200,
        height: 200
        },
        weight: "200g",
        comments: ["CommentModel", "CommentModel"]
      }
      setTodos([...todos,newItem])
    }
  }

  const removeTask = (id)=> {
    setTodos([...todos.filter((todo) => todo.id != id)])
  }

  const handleToggle = (id) =>{
    setTodos([
      ...todos.map((todo) => 
      todo.id === id ? {...todo, complete: !todo.complete} : {...todo})])
  }


  return (
    // <form className="form" method="POST" action="www" name="products list">
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
        removeTask={removeTask}
        />
      )
    })} 
    
    
    </div>
    /* <button className="button" type = "submit"> send</button>
    </form> */
  );
}

export default App;

