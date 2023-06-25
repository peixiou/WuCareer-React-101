import './App.css';
import { useState } from 'react';
import axios from 'axios'

axios.interceptors.request.use((config)=>{
  config.baseURL = 'https://unogs-unogs-v1.p.rapidapi.com'
  config.headers['X-RapidAPI-Key'] = ''
  config.headers['X-RapidAPI-Host'] = ''
  return config
},(error)=>{
  console.log(error)
})

axios.interceptors.response.use((response)=>{
  return response.data
},(error)=>{
  console.log("fail")
  return error
})


function App() {
  const [series,setSeries] = useState([])
  const [keyword,setKeyword] = useState("")
  const [detail, setDetail] = useState("")
  
  function getAllSeries(){
    axios({
      method: "GET",
      url: "/search/titles",
      params: {
        order_by: 'date',
        type: 'series',
        title: keyword
      },
    }).then((response)=>{setSeries(response.results)})
  }

  function getDetail(id){
    axios({
      method: "GET",
      url: "/title/details",
      params: {
        netflix_id: id
      },
    }).then((response)=>{setDetail(response)})
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
