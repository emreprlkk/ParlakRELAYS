import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt  } from 'react-icons/fa';
import { SiAboutdotme } from "react-icons/si";
import { FiEdit3 } from "react-icons/fi";
//SiAboutdotme
import './Sidebar.css'; // Stil dosyasını da eklemeyi unutmayın

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="toggle-btn" onClick={toggleSidebar}>
                {isOpen ? '<<' : '>>'}
            </div>
            <div className="sidebar-content">
                <div className="sidebar-header">
                    <h2>PARLAK RELAYS </h2>
                </div>
                <ul className="sidebar-menu">
                    <li>
                        <FaHome />
                        {isOpen && <span>RELAY CONFİGRATİON</span>}
                    </li>
                    <li>
                        <FaUser />
                        {isOpen && <span>SİMÜLASYON</span>}
                    </li>
                    <li>
                        <SiAboutdotme />
                        {isOpen && <span>HAKKINDA</span>}
                    </li>
                    <li>
                        <FiEdit3  />
                        {isOpen && <span>BLOG</span>}
                    </li>
                </ul>
             
            </div>
            <div style={{marginTop:20}} > <p1> Developer By Emre PARLAK </p1></div>
        </div>
        
    );
};

export default Sidebar;
