import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const greetings = [
  {
    lang:"zh-tw",
    text:"歡迎回來"
  },
  {
    lang:"en",
    text:"Welcome Back"
  }
]
const user = 'Andy'

function listAllGreetings(){
  return greetings.map(greet=>{
    return <p key="greet">{greet.text},{user}</p>
  })
}

function greetingPage(){
  return (
    <div>
      {listAllGreetings()}
    </div>
  )
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(greetingPage());
