import './App.css';
import TodoItem from './components/TodoItem';
import TodoCounter from './components/TodoCounter';
import TodoList from './components/TodoList';
import TodoSearch from './components/TodoSearch';
import CreateTodoButton from './components/CreateTodoButton';

const todos = [
  {text:'Cortar cebolla', completed:false},
  {text:'Tomar el curso de React', completed:false},
  {text:'Ir a la tienda', completed:false},
]
function App() {
  return (
    <>
<TodoCounter />
<TodoSearch/>
<TodoList>
  {todos.map(todo=>
  (<TodoItem  key={todo.text} text={todo.text}/>))
  }
</TodoList>
<CreateTodoButton />
</>
  );
}

export default App;
