import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';

export const SidebarData1 = [
  {
    title: 'Welcome',
    path: '/manager/welcome',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Manage Stocks',
    path: '/getstock',
    icon: <FaIcons.FaShoppingCart />,
    cName: 'nav-text'
  },
  {
    title: 'Change password',
    path: '/change-password',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  }
  // {
  //   title: 'Companies',
  //   path: '/companies',
  //   icon: <BiIcons.BiBuildings />,
  //   cName: 'nav-text'
  // },
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
