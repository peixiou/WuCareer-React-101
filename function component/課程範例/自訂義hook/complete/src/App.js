import './App.css';
import useCounter from './useCounter';
function App() {
  const [count, {increment,decrement,set,reset}] = useCounter(0,{max:5,min:-5})
  return (
    <div className="App">
      {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={()=>set(6)}>set</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
