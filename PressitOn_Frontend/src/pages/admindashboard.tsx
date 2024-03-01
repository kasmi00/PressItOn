import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    ShopOutlined,
    DropboxOutlined,
    SolutionOutlined,
    PlusOutlined,
    EditOutlined,
} from '@ant-design/icons';
import './admindashboard.css';
import OrderHistory from './ordertracking';
import ProductAddForm from './productaddtable';
import ProductUpdate from './productlisttable';
import UpdatePro from "./editproducttable.tsx";



const { Content, Sider } = Layout;



const AdminDashboard: React.FC = () => {
    const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);


    const handleMenuClick = (key: string) => {
        setActiveMenuItem(key);
    };


    return (
        <>
            <header className="header-section">
                <div className="container-fluid">
                    <div className="inner-header">
                        <div className="logo">
                            <a href="./index.html">
                                <img src="img/logo.png" alt="" />
                            </a>
                        </div>


                        <nav className="main-menu mobile-menu">
                            <ul>
                                <li>
                                    <a href="/dashboard">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/shop">Shop</a>
                                </li>
                                <li>
                                    <a className="active" href="/admin">Admin</a>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        <Layout style={{ minHeight: '100vh' }}>
            <Sider breakpoint="lg" collapsedWidth="0">
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    /*@ts-ignore*/
                    onClick={(e) => handleMenuClick(e.key as string)}
                >
                    <Menu.SubMenu key="3" icon={<ShopOutlined />} title="Products">
                        <Menu.Item key="3.1" icon={<PlusOutlined />}>
                            Add Product
                        </Menu.Item>
                        <Menu.Item key="3.2" icon={<EditOutlined />}>
                           Delete Product
                        </Menu.Item>
                        <Menu.Item key="3.3" icon={<EditOutlined />}>
                            Update Product
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="4" icon={<DropboxOutlined />} title="Orders">
                        <Menu.Item key="4.1" icon={<SolutionOutlined />}>
                            Order History
                        </Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Sider>
            <Layout>
                <Content style={{ margin: '16px' }}>
                    <div className="site-layout-background">

                        {activeMenuItem === '3.1' && <ProductAddForm /> }
                        {activeMenuItem === '3.2' && <ProductUpdate /> }
                        {activeMenuItem === '3.3' && <UpdatePro /> }
                        {activeMenuItem === '4.1' && <OrderHistory />}
                    </div>
                </Content>
            </Layout>
        </Layout>
        </>
    );
};

export default AdminDashboard;
