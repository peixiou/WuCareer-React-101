import axios from 'axios'


axios.interceptors.request.use((config)=>{
  config.baseURL = 'http://localhost:8000'
  return config
},(error)=>{
  console.log(error)
  return Promise.reject(error)
})


axios.interceptors.response.use((response)=>{
  if(response.status === 200){
    console.log("SUCCESS")
  }
  return response.data
},(error)=>{
  console.log(error)
  return Promise.reject(error)
  
})

export default axios