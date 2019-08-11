import React, { Component } from 'react'
import { Modal } from 'antd';
import memoryUtils from '../../utils/memoryUtils'
import {withRouter} from 'react-router-dom'
import menuList from '../left-nav/sj'
import { formatTime } from './tools'
import storegeUtils from '../../utils/storegeUtils'
class Header extends Component {
   showConfirm=()=> {
    Modal.confirm({
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
      onOk:()=> {
        console.log('OK');
        memoryUtils.ues={};
        storegeUtils.removeUser()
        this.props.history.replace('/login')
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  getTitle=()=>{//获取动态标题
    let path=this.props.location.pathname;
    let title;
    menuList.forEach(item=>{
      if(item.key===path){
        title=item.title;
      }else if(item.children){
        let cItem=item.children.find(cItem=>cItem.key===path);
        if(cItem){
          title=cItem.title;
        }
      }
    })
    return title
  }
  render() {
    var use = memoryUtils.use;
    return (
      <div style={{ background: '#001529', height: '40px' }}>
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <span style={{ marginLeft: '20px' }}>{this.getTitle()}</span>
          <span style={{ marginLeft: '20px' }}>欢迎： {use.username}</span>
          <span style={{ marginLeft: '20px' }}>当前时间：{formatTime(Date.now())}</span>
          <button onClick={this.showConfirm} style={{ marginLeft: '20px' }}>退出登陆</button>
        </div>
      </div>
    );
  }
}
export default withRouter(Header)