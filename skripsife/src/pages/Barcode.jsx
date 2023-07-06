import{
    Button,
    Card,
    Form,Container
}  from 'react-bootstrap';
import QRCode from "react-qr-code";
import React, { useState, useEffect } from "react";
import SidebarMahasiswa from '../components/sidebarMahasiswa';
import QrCode from '../components/content/qrcode';
import { getListUser } from "../redux/actions/getUser";
import { useSelector, useDispatch } from 'react-redux';

const Qrbarcode = () => {
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [userData, setUserData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    // const {
    //     userResult,
    //   } = useSelector((state) => state.getListUserReducer);

    //   useEffect(() => {
    //     dispatch(getListUser());
    //   }, []);
    
    //   useEffect(() => {
    //     if (userResult) {
    //       setUserData(userResult);
    //     }
    //   }, [userResult]);

    //   console.log(userData)

    return (
        <SidebarMahasiswa>
            <QrCode />
        </SidebarMahasiswa>
    )
}

export default Qrbarcode;