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

function order() {
  alert("點餐成功")
}

function MenuPage(){
  return (
    <div　className="food-list">
      {
        foodList.map((food)=>{
          return (
            <div className="food-card">
              <img src={food.img}/>
              <p className="food-name">{food.name}</p>
              <p className="food-price">{food.price}</p>
              <button onClick={order}>點餐</button>
            </div>
          )
        })
      }
    </div>
  )
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(MenuPage());
