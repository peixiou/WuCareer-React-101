import axios from 'axios'

axios.interceptors.request.use((config)=>{
  config.baseURL = 'https://imdb8.p.rapidapi.com'
  config.headers['X-RapidAPI-Key'] = 'e6d69ae5a1msh3046a7b6bb1bd27p1b3613jsna62a19d5177a'
  config.headers['X-RapidAPI-Host'] = 'imdb8.p.rapidapi.com'
  return config
},(error)=>{
  console.log(error)
})

axios.interceptors.response.use((response)=>{
  if(response.status === 200){
    console.log("SUCCESS")
  }
  return response.data
},(error)=>{
  if (error){
    console.log(error)
  }
  return error
})

export default axios