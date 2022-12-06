import './App.css';
import imgOne from './todo.png';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className='my-container'>
      <img src={imgOne} width="250px" alt="To do list"/>
      <ToDoList/>
    </div>
  );
}

export default App;
