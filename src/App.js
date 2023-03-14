import Navbar from './components/Navbar/Index';

import { Outlet } from 'react-router-dom';

import './App.css';
import { Home } from './pages/Home';

function App() {
  return (
    
    <div >
      <Outlet />    
    </div>
  )
}

export default App;
