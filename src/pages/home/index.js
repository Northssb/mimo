import { Row, Col, Card, Table } from "antd";
import React, { useEffect, useState} from "react";
import * as icon from '@ant-design/icons';
import './home.css';
import { getData } from '../../api'

const columns = [
    {
        title: '课程',
        dataIndex:'name'
    },
    {
        title:'今天购买',
        dataIndex:'todayBuy'
    },
    {
        title:'本月购买',
        dataIndex:'monthBuy'
    },
    {
        title:'总购买',
        dataIndex:'totalBuy'
    }
]
//订单统计的数量
const countData = [
    {
        "name":"今日支付订单",
        "value":1234,
        "icon":"CheckCircleOutlined",
        'color':"#2ec7c9"
    },
    {
        "name":"今日收藏订单",
        "value":1333,
        "icon":"LikeOutlined",
        'color':"#ffb980"
    },
    {
        "name":"今日未支付的订单",
        "value":1234,
        "icon":"CloseCircleOutlined",
        'color':"#5ablef"
    },
    {
        "name":"本月支付的订单",
        "value":1234,
        "icon":"CheckCircleOutlined",
        'color':"#2ec7c9"
    },
    {
        "name":"本月收藏的订单",
        "value":1234,
        "icon":"LikeOutlined",
        'color':"#ffb980"
    },
    {
        "name":"本月未支付的订单",
        "value":1234,
        "icon":"CloseCircleOutlined",
        'color':"#5ablef"
    }
]
//动态获取图标
const iconToElement = (name) => React.createElement(icon[name]);


const Home = () => {
    const userImg = require('../../assets/image/Avatar.jpeg');
    useEffect(() => {
        getData().then(({data}) => {
            console.log(data,"data")
            const {tableData} = data.data
            setTableData(tableData)
            console.log(tableData,"tableData")
        })
    }, [])
    const [tableData, setTableData] = useState([])
    return (
       <Row className="home">
        <Col span={8}>
            <div>
                <Card hoverable>
                    <div className="user">
                        <img src={userImg} alt="home" />
                        <div className="userinfo">
                            <p className="name">Admin</p>
                            <p className="access">Super Admin</p>
                        </div>
                    </div>
                    <div className="login-info">
                        <p>上次登录时间：<span>2025-03-15 6:17:00</span></p>
                        <p>上次登录地点：<span>宁波</span></p>
                    </div>
                </Card>
                <Card>
                <Table columns={columns} rowKey="name" dataSource={tableData} pagination={false}    />

                </Card>
            </div>
        </Col>
        <Col span={16}>
            <div className="num">
                {
                    countData.map((item, index) => {
                        return(
                            <Card key={index}>
                                <div className="icon-box">
                                    {iconToElement(item.icon)}
                                </div>
                                <div className="detail">
                                    <p className="num">{item.value}</p>
                                    <p className="txt">{item.name}</p>
                                </div>
                            </Card>
                        )
                    })
                }
            </div>
        </Col>
       </Row>
    )
}

export default Home;