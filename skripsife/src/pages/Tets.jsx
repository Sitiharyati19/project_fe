import React from "react";
import SidebarMahasiswa from "../components/sidebarMahasiswa";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

const TestBarcode = () => {
    // const [imageUrl, setImageUrl] = useState('');
    // const [text, setText] = useState('');

    // ReactDOM.render(<QRCode value="hey" />, document.getElementById("Container"));

    return (
        <SidebarMahasiswa>
            <h2 style={{textAlign:"center"}}>QR Code Reader</h2>
        </SidebarMahasiswa>
    )
}

export default TestBarcode;