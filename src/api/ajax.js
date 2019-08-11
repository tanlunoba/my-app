// 发送ajax,用的axios,函数的返回值是promise对象
// 优化：统一处理请求异常
import axios from 'axios'

export default function ajax(url, data = {}, type = 'GET') {
    return new Promise((resolve,reject)=>{
        let Promise;
        //执行异步ajax请求
        if (type === 'GET') {
            Promise= axios.get(url, {
                params:data
            })
        } else {
            Promise= axios.post(url, data)
        }

        //如果成功了，调用resolve（value）

        Promise.then(Response=>{
            resolve(Response.data)
             //如果失败了，不调用reject(reason),而是提示异常信息
        }).catch(error=>{
            reject(error)
            alert('失败了')
        })
    })
    
}
