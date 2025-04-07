import React from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme } from 'antd';
import CommonAside from "../components/commonAside";
import CommonHeader from "../components/commonHeader";
import { useSelector } from 'react-redux';





const { Header, Content, Footer } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const Main = () => {
    // const [collapsed, setCollapsed] ==== useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    //获取展开收起的状态
    const collapse = useSelector((state) => state.tab.isCollapsed);


    
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <CommonAside collapse={collapse} />
            <Layout>
                <CommonHeader collapse={collapse} />
                <Content style={{ margin: '0 16px' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Main;