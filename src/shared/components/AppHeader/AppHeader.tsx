import { Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { clearUserToken, getUserToken, logOutUser } from '../../../services';
import { IAPIResponse, IMenuItem } from '../../models';

const AppHeader = () => {

  const doLogout = () => {
    // clearUserToken(); // for local testing
    setToken(null);
    clearUserToken();
    logOutUser().then((res : IAPIResponse<{}>) => {
      clearUserToken();
    });
  }

  const DEFAULT_MENU_LIST_PUBLIC : IMenuItem[]  = [
    {
      title : "About",
      route : "/about",
      actionMethod : null
    },
    {
      title : "Sign in",
      route : "/sign-in",
      actionMethod : null
    }
  ];

  const DEFAULT_MENU_LIST_PRIVATE : IMenuItem[]  = [
    {
      title : "About",
      route : "/about",
      actionMethod : null
    },
    {
      title : "Sign Out",
      route : "/sign-out",
      actionMethod : doLogout
    },
    {
      title : "Profile",
      route : "/profile",
      actionMethod : null
    }
  ];

  const [menuItems, setMenuItems] = useState<IMenuItem[]>(DEFAULT_MENU_LIST_PUBLIC);
  const navigate = useNavigate();

  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState(menuItems.find(_item => location.pathname.startsWith(_item.route))?.route || "")

  useEffect(() => {
    setToken(getUserToken());
    setSelectedKey(menuItems.find(_item => location.pathname.startsWith(_item.route))?.route || "")
  }, [location]);

  const [token, setToken] = useState<any>(getUserToken());

  useEffect(() => {
    token && setMenuItems(DEFAULT_MENU_LIST_PRIVATE);
    !token && setMenuItems(DEFAULT_MENU_LIST_PUBLIC);
  }, [token]);  

  const onMenuAction = (menuItem : IMenuItem) => {
    !menuItem.actionMethod && navigate(menuItem.route);
    menuItem.actionMethod && menuItem.actionMethod()
  }

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
                  <Menu.Item key={item.route} onClick={() => onMenuAction(item)}>{item.title}</Menu.Item>
                </>
              )
            })
          }
      </Menu>
    </Header>
  )
}

export default AppHeader