import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BiDetail } from "react-icons/bi";
import { GiSittingDog } from "react-icons/gi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi2";
import backgroundImage from "/images/wallpaper.jpg";
import "./RescuerHome.css"

export const RescuerHome = () => {
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh',
  };
  return (
    <>
    <header style={headerStyle} >
      <div className="rh_container">
        <nav className="rh_main_navv">
          <ul>
            <li>
              <NavLink to="/r_home/userinfo"><HiOutlineUsers />List of Rescuers</NavLink>
            </li>
            <li>
              <NavLink to="/r_home/userdata"><GiSittingDog />Needs Rescue</NavLink>
            </li>
            <li>
              <NavLink to="/r_home/usercontact"><BiDetail />Contact</NavLink>
            </li>
            <li>
              <NavLink to="/r_home/response"><BiDetail />Response</NavLink>
            </li>
            <li>
              <NavLink to="/"><RiLogoutBoxLine />Logout</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </header>
    </>
  );
};