import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 1,
    }
    this.addCount = this.addCount.bind(this)
  }
  addCount(){
    this.setState({count:2})
    this.setState((prevState,props)=>{
      return ({
        count:prevState.count + 1,
        name:props.user
      })
    })
  }
  render(){
    return (
      <div className="App">
        <p>{this.state.count}</p>
        <button onClick={this.addCount}>+</button>
      </div>
    );
  }
}

export default App;
