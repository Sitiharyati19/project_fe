import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate, Navigate, } from "react-router-dom";
import axios from "axios";
import { Card, Row, Col, Button } from 'react-bootstrap';
import itemcard from '../../images/Person.png';
import '../../css/qrcode.css';
import QRCode from 'react-qr-code';

function QrCode() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [data, setData] = useState({});
    const [userData, setUserData] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    // const [imageUrl, setImageUrl] = useState('');
    // const [text, setText] = useState('');

    // console.log(bookUser)
    console.log(user)
    console.log(data.mahasiswa)
    console.log(userData)
    
    const cardContent = {
        display :"flex",
        backgroundColor : "#e8eaf6",
        width: "800px",
        height: "450px",
        marginLeft: "180px",
        marginRight: "100px",
        marginTop: "40px",
        borderRadius: '8px',
        border: '3px solid #9fa8da'
    }

    const cardTitle = {
        fontSize: "15px",
        fontWeight: 'bold',
        color: 'black',
        marginLeft: "20px",
        marginTop: "10px"
    }

    const colourButton = {
        backgroundColor: '#9fa8da',
        borderRadius: '8px',
        border: '1px solid #9fa8da',
        marginTop:"-20px",
        width:"150px",
        height:"30px",
        marginLeft:"82vh",
        fontWeight:"bold",
        fontSize:"14px",
        marginRight: "40px",
      }

    const Cardcontent1 = {
        width: '200px',
        height: '250px',
        marginLeft: "40px",
        marginTop: "50px",
    }

  useEffect(() => {
        const getUsers = async () => {

            try {
                const token = localStorage.getItem("token");
                const responseUsers = await axios.get(`http://localhost:3000/api/mahasiswa/who-am-i`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                const dataUsers = await responseUsers.data;
                console.log(dataUsers)

                setUser(dataUsers)

            } catch (err) {
                setIsLoggedIn(false);
            };
        }

        // const generateQrCode = async () => {
        //     try {
        //           const response = await QRCode.toDataURL(text);
        //           setImageUrl(response);
        //     }catch (error) {
        //       console.log(error);
        //     }
        //   }

        getUsers();
        
      
    }, [id]);

    const getData = async () => {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://localhost:3000/api/booking/1`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data.data.mahasiswa);

        const data = await response.data.data;
        const userData = await response.data.data.mahasiswa
        setData(data);
        setUserData(userData.data);
        console.log(data)
        
    };

    getData();

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return isLoggedIn ? (
        <>
                <div className='container' style={{ border: '1px solid #9fa8da',height:"93vh",marginLeft:"50px"}}>
                    <div className='colum1'>
                    <Col xs={1} md={3}>
                        <Card style={cardContent}>
                            <Card.Body>
                                <Row>
                                <div>
                                <h2 style={{marginLeft:"45vh", marginTop:"50px"}}>UNDANGAN WISUDA</h2>
                                </div>
                                    <div className='left'>
                                        <Col xs={6}>
                                            <Card.Img style={Cardcontent1} variant="top" src={itemcard} />
                                        </Col>
                                    </div>
        
                                    <div className='mid'>
                    
                                        <Col xs={6}>
                                            <Card.Text style={{ color: 'black', marginLeft: '20px', fontSize: '30px',marginTop:"10px" }}>{data.name}</Card.Text>
                                            <Card.Text style={{ color: 'black', marginLeft: '20px', fontSize: '30px',marginTop:"20px" }}>{data.nim}</Card.Text>
                                            <Card.Text style={{ marginLeft: '20px', fontSize: '30px',marginTop:"20px", color: "black"}}>{data.prodi}</Card.Text>
                                            <Card.Text style={{ color: 'black', marginLeft: '20px', fontSize: '30px',marginTop:"20px" }}>{data.seat_number}</Card.Text>
                                            <Card.Text style={{ color: 'black', marginLeft: '20px', fontSize: '30px',marginTop:"20px" }}>{data.tahun_masuk}</Card.Text>
                                        </Col>
                                        
                                    </div> 
                                    
                                    {/* <div className='right'>
                                        <Col xs={6}>
                                        {imageUrl ? (
                                        <a href={imageUrl} download>
                                        <img src={imageUrl} alt="img" style={{marginTop:"-500px", width:"200px",marginLeft:"82vh"}}/>
                                        </a>) : null}
                                        <input type="text" onChange={(e) => setText(e.target.value)}></input>
                                            <Button style={colourButton} onClick={() => generateQrCode()}>Create Your QR Code</Button>
                                        </Col>
                                    </div> */}
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    </div>
                </div>
        </>
) : (
    <Navigate to="/login" replace />);;
}

export default QrCode;