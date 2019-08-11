// 后台的路由界面
import React, { Component } from 'react'
import memoryUtils from '../../utils/memoryUtils'
import { Redirect ,Route,Switch} from 'react-router-dom'
import { Layout } from 'antd';
import Header from '../../components/header'
import LeftNav from '../../components/left-nav'

import Charts from '../charts/charts'
import Category from '../category/category'
import Home from '../home/home'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'

const { Footer, Sider, Content } = Layout;
export default class Admin extends Component {
  render() {
    var use = memoryUtils.use;
    console.log(use)
    if (!use || !use.username) {
      return <Redirect to='/login' />//没有用户则踢出到login
    }
    return (
      //  {memoryUtils.use.username}
      <Layout style={{ width: '100%', height: '100%' }}>
        <Sider>
          <LeftNav />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Switch>
              <Route path='/home' component={Home}></Route>
              <Route path='/charts' component={Charts}></Route>
              <Route path='/category' component={Category}></Route>
              <Route path='/product' component={Product}></Route>
              <Route path='/role' component={Role}></Route>
              <Route path='/user' component={User}></Route>
              <Redirect to='/home'/>
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }

}