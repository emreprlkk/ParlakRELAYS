import React, { useState } from 'react';
import './ModernSidebar.css';
import HomeIcon  from '@mui/icons-material/Home';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import LogoutIcon from '@mui/icons-material/Logout';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? '         Kapat' : 'Aç'}
      </button>
      <nav className="nav">
        <ul>
        <h1>HOŞGELDİNİZ </h1>
          <li><a href="/ConfigAndSim"><HomeIcon fontSize="large"/>Relay Configrasyon & Simülasyon</a></li>
          <li><a href="/Blog"><BorderColorIcon/>Blog-Röleler</a></li>
          <li><a href="/DevAbout"><InfoIcon/> Geliştirici Hakkında</a></li>
          <li><a href="#İletişimBilgileri"><CallIcon/>İletişim</a></li>
          <li><a href="/"><LogoutIcon />Çıkış</a></li>
          <div className='DeveloperText'>Developer By Emre PARLAK </div>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
