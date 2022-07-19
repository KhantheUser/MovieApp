import axios from 'axios';
import { DOMAIN_BANNER } from '../Util/Settings/config';

const axiosBanner = axios.create({
    baseURL: DOMAIN_BANNER,

})

axiosBanner.interceptors.request.use = (config) => {
    return config
}
axiosBanner.interceptors.response.use = ((response)=>{
    return response
},
(error)=>{
    return error
}
)
export default axiosBanner;