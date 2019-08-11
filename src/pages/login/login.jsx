// 登陆的路由界面
import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import './login.less'
// import {reqLogin,reqAdduser} from '../../api'
import memoryUtils from '../../utils/memoryUtils'
import storegeUtils from '../../utils/storegeUtils'

class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
        // const getValues=this.props.form.getFieldsValue();
        // console.log(getValues)
        this.props.form.validateFields((err, values) => {//对所有表单验证
            if (!err) {//这里验证通过，可发ajax
                const {username,password}=values;
                // reqLogin(username,password).then(Response=>{
                //     console.log('成功',Response)

                //跳转到管理页面（不需要回退到登陆）
                if(values.username==='tl'){
                    this.props.history.replace('/')
                    storegeUtils.saveUser(values)
                    console.log(storegeUtils.getUser())
                    memoryUtils.use=values;
                  
                }else{
                    alert()
                }
                
                // }).catch(error=>{
                //     console.log('失败',error)
                // });
            }
        })

        // this.props.form.validateFields(asyac,(err, values) => {//请求异步加载
        //     if (!err) {//这里验证通过，可发ajax
        //         const {username,password}=values;
        //         const response=awiat reqLogin(username,password)
        //     }
        // })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <header className="login_header">我的第一个 MMMM </header>
                <div className="login_div">
                    <h1>mm登陆</h1>
                    <div className="login_from">
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [
                                        { required: true, message: '用户名不能为空!' },
                                        { max: 12, message: '用户名不能超过12位!' },
                                        { min: 2, message: '用户名不能少于4位!' },
                                    ],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in >> 寻找刺激
                                 </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
const LoginForm = Form.create()(Login);
export default LoginForm