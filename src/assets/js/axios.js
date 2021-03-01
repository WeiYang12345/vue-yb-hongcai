import axios from 'axios'
import md5 from 'js-md5';
import qs from "qs";

function getTime() {
  let time = new Date().getTime() / 1000 / 3600
  return Math.floor(time)
}

const Axios = axios.create({
  baseURL: process.env.VUE_APP_API_TARGET,
  // timeout: 3000,
  withCredentials: true,
  params: {
    "t_": (getTime().toString()),
    "d_": "Web"
  },
  headers: {
    "Accept": "application/prs.lhmh.v1+json",
    "Leihuo-Token": md5( ((getTime() % 10000 ) * 3 + 8888).toString()),
    "Leihuo-Model": "Time",
    // "t_": (getTime().toString()),
    // "d_": "Web"
  }
})

Axios.interceptors.request.use(

  function (config) {
    // if(localStorage.getItem('token')) {
    //   config.headers['token'] = localStorage.getItem('token')
    // }
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
      config.headers["Content-Type"] =
        "application/x-www-form-urlencoded;charset=utf-8";
    }
    return config;

  },
  function (error) {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  function (response) {
    if(response.status !== 200) {
      return Promise.reject(error)
    }
    const code = response.data.code
    switch(code) {
      case 200:
        return response.data
      break  
      default:
        return  Promise.reject(response.data)
    }
    
  },
  
);

export default Axios