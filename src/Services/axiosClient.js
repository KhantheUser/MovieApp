import axios from 'axios';
import store from '../configStore'
import { DOMAIN, DOMAIN_BANNER, DOMAIN_MOVIE, TOKEN } from '../Util/Settings/config';
const axiosClient = axios.create({
    baseURL: `${DOMAIN}/api`,
   headers :{
     TokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzEiLCJIZXRIYW5TdHJpbmciOiIxMS8xMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NzA3MTY4MDAwMDAiLCJuYmYiOjE2NDU5ODEyMDAsImV4cCI6MTY3MDg2NDQwMH0.hImF3FD5ezlSpmo_fyOBeTlwLGcUfxyEeZIRIddaRFE'
   }

})

axiosClient.interceptors.request.use(config =>{
   if (config.headers) {
    const accessToken = localStorage.getItem(TOKEN) ||  ''
    if(accessToken){
      config.headers.Authorization = `Bearer ${JSON.parse(accessToken)}`
    }
  }

  return config;
})
axiosClient.interceptors.response.use((response)=>{
     if (response.status === 200) {
        return response.data.content
      }
     
},
(error)=>{
    return error.response.data.content;
}
)
export default axiosClient;