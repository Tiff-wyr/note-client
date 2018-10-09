/**
 * Created by Administrator on 2018/10/8 0008.
 */
import axios from 'axios'
const baseURL='/api'
var instance=axios.create({
  baseURL,
  timeout:15000
})

const xhr={
  get(url,data,config){
    return new Promise((resolve,reject)=>{
      instance.get(url,{params:data},config).then(res=>{
        resolve(res.data)
      })
    })
  },
  post(url,data,config,method='post'){
    return new Promise((resolve,reject)=>{
      instance[method](url,data,config).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      })
    })
  },
  put(url,data,config){
    return this.post(url,data,config,'put')
  },
  delete(url,data,config){
    return this.post(url,data,config,'delete')
  }
}
// export const $axios=xhr
export default xhr
