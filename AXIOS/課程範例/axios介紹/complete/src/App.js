import './App.css';
import React, { useEffect } from 'react'
import axios from 'axios'

function App(){
  function getAllPost(){
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts"
    }).then((response)=>{console.log(response)})
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then((response)=>{return response.json()})
    // .then((json)=>{console.log(json)})
  }
  function createPost(){
    axios.post("https://jsonplaceholder.typicode.com/posts",{
      title: 'foo',
      body: 'bar',
      userId: 1,
    },{
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response)=>{console.log(response)})
    // fetch('https://jsonplaceholder.typicode.com/posts',{
    //   method: 'POST',
    //   body: JSON.stringify({
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1,
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    // .then((response)=>{return response.json()})
    // .then((json)=>{console.log(json)})
  }
  function updatePost(){
    axios.put("https://jsonplaceholder.typicode.com/posts/1",{
      id: 1,
      title: 'new title',
      body: 'bar',
      userId: 1,
    },{
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).then((response)=>{console.log(response.data)})
  }
  useEffect(()=>{
    getAllPost()
  },[])
    return (
      <div className="App">
          <button onClick={createPost}>create</button>
          <button onClick={updatePost}>update</button>
      </div>
    );
}

export default App;
