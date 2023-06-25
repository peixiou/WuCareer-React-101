import './App.css';
import React, {useState,useEffect} from 'react'

function Text(props){
  useEffect(()=>{
    console.log('text mount')
    return ()=>{
      console.log('text unmount')
    }
  },[])

  useEffect(()=>{
    console.log('text update')
  })
  return (
    <p>{props.value}</p>
  )
}

function App () {
  const [count, setCount] = useState(0)
  const [gender, setGender] = useState('female')
  useEffect(()=>{
    console.log('mount')
    return ()=>{
      console.log('unmount')
    }
  },[])
  useEffect(()=>{
    console.log('count update')
  },[count])
  return (
    <div className="App">
      <button onClick={()=>setCount({count:2})}>change count</button>
      {count < 2 && <Text value={count}/>}
      <button onClick={()=>setGender({gender:"male"})}>change gender</button>
      <Text value={gender}/>
    </div>
  );
}

export default App;
