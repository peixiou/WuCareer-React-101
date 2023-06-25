import './App.css';
import { useState } from 'react';
import axios from 'axios'

function App() {
  const [series,setSeries] = useState([])
  const [keyword,setKeyword] = useState("")
  const [detail, setDetail] = useState("")
  function getAllSeries(){
    axios({
      method: "GET",
      url: "https://unogs-unogs-v1.p.rapidapi.com/search/titles",
      params: {
        order_by: 'date',
        type: 'series',
        title: keyword
      },
      headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': ''
      }
    }).then((response)=>{setSeries(response.data.results)})
  }

  function getDetail(id){
    axios({
      method: "GET",
      url: "https://unogs-unogs-v1.p.rapidapi.com/title/details",
      params: {
        netflix_id: id
      },
      headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': ''
      }
    }).then((response)=>{setDetail(response.data)})
  }
  
  return (
    <div className="App">
      <input onChange={(e)=>setKeyword(e.target.value)}></input>
      <button onClick={getAllSeries}>search</button>
      <div className='series-container'>
      {
        series.map(item=>{
          return (
            <div className='series' onClick={()=>getDetail(item.netflix_id)} key={item.netflix_id}>
              <div className='image'>
                <img src={item.img}/>
              </div>
              <p className='title'>{item.title}</p>
              {
                detail && detail.netflix_id == item.netflix_id &&
                <div className="detail">
                  <button onClick={e=>{e.stopPropagation();setDetail("")}}>關閉</button>
                  <p>{detail.synopsis}</p>
                  <p>適合 {detail.maturity_label} </p>
                  <p>喜歡人數 {detail.alt_votes}</p>
                </div>
              }
              
            </div>
          )
        })
      }
      </div>
      
    </div>
  );
}

export default App;
