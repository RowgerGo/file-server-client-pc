import axios from 'axios';
import qs from 'qs';
axios.defaults.timeout=5000
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
let base = 'http://localhost:8083';

axios.interceptors.request.use(
  config=>{
    const token="213"
    config.data=qs.stringify(config.data)
    config.headers={
      'Content-Type':'application/x-www-form-urlencoded'
    }
    if(token){
      config.params={
        'token':token
      }
    }
    return config
  },
  err=>{
    return Promise.reject(err)
  }
)




export const requestLogin = params => { return axios.post(`${base}/user/signin`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };