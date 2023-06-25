import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name : "Winny",
      count: 1,
    }
    this.addCount = this.addCount.bind(this)
    this.minusCount = this.minusCount.bind(this)
  }
  addCount(){
    this.setState((prevState,props)=>{
      return ({
        count:prevState.count + 1,
        name:props.user
      })
    })
    this.setState((prevState)=>{
      return ({
        count:prevState.count + 2
      })
    })

    this.setState((prevState)=>{
      return ({
        count:prevState.count + 3
      })
    })
  }
  minusCount(){
    this.setState({count:1})
  }
  render(){
    return (
      <div className="App">
        <p>hello. {this.state.name}</p>
        <p>{this.props.user}</p>
        <p>{this.state.count}</p>
        <button onClick={this.addCount}>+</button>
        <button onClick={this.minusCount}>-</button>
      </div>
    );
  }
}

export default App;
