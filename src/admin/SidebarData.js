import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FcIcons from 'react-icons/fc';
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';

// import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Welcome',
    path: '/admin/welcome',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Company',
    path: '/getcompany',
    icon: <FaIcons.FaBuilding />,
    cName: 'nav-text'
  },
  
  {
    title: 'Manager',
    path: '/getmanager',
    icon: <FcIcons.FcManager />,
    cName: 'nav-text'
    
  },
  {
    title: 'Users',
    path: '/admin/users',
    icon: <ImIcons.ImUsers />,
    cName: 'nav-text'
  }
  // {
  //   title: 'Investor',
  //   path: '/investor',
  //   icon: <IoIcons.IoIosPeople />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // }
];
