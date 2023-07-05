import React, { useState } from "react";
import {
    FaBars,
    FaRegListAlt,
    FaHome,
} from "react-icons/fa";
import {RiBarcodeBoxLine} from "react-icons/ri";
import {CgLogOut} from "react-icons/cg";
import "../css/home.css";
import { BiQrScan } from "react-icons/bi";
import logo from "../images/logo-main-2.png";
import { NavLink } from "react-router-dom";

const sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/home",
            name: "Home",
            icon: <FaHome />
        },
        {
            path: "/pendaftaran",
            name: "Pendaftaran",
            icon: <FaRegListAlt />
        },
        {
            path: `/barcode`,
            name: "QR Code",
            icon: <RiBarcodeBoxLine />
        },
        {
            path: "/login",
            name: "Logout",
            icon: <CgLogOut/>
        }
    ]
 
    return (
        <div className="container">
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
            
            <main>{children}</main>
        </div>
    )
}

export default sidebar;