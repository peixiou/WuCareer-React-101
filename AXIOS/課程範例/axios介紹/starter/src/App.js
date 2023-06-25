import './App.css';
import React, { useEffect } from 'react'

function App(){
  function getAllPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{return response.json()})
    .then((json)=>{console.log(json)})
  }
  function createPost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response)=>{return response.json()})
    .then((json)=>{console.log(json)})
  }
  useEffect(()=>{
    getAllPost()
  },[])
    return (
      <div className="App">
          <button onClick={createPost}>create</button>
      </div>
    );
}

export default App;
