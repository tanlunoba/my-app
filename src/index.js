// 入口文件
import React  from 'react'
import ReacrDom from "react-dom"
// import 'antd/dist/antd.min.css'
import App from './App'
import memoryUtils from '../src/utils/memoryUtils'
import storegeUtils from '../src/utils/storegeUtils'

// 读取local中保存的user

const use=storegeUtils.getUser();
console.log(storegeUtils.getUser())
memoryUtils.use=use

ReacrDom.render(<App/>,document.getElementById('root'))