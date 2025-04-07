import React from 'react';
import * as icon from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import MenuConfig from "../../config/index";


const { Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const iconToElement = (name) => React.createElement(icon[name]);

const items = MenuConfig.map((item) => {
    return {
        key: item.path,
        icon: iconToElement(item.icon),
        label: item.label,
        children: item.children ? item.children.map((child) => {
            return {
                key: child.path,
                label: child.label,
            }
        }) : null
    }
});

//动态获取icon


// const items = [
//     getItem('Option 1', '1', <PieChartOutlined />),
//     getItem('Option 2', '2', <DesktopOutlined />),
//     getItem('User', 'sub1', <UserOutlined />, [
//         getItem('Tom', '3'),
//         getItem('Bill', '4'),
//         getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
// ];


const CommonAside = ({ collapse }) => {
    console.log(collapse, 'commonAside');
    return (
        <Sider collapsible collapsed={collapse} >
            <h3 className="app-name" style={{ color: 'white' }}>{collapse ? '后台' : '后台管理系统'}</h3>
            <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                defaultSelectedKeys={['1']}
                mode="inline"
                items={items}
                style={{ height: '100%' }} />
        </Sider>
    )
}

export default CommonAside;