// import axios from 'axios'
// // get传输模式
// export const get = (url,params)=>{
//   return axios.get(url,{params});
// }
// // post传输模式
// export const post = (url,params)=>{
//   return axios.post(url,params);
// }

import axios from 'axios'

export const get = (url, params) => {
  return axios.get(url, { params })
}

export const post = (url, params) => {
  return axios.post(url, params)
}
