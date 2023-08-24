import './App.scss';
import List from './components/list';
import Person from './models/person';


function App() {

  const stringItems = [
    "elements",
    "of",
    "the",
    "list",
  ]

  const persons: Person[] = [
    new Person("Jerry", 40),
    new Person("Beth", 34),
    new Person("Summer", 17),
    new Person("Morty", 14),
    new Person("Rick", 70)
];

  return (
    <div className="App">
      <h3>Array of strings</h3>
      <List items={stringItems} getter={(i:string)=>i}/>
      <h3>Array of objects</h3>
      <List items={persons} getter={(i:Person)=>i.introduce()}/>
    </div>
  );
}

export default App;
