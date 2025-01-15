import { useState } from 'react'
import TodoForm from './components/TodoForm';
import './App.css'

function App() {

  return (
    <>
    <h1>To-Do List</h1>
      <div className="container">
        <TodoForm />
      </div>
    </>
  );
}

export default App
