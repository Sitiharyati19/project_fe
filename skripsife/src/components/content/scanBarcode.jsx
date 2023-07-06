import React, { useState } from "react";
import {QrReader} from "react-qr-reader";
// import "./style.css";

export default function Scanreader() {
  const [result, setResult] = useState("No result");
  const [scanResultWebCam, setScanResultWebCam] =  useState('');

  const onScanFile = () => {
    qrRef.current.openImageDialog();
  }
  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result){
        setScanResultWebCam(result);
    }
   }

  return (
    <div>
      <h2 style={{textAlign:"center"}}>QR Code Reader</h2>
      <div className="reader" style={{margin:"20%", marginTop:"20px", width:"30%", height:"30%"}} >
        <QrReader 
        delay={300} 
        onError={handleErrorWebCam}
        onScan={handleScanWebCam}
        style={{ width: '30px', height: "30px" }}
        facingMode="environment" />
      <div className="title">
      <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
      </div>
      </div>
      
    </div>
  );
}