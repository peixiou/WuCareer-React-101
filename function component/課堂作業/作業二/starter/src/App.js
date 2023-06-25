import './App.css';
import useWindowScroll from './useWindowScroll';
function App() {
  return (
    <div className="App">
      <div className="button-wrapper">
        <button className="button">Scroll To (0, 1000) </button>
        <button className="button">Scroll To (0, 2000) (Smoothly)</button>
        <button className="button">Back To The Top</button>
      </div>
      {new Array(50).fill().map((_, index) => {
        return <p className="index" key={index}>{index}</p>;
      })}
      <aside className="info">
        Coordinates <span>x:</span>
        <span>y:</span>
      </aside>
    </div>
  );
}

export default App;
