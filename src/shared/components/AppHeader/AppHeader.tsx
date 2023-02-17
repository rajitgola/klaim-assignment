import { Menu } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IMenuItem } from '../../models';

const AppHeader = () => {

  const DEFAULT_MENU_LIST : IMenuItem[]  = [
    {
      title : "About",
      route : "/about"
    },
    {
      title : "Sign in",
      route : "/sign-in"
    }
  ];
  const [menuItems, setMenuItems] = useState<IMenuItem[]>(DEFAULT_MENU_LIST);
  const navigate = useNavigate();

  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState(menuItems.find(_item => location.pathname.startsWith(_item.route))?.route || "")

  useEffect(() => {
    setSelectedKey(menuItems.find(_item => location.pathname.startsWith(_item.route))?.route || "")
  }, [location]);


  return (
    <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
      <div
        style={{
          float: 'left',
          width: 100,
          margin: '0 24px 0 0',
          color : 'white',
          cursor : 'pointer',
          background: 'rgba(255, 255, 255, 0.2)',
        }}
        onClick={() => navigate("/")}>
          Klaim
      </div>
      <Menu
        theme="dark"
        selectedKeys={[selectedKey]}
        mode="horizontal">
          { menuItems.map((item, index) => {
            return (
                <>
                  <Menu.Item key={item.route} onClick={() => navigate(item.route)}>{item.title}</Menu.Item>
                </>
              )
            })
          }
      </Menu>
    </Header>
  )
}

export default AppHeader