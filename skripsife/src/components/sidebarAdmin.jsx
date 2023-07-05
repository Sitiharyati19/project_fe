import React, { useState } from "react";
import {
    FaHome,
    FaUserGraduate,
    FaGraduationCap,
    FaBars,
} from "react-icons/fa";
import {CgLogOut} from "react-icons/cg";
import "../css/sidebar.css";
import { BiQrScan } from "react-icons/bi";
import logo from "../images/logo-main-2.png";
import { NavLink } from "react-router-dom";

const SidebarAdmin = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/homeAdmin",
            name: "Home",
            icon: <FaHome />
        },
        {
            path: "/registMahasiswa",
            name: "Registrasi Mahasiswa",
            icon: <FaGraduationCap />
        },
        {
            path: "/scan",
            name: "Scan",
            icon: <BiQrScan />
        },
        {
            path: "/absensi",
            name: "Kehadiran Mahasiswa",
            icon: <FaUserGraduate />
        },
        {
            path: "/admin",
            name: "Logout",
            icon: <CgLogOut/>
        },
    ]
 
    return (
        <div className="container">
            <div className="bar-fixed">
            <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <img style={{ display: isOpen ? "block" : "none" }} className="logo"
                        src={logo}
                        alt=""
                    />
                    {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Jayakarta</h1> */}
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            </div>
            
            <main>{children}</main>
        </div>
    )
}

export default SidebarAdmin;