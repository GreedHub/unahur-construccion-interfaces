import PersonForm from './components/forms/person';
import './App.scss';
import List from './components/list';
import Person from './models/person';
import { useState } from 'react';
import TodoForm from './components/forms/todo';


function App() {


  const [persons,setPersons] = useState<Person[]>([
    new Person("Jerry", 40),
    new Person("Beth", 34),
    new Person("Summer", 17),
    new Person("Morty", 14),
    new Person("Rick", 70)
  ])

  const pushPerson = (p:Person)=>{
    setPersons(persons=>[...persons,p])
  }


  const [todos,setTodos] = useState<string[]>([
    "elements",
    "of",
    "the",
    "list",
  ])

  const pushTodo = (todo:string)=>{
    setTodos(todos=>[...todos,todo])
  }
  return (
    <div className="App">
      <h3>Array of Todo:</h3>
      <TodoForm push={pushTodo}/>
      <List items={todos} getter={(i:string)=>i}/>
      <h3>Array of objects</h3>
      <PersonForm push={pushPerson}/>
      <List items={persons} getter={(p:Person)=>p.introduce()}/>
    </div>
  );
}

export default App;
