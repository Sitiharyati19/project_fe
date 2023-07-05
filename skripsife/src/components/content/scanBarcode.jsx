import React, { useState } from "react";
import {QrReader} from "react-qr-reader";
// import "./style.css";

export default function Scanreader() {
  const [result, setResult] = useState("No result");
  let handleScan = data => {
    if (data) {
      setResult(data);
    }
  };

  let handleError = err => {
    // alert(err);
  };
    // const [scanResultFile, setScanResultFile] = useState('');
    // const [scanResultWebCam, setScanResultWebCam] =  useState('');
    // const qrRef = useRef(null);
    
    // const handleErrorFile = (error) => {
    //     console.log(error);
    //   }
    //   const handleScanFile = (result) => {
    //       if (result) {
    //           setScanResultFile(result);
    //       }
    //   }
    //   const onScanFile = () => {
    //     qrRef.current.openImageDialog();
    //   }
    //   const handleErrorWebCam = (error) => {
    //     console.log(error);
    //   }
    //   const handleScanWebCam = (result) => {
    //     if (result){
    //         setScanResultWebCam(result);
    //     }
    //    }
  return (
    <div>
      <h2 style={{textAlign:"center"}}>QR Code Reader</h2>
      <div className="reader" style={{margin:"20%", marginTop:"20px", width:"30%", height:"30%"}} >
        <QrReader 
        delay={300} 
        onError={handleError} 
        onScan={handleScan} 
        style={{ width: '30px', height: "30px" }}
        facingMode="environment" />
      <div className="title">
      <h3>Scanned By WebCam Code: {result}</h3>
      </div>
      </div>
      
    </div>
  );
}