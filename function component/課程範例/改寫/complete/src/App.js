import './App.css';
import React, {useState, useEffect} from 'react';
import { LocalizationProvider} from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs' 
import { Grid } from '@mui/material';
import dayjs from 'dayjs'


function App () {
  const [checkin, setCheckIn] = useState("2023-06-25")
  const [checkout, setCheckOut] = useState("2023-06-26")
  const [results, setResults] = useState([])
  const [showBtn, setShowBtn] = useState(false)

  function setCheckInDate(newValue){
    setCheckIn(dayjs(newValue).format('YYYY-MM-DD'))
  }
  function setCheckOutDate(newValue){
    setCheckOut(dayjs(newValue).format('YYYY-MM-DD'))
  }
  function topFunction() {
    document.documentElement.scrollTop = 0
  }
  function toggleBtn(){
    if (document.documentElement.scrollTop>0){
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }

  useEffect(()=>{
    let self = this
    let body = {
      location: 'Paris',
      checkin: checkin,
      checkout: checkout,
      adults: '1',
      children: '0',
      infants: '0',
      pets: '0',
      page: '1',
      currency: 'USD'
    }
    fetch(`https://airbnb13.p.rapidapi.com/search-location?${new URLSearchParams(body)}`, {
      headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': ''
      }
    })
    .then((response) => {
      return response.json();
    })
    .then(function (response) {
      setResults(response.results)
    })
  },[checkin,checkout])
  useEffect(()=>{
    window.addEventListener('scroll',toggleBtn)
    return ()=>{
      window.removeEventListener('scroll',toggleBtn)
    }
  },[])
  return (
    <div style={{padding: '30px'}}>
      <h3>巴黎民宿清單</h3> 
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="入住時間:" defaultValue={dayjs(checkin)} onChange={(newValue)=>setCheckInDate(newValue)} />
          <DatePicker label="退房時間:" defaultValue={dayjs(checkout)}  onChange={(newValue)=>setCheckOutDate(newValue)} />
      </LocalizationProvider>
      <Grid container spacing={2} style={{marginTop: '30px'}}>
        {
          results&&results.map((result)=>{
            return (
              <Grid item xs={3} key={result.name}>
                {
                  result.images && (
                    <div style={{height: '200px'}} >
                      <img style={{width:'100%',height: '100%',objectFit:'cover'}} src={result.images[0]}/>
                    </div>
                  )         
                }
                <h4>房源名字</h4>
                <p>{result.name}</p>
                <h4>房源地址</h4>
                <p>{result.address}</p>
              </Grid>
            )
          })
        }
      </Grid>
      {
        showBtn && <button style={{fontSize:'30px',position:'fixed',right: '15px',bottom: '30px'}} onClick={topFunction}>to top</button>
      }
      
    </div>
  )
}
export default App;
