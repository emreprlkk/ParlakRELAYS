import React, { useState } from 'react';
import './ModernSidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? 'Kapat' : 'Aç'}
      </button>
      <nav className="nav">
        <ul>
           PARLAK RELAYS WEB SİTE
          <li><a href="#configAndSim">Configrasyon & Simülasyon</a></li>
          <li><a href="#blogRelay">Blog-Röleler</a></li>
          <li><a href="#AboutDev">Geliştirici Hakkında</a></li>
          <li><a href="#contact">İletişim</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
