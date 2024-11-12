import logo from './logo.svg';
import './App.css';

const foods = ["pizza", "steak", "burgers", "KFC", "dumplings", "Thai stir fry"]

function App(){
  return (
    <div className="App">
      <h1>Our Menu</h1>
      <ul>
        {
          foods.map(food => {
            return <li>{food}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App;
