import TodoForm from './components/TodoForm';
import './App.css'
import './assets/fonts.css'
import TodoTitle from './components/TodoTitle/TodoTitle';

function App() {

  return (
    <>
      <TodoTitle />
      <div className="container">
        <TodoForm />
      </div>
    </>
  );
}

export default App
