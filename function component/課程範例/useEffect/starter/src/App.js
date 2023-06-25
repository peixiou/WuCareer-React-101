import './App.css';
import React from 'react'

export class Text extends React.Component{
  constructor(props){
      super(props)
  }
  componentDidMount(){
    console.log('text mount')    
  }
  componentDidUpdate(){
    console.log('text update')
  }
  componentWillUnmount(){
    console.log('text unmount')    
  }
  render(){
    return (
      <p>{this.props.value}</p>
    )
  }
}

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      count: 0,
      gender: 'female',
    }
  }
  componentDidMount(){
    console.log('mount')
    
  }
  componentDidUpdate(prevProps, prevState){
    if (this.state.count !== prevState.count){
      console.log('count update')
    }
  }
  componentWillUnmount(){
    console.log('unmount')
  }
  render(){
    return (
      <div className="App">
        <button onClick={()=>this.setState({count:2})}>change count</button>
        {this.state.count < 2 && <Text value={this.state.count}/>}
        <button onClick={()=>this.setState({gender:"male"})}>change gender</button>
        <Text value={this.state.gender}/>
      </div>
    );
  }
}

export default App;
