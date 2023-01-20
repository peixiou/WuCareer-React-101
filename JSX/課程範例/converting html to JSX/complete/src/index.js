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
const fontStyle = {color:"red",fontSize:"48px"}

function listAllGreetings(){
  return greetings.map(greet=>{
    return <p key={greet.lang} style={fontStyle} className="font-style">{greet.text},{user}</p>
  })
}

function handleClick(){
  console.log('ok')
}

function handleEnter(){
  console.log('enter')
}

function handleLeave(){
  console.log('leave')
}

function greetingPage(){
  return (
    <div>
      {listAllGreetings()}
      <input value="input" disabled/>
      <a href='http://localhost:3000/'>href</a>
      <button tabIndex="1" onClick={handleClick} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>button</button>
    </div>
  )
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(greetingPage());