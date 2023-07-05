import React from "react";
import SidebarAdmin from "../components/sidebarAdmin";
import { Carousel } from "../components/carousel/carousel";
import Content from "../components/content/content";

const HomeAdmin = () => {
    return (
        <SidebarAdmin>
            <Carousel />
            <Content />
        </SidebarAdmin>
    )
}

export default HomeAdmin;