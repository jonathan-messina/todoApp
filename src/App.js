import './App.css';
import TodoItem from './components/TodoItem';
import TodoCounter from './components/TodoCounter';
import TodoList from './components/TodoList';
import TodoSearch from './components/TodoSearch';
import CreateTodoButton from './components/CreateTodoButton';



function App() {
  return (
    <>
<TodoCounter />
<TodoSearch/>
<TodoList>
  {todos.map((item,index)=>{
    <TodoItem key={index} (..item)/>
  })}
</TodoList>
<CreateTodoButton/>
</>
  );
}

export default App;
