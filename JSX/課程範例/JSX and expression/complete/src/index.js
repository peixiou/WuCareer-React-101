import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const greetings = [
  '歡迎回來',
  'Welcome Back',
]
const user = 'Andy'
const language = 'en'
function greetingByName(){
  return user + '歡迎回來'
}

function greetingByLanguage(){
  if (language === 'en'){
    return <p>Welcome Back, {user}</p>
  } else {
    return <p>歡迎回來, {user}</p>
  }
}

function listAllGreetings(){
  return greetings.map(greet=>{
    return <p key="greet">{greet},{user}</p>
  })
}

const defaultGreeting = <p>{listAllGreetings()}</p>

function greetingPage(){
  return (
    <div>
      {greetingByLanguage()}
      {listAllGreetings()}
      {
        greetings.map(greet=>{
          return <p key="greet">{greet},{user}</p>
        })
      }
    </div>
  )
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(greetingPage());
