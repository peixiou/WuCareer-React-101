import './App.css';
import React from 'react';
import { LocalizationProvider} from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs' 
import { Grid } from '@mui/material';
import dayjs from 'dayjs'


export class App extends React.Component {
  constructor(){
    super()
    this.state = {
      checkin: "2023-06-25",
      checkout: "2023-06-26",
      results:[],
      showBtn: false
    }
    this.setCheckInDate = this.setCheckInDate.bind(this)
    this.setCheckOutDate = this.setCheckOutDate.bind(this)
    this.topFunction = this.topFunction.bind(this)
    this.toggleBtn = this.toggleBtn.bind(this)
  }
  componentDidMount(){
    let self = this
    let body = {
      location: 'Paris',
      checkin: this.state.checkin,
      checkout: this.state.checkout,
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
      self.setState({results:response.results})
      console.log(response.results)
    })

    window.addEventListener('scroll',this.toggleBtn)
  }
  componentDidUpdate(prevProps,prevState){
    let self = this
    let body = {
      location: 'Paris',
      checkin: this.state.checkin,
      checkout: this.state.checkout,
      adults: '1',
      children: '0',
      infants: '0',
      pets: '0',
      page: '1',
      currency: 'USD'
    }
    if(this.state.checkin !== prevState.checkin || this.state.checkout !== prevState.checkout){
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
        self.setState({results:response.results})
        console.log(response.results)
      })
    }
    
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.toggleBtn)
  }
  setCheckInDate(newValue){
    this.setState({checkin:dayjs(newValue).format('YYYY-MM-DD')})
  }
  setCheckOutDate(newValue){
    this.setState({checkout:dayjs(newValue).format('YYYY-MM-DD')})
  }
  topFunction() {
    document.documentElement.scrollTop = 0
  }
  toggleBtn(){
    if (document.documentElement.scrollTop>0){
      this.setState({showBtn:true})
    } else {
      this.setState({showBtn:false})
    }
  }
  render(){
    return (
      <div style={{padding: '30px'}}>
        <h3>巴黎民宿清單</h3> 
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="入住時間:" defaultValue={dayjs(this.state.checkin)} onChange={(newValue)=>this.setCheckInDate(newValue)} />
            <DatePicker label="退房時間:" defaultValue={dayjs(this.state.checkout)}  onChange={(newValue)=>this.setCheckOutDate(newValue)} />
        </LocalizationProvider>
        <Grid container spacing={2} style={{marginTop: '30px'}}>
          {
            this.state.results&&this.state.results.map((result)=>{
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
          this.state.showBtn && <button style={{fontSize:'30px',position:'fixed',right: '15px',bottom: '30px'}} onClick={this.topFunction}>to top</button>
        }
        
      </div>
    )
  }
}
export default App;
