import './App.css';
import React, { useEffect } from 'react'
import axios from 'axios'

axios.interceptors.request.use((config)=>{
  config.baseURL = 'https://jsonplaceholder.typicode.com'
  config.headers['Content-type'] = 'application/json; charset=UTF-8'
  config.headers['token'] = ''
  return config
},(error)=>{
  console.log(error)
})

axios.interceptors.response.use((response)=>{
  if(response.status === 200){
    console.log("SUCCESS")
  }
  return response
},(error)=>{
  if (error.response.status === 404){
    console.log("fail")
  }
  return error
})

function App(){
  function getAllPost(){
    axios({
      method: "GET",
      url: "/postsss"
    }).then((response)=>{console.log(response)})
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then((response)=>{return response.json()})
    // .then((json)=>{console.log(json)})
  }
  function createPost(){
    axios.post("/posts",{
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
    axios.put("/posts/1",{
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
