import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd';
import './index.less'
import menuList from './sj'
const { SubMenu } = Menu;
class LeftNav extends Component {
    getMenuNodes = (menuList) => {//根据menu数据生成标签数据
        const path = this.props.location.pathname
        return menuList.map(item => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                const cItem = item.children.find(cItem => cItem.key === path);
                if (cItem) {
                    this.openKey = item.key
                }
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {
                            this.getMenuNodes(item.children)
                        }
                    </SubMenu>
                )
            }
        })
    }

    componentWillMount() {
        this.getMenuNodes = this.getMenuNodes(menuList)
    }

    render() {
        const path = this.props.location.pathname
        return (
            <div className='left_lager'>
                <header className='left_header'>
                    <Link to='/'>
                        hoole,meimie
                        </Link>
                </header>
                <div >
                    <Menu
                        selectedKeys={[path]}
                        defaultOpenKeys={[this.openKey]}
                        mode="inline"
                        theme="dark"
                        
                    >
                        {
                            this.getMenuNodes
                        }
                    </Menu>
                </div>
            </div>
        );
    }
}
export default withRouter(LeftNav)