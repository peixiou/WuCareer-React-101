import './App.css';
import React from 'react'

export class Text extends React.Component{
  constructor(){
      super()
  }
  componentDidMount(){
    setTimeout(() => {
      console.log('text mount')
    }, 3000);
    
  }
  componentDidUpdate(){
    console.log('text update')
  }
  componentWillUnmount(){
    setTimeout(() => {
      console.log('text unmount')
    }, 3000);
    
  }
  render(){
    return (
      <p>text</p>
    )
  }
}

export class Button extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    setTimeout(() => {
      console.log('button mount')
    }, 3000);
    
  }
  componentDidUpdate(){
    setTimeout(() => {
      console.log('button update')
    }, 3000);
    
  }
  componentWillUnmount(){
    setTimeout(() => {
      console.log('button unmount')
    }, 3000);
    
  }
  render(){
    return (
      <div>
        <Text/>
        <button>{this.props.count}</button>
      </div>
      
    )
  }
}

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      showButton : true,
      count: 0,
      gender: 'female',
      age: 18
    }
  }
  componentDidMount(){
    console.log('mount')
    
  }
  componentDidUpdate(prevProps, prevState){
    if (this.state.count !== prevState.count){
      console.log('count update')
    }
    if (this.props.text !== prevProps.text){
      
    }
    
  }
  componentWillUnmount(){
    console.log('unmount')
  }
  render(){
    return (
      <div className="App">
        {this.state.count} <br/>
        {this.state.gender}<br/>
        {this.state.age}<br/>
        <button onClick={()=>this.setState({count:2})}>+</button>
        <button onClick={()=>this.setState({gender:"male"})}>male</button>
        <button onClick={()=>this.setState({age:19})}>19</button>
      </div>
    );
  }
}

export default App;
