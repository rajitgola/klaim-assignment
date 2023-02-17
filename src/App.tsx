import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './pages/About/About';
import Login from './pages/Auth/Login';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import 'antd/dist/reset.css';
import Layout, { Content, Footer } from 'antd/es/layout/layout';
import AppHeader from './shared/components/AppHeader/AppHeader';

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <AppHeader/>
          <Content className="site-layout" style={{ padding: '0 50px' }}>
            <Routes>
              <Route path="/" element={<Navigate replace to="/home"/>} />
              <Route path="/home" element={ <Home/>} />
              <Route path="/about" element={ <About/>} />
              <Route path="/sign-in" element={ <Login/>} />
              <Route path="/profile" element={ <Profile/>} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center', color : 'white', background: '#001529' }}> Design ©2023 Created by Rajit</Footer>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
