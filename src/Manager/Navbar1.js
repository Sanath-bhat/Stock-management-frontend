import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { SidebarData1 } from './SidebarData1';
import './Navbar1.css';
import { IconContext } from 'react-icons';
//import Login from './Login';

function Navbar1() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          {/* <Router>
             <li className="nav-item" active>
        <Link className="menu-bars" to="/login">Login</Link>
        
      </li></Router>
      <li>
      <Link className="nav-link" to="/login"><button type="button" className="btn btn-primary btn-small btn-nav">Login</button></Link></li>
       */}
       <li className="logout">
          <Link className="nav-link" to="/"><button type="button" className="btn btn-primary btn-small btn-nav">Logout</button></Link></li>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
             
           
            {SidebarData1.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
               
                </li>
              );
            })}
          </ul>
        </nav>
       
      </IconContext.Provider>
    </>
  );
}


export default Navbar1;
