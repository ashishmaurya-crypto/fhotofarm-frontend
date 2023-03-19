import React from 'react';
import {Outlet} from 'react-router-dom';
import Topbar from './Topbar';
import './style/Layout.scss';
import SideBar from './SideBar';
import { useSelector, useDispatch } from 'react-redux';


export default function Layout() {
  // const navigate = useNavigate();
  const isSideBarOpen = useSelector((state)=> state.sideBar)
  return (
    <div className='layout-container'>
        {isSideBarOpen ? <SideBar/> : null}
        <Topbar/>
        <Outlet/>
    </div>
  )
}
