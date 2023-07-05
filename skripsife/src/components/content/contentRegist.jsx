import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate, Navigate, } from "react-router-dom";
import axios from "axios";
import { Card, Row, Col, Button } from 'react-bootstrap';
import itemcard from '../../images/Person.png';
import '../../css/card.css';
import Table from 'react-bootstrap';

function ContentRegist() {
    // const navigate = useNavigate();
    const { id } = useParams();
    // const [bookUser, setBookUser] = useState([]);
    const [book, setBook] = useState([]);
    const [data, setData] = useState({});
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    console.log(book)
    const Cardcontent1 = {
        width: '70px',
        height: '70px',
        marginTop: "10px",
        marginLeft:"35px"
    }

    const colourButton = {
        backgroundColor: '#9fa8da',
        borderRadius: '8px',
        border: '1px solid #9fa8da',
        marginTop:"3px",
        width:"40px",
        height:"30px",
        marginLeft:"15px",
        fontSize:"12px",
        fontWeight:"bold"
      }

      useEffect(() => {

        const getAdmins = async () => {

            try {
                const token = localStorage.getItem("token");
                const responseUsers = await axios.get(`http://localhost:3000/api/admin/who-am-i`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                const dataUsers = await responseUsers.data;
                console.log(dataUsers)

                setData(dataUsers)
                console.log(setData)

            } catch (err) {
                setIsLoggedIn(false);
            };

        }

        const bookData = async () => {
            const token = localStorage.getItem("token");
            const response = await axios.get(`http://localhost:3000/api/bookings`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.data.data.data);

            const data = await response.data.data.data;
            setBook(data);
            console.log(data)
        };

        bookData();
        getAdmins();
    }, [id]);


    return  isLoggedIn ?(
        <>
                <div className='container' style={{ border: '1px solid #9fa8da',height:"100%", marginLeft:"50px"}}>
                    <div className='colum1'>

                    <h2 style={{marginLeft:"320px", marginTop:"50px"}}>MAHASISWA PENDAFTARAN WISUDA</h2>
                    <table class="table" style={{marginLeft:"50px", marginTop:"50px"}}>
                        <thead class="table-dark" style={{backgroundColor:"#9fa8da",color:"#212121"}}>
                            <tr>
                                <th style={{paddingLeft:"40px",paddingRight:"40px",fontSize:"14px"}}>Photo Profil</th>
                                <th style={{textAlign:"center",paddingLeft:"40px",paddingRight:"40px",fontSize:"14px"}}>Nama</th>
                                <th style={{textAlign:"center",paddingLeft:"40px",paddingRight:"40px",fontSize:"14px"}}>NIM</th>
                                <th style={{textAlign:"center",paddingLeft:"40px",paddingRight:"40px",fontSize:"14px"}}>Prodi</th>
                                <th style={{textAlign:"center",paddingLeft:"40px",paddingRight:"40px",fontSize:"14px"}}>Tahun Masuk</th>
                                <th style={{textAlign:"center",paddingLeft:"40px",paddingRight:"40px",fontSize:"14px"}}>Pembayaran</th>
                                <th style={{textAlign:"center",paddingLeft:"40px",paddingRight:"40px",fontSize:"14px"}}>Nomor Kursi</th>
                            </tr>
                        </thead>
                        {book ? (
                        <tbody style={{backgroundColor:"#e3f2fd"}} >
                            {book.map((book) =>
                                book.id === book.id && book.is_done === false ? (
                            <tr >
                            <td><img src={itemcard} alt="" style={Cardcontent1}/></td>
                            <td style={{textAlign:"center"}}>{book.mahasiswa.name}</td>
                            <td style={{textAlign:"center"}}>{book.mahasiswa.nim}</td>
                            <td style={{textAlign:"center"}}>{book.prodi}</td>
                            <td style={{textAlign:"center"}}>{book.tahun_masuk}</td>
                            <td ><img src={itemcard} alt="" style={Cardcontent1}/></td>
                            <td style={{textAlign:"center"}}>{book.seat_number}</td>
                            {/* <td style={{textAlign:"center"}}>
                                <Button style={colourButton}>Tolak</Button>
                                <Button style={colourButton}>Terima</Button>
                                </td> */}
                            </tr>
                                   ) : (""))}
                        </tbody>
                    ) : ("")}
                    </table>
                    </div>
                </div>
        </>
     ) : (
        <Navigate to="/admin" replace />);;
}

export default ContentRegist;