import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';

export const SidebarData2 = [
  {
    title: 'Welcome',
    path: '/investor/welcome',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'View Stocks',
    path: '/investor/view',
    icon: <RiIcons.RiAdminFill />,
    cName: 'nav-text'
  },
  {
    title: 'My Stocks',
    path: '/getmystocks',
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
