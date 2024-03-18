import axios from 'axios'


axios.interceptors.request.use((config)=>{
  config.baseURL = 'http://localhost:8000'
  config.headers['authorization'] = `Bearer ${localStorage.getItem('accessToken')}`
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
  console.log(error.response.data.message)
  const refreshUrl = 'http://localhost:8000/auth/refresh'
  if (error.response.data.message === 'jwt expired' && error.config.url !== refreshUrl ){
    const originalRequest = error.config;
    return axios.post(refreshUrl,{refresh:localStorage.getItem('refreshToken')})
    .then((response)=>{
      localStorage.setItem("accessToken", response.access);
      originalRequest.headers.Authorization = 'Bearer ' + response.access
      return axios(originalRequest)
    })
    .catch((error)=>{
      alert(`${error.response.status}: 無相關使用授權，請重新登入`)
      window.location.href = '/login'
      return Promise.reject(error)
    })
  }
  return Promise.reject(error)
  
})

export default axios