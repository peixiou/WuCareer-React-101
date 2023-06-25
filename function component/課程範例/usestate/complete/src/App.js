import './App.css';
import React, {useState} from 'react'

function App () {
  const [count, setCount] = useState(1)
  const [user, setUser] = useState({
    name: "Winny",
    age: 18
  })
  // constructor(){
  //   super()
  //   this.state = {
  //     count: 1,
  //   }
  //   this.addCount = this.addCount.bind(this)
  // }
  function addCount(){
    setCount((preState)=>preState+1)
  }

  function changeAge(){
    setUser((preState)=>({...preState,age:preState.age+1}))
  }
  return (
    <div className="App">
      <p>{count}</p>
      <p>{user.name} {user.age}</p>
      <button onClick={changeAge}>+</button>
    </div>
  );
}

export default App;
