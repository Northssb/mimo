import React from "react";
import { Button, Layout, Avatar, Dropdown } from "antd";
import "./index.css";
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { collapseMenu } from '../../store/reducer/tab';

const { Header } = Layout;

const CommonHeader = ({ collapse }) => {
    //退出操作
    const logout = () => {

    }

    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    个人中心
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a onClick={() => logout()} target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    退出
                </a>
            ),
        },
    ];
    //创建dispatch
    const dispatch = useDispatch();

    //点击展开收起按钮
    const setCollapse = () => {
        dispatch(collapseMenu());
    }
    return (
        <Header className="header-container">
            <Button
                onClick={setCollapse}
                icon={<MenuUnfoldOutlined />}
                type='text'
                style={{
                    fontSize: '16px',
                    width: '64px',
                    height: '32px',
                    backgroundColor: '#fff',
                }}>
            </Button>
            <Dropdown menu={{ items }}>
                <Avatar size={36} src={<img src={require('../../assets/image/Avatar.jpeg')}></img>} />
            </Dropdown>
        </Header>
    )
}

export default CommonHeader;