import axios from 'axios'

export const axiosReq = axios.create({
  baseURL: 'http://localhost:3100/',
  withCredentials: true
});

axiosReq.interceptors.response.use(res => res,async(error) => {
  if(error.response.status === 401){
    const res = await axiosReq.get('/refresh',{});
    if(res.status === 200){
      axiosReq.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`
      return axios(error.config)
    }
  }
})