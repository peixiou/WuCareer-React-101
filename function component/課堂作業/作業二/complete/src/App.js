import './App.css';
import useWindowScroll from './useWindowScroll.js';
function App() {
  const [{x,y},scrollTo] = useWindowScroll()
  return (
    <div className="App">
      <div className="button-wrapper">
        <button className="button" onClick={()=>scrollTo({left:0,top:1000})}>Scroll To (0, 1000) </button>
        <button className="button" onClick={()=>scrollTo({left:0,top:2000,behavior:'smooth'})}>Scroll To (0, 2000) (Smoothly)</button>
        <button className="button"  onClick={()=>scrollTo({left:0,top:0,behavior:'smooth'})}>Back To The Top</button>
      </div>
      {new Array(50).fill().map((_, index) => {
        return <p className="index" key={index}>{index}</p>;
      })}
      <aside className="info">
        Coordinates <span>x: {x}</span>
        <span>y:{y}</span>
      </aside>
    </div>
  );
}

export default App;
