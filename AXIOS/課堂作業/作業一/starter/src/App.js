import './App.css';
import { useState } from 'react';
import axios from 'axios'

function App() {
 
  return (
    <div className="App">
      <input></input>
      <button>search</button>
      <div className='series-container'>

      {/* 影集卡片範例 */}
      <div className='series'>
        <div className='image'>
          <img src=""/>
        </div>
        <p className='title'>標題</p>
        <div className="detail">
            <button onClick={e=>{e.stopPropagation();setDetail("")}}>關閉</button>
            <p>介紹內容</p>
            <p>適合</p>
            <p>喜歡人數</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
