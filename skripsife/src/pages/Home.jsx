import React, { useState, useEffect } from "react";
import { Carousel } from "../components/carousel/carousel";
import Content from "../components/content/content";
import SidebarMahasiswa from "../components/sidebarMahasiswa";
import Sidebar from "../components/sidebar";
import { Card, Row, Col } from 'react-bootstrap';
const Home = () => {

    return (
        <SidebarMahasiswa>
            <Carousel />
            <Content />
        </SidebarMahasiswa>
    )
}

export default Home;