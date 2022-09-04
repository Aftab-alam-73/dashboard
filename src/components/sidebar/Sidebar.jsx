import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import PortraitIcon from '@mui/icons-material/Portrait';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';
const Sidebar = () => {
  const {dispatch}=useContext(DarkModeContext)

  return (
    <div className='sidebar'>
      <Link to="/" style={{textDecoration:"none"}}>
    <div className="top">
      <span className="logo">Aftab</span>
    </div>
    </Link>
    <hr />
    <div className="center">
      <ul>
       <p className="title">MAIN</p>
        <li><DashboardIcon className='icon'/><span>Dashboard</span></li>
       <p className="title">LIST</p>
        <Link to="/users" style={{textDecoration:'none'}}>
        <li><Person2OutlinedIcon className='icon'/><span>Users</span></li>
        </Link>
        <Link to="/products" style={{textDecoration:"none"}}>
        <li><Inventory2OutlinedIcon className='icon'/><span>Products</span></li>
        </Link>
        <li><ViewStreamOutlinedIcon className='icon'/><span>Order</span></li>
        <li><LocalShippingOutlinedIcon className='icon'/><span>Delivery</span></li>
        <p className="title">USEFUL</p>
        <li><EqualizerOutlinedIcon className='icon'/><span>Starts</span></li>
        <li><NotificationsOutlinedIcon className='icon'/><span>Notification</span></li>
        <p className="title">SERVICE</p>
        <li><SettingsSystemDaydreamOutlinedIcon className='icon'/><span>System Health</span></li>
        <li><DiamondRoundedIcon className='icon'/><span>Logs</span></li>
        <li><SettingsRoundedIcon className='icon'/><span>Setting</span></li>
        <p className="title">USER</p>
        <li><PortraitIcon className='icon'/><span>Profile</span></li>
        <li><ExitToAppRoundedIcon className='icon'/><span>Logout</span></li>
        
      </ul>
    </div>
    <div className="bottom">
      <div className="colorOption"  onClick={() => dispatch({ type: "LIGHT" })}></div>
      <div className="colorOption"  onClick={() => dispatch({ type: "DARK" })}></div>
    </div>
    </div>
  )
}

export default Sidebar
