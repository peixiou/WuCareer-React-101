import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import beefNoodle from './img/beef-noodle.jpg'
import dumplings from './img/dumplings.jpg'
import friedRice from './img/fried-rice.jpg'

const foodList = [
  {
    name:"牛肉麵",
    price: 120,
    img:beefNoodle
  },
  {
    name:"水餃",
    price: 80,
    img:dumplings
  },
  {
    name:"炒飯",
    price: 30,
    img:friedRice
  },
]

function MenuPage(){
  return (
    <div>
    </div>
  )
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(MenuPage());
