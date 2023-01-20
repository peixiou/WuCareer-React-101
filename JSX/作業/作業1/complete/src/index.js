import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const user = "Jeffery"
const todoList = [
  {
    date:"4/1",
    text:"線上課程第一堂"
  },
  {
    date:"4/2",
    text:"規劃作品集"
  }
]

function getTodoList(){
  return todoList.map((todo)=>{
    return (
      <ul>
        <li>{todo.date} {todo.text}</li>
      </ul>
    )
  })
}

function todoListPage(){
  return (
    <div>
      <p>{user}的待辦清單</p>
      {getTodoList()}
    </div>
  )
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(todoListPage());
