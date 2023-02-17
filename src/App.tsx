import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './pages/About/About';
import Login from './pages/Auth/Login';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home"/>} />
          <Route path="/home" element={ <Home/>} />
          <Route path="/about" element={ <About/>} />
          <Route path="/sign-in" element={ <Login/>} />
          <Route path="/profile" element={ <Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
