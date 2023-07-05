import{
    Button,
    Card,
    Form,Container,Dropdown,DropdownButton
}  from 'react-bootstrap';
import "../css/style.css";
import card2 from "../images/logo-main.svg";
import SidebarMahasiswa from '../components/sidebarMahasiswa';
import QRCode from 'qrcode';
import { useRef, useEffect, useState } from "react";
import { Link, useNavigate, Navigate, } from "react-router-dom";
import axios from "axios";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';


function Pendaftaran() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [data, setData] = useState([]);
  const mahasiswa_nameField = useRef("");
  const mahasiswa_nimField = useRef("");
  const photo_profilField = useRef("");
  const photo_transferField = useRef("");
  const prodiField = useRef("");
  const tahun_masukField = useRef("");
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const qrRef = useRef(null);

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: "",
  });

  const [successResponse, setSuccessResponse] = useState({
    isSuccess: false,
    message: "",
  });
  const colourButton = {
    backgroundColor: '#9fa8da',
    borderRadius: '8px',
    border: '1px solid #9fa8da',
    marginTop:"30px",
    width:"100px",
    height:"30px",
    marginLeft:"26%",
    fontSize:"20px",
    marginRight: "40px",
  }
  
  const styleLabel = {
    width:"200px",
    height:"20px",
    borderRadius: '8px',
    border: '1px solid #9fa8da',
  }
  const styleText = {
    marginLeft: "30px"
  }
  const styleLink = {
    textDecoration: 'none',
    color: '#5c6bc0',
    fontWeight: 'bold',
  }
  const styleForm = {
    marginTop: "160px",
    marginLeft: "-90vh",
  }

  const styleHeader = {
    marginTop: "90px",
    marginLeft: "40vh",
  }

  

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

      setData(dataUsers)
    } catch (err) {
      setIsLoggedIn(false);
    }
  }

  const generateQrCode = async () => {
    try {
          const response = await QRCode.toDataURL(text);
          setImageUrl(response);
    }catch (error) {
      console.log(error);
    }
  }

  const onCreate = async (e, is_done) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const userToCreatePayload = {
        photo_profil: photo_profilField.current.value,
        photo_transfer: photo_transferField.current.value,
        prodi: prodiField.current.value,
        tahun_masuk: tahun_masukField.current.value,
        is_done
      };
      const createRequest = await axios.post(
        `http://localhost:3000/api/mahasiswa/booking`,
        userToCreatePayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(createRequest)

      const successResponse = createRequest.data.message;
      setSuccessResponse({
        isSuccess: true,
        message: successResponse,
      });

    } catch (err) {
      const response = err.response.data;
      setErrorResponse({
        isError: true,
        message: response.message,
      });
    }
  };
  
  useEffect(() => {
    getUsers();
  }, [])

  return isLoggedIn ?(
    <SidebarMahasiswa>
    <Container style={{ border: '1px solid #9fa8da',height:"145%", marginLeft:"50px"}}>
    <div className="header" style={styleHeader}>
         <h2>PENDAFTARAN WISUDA STMIK JAYAKARTA</h2>
      </div>
    <Form onSubmit={onCreate} style={styleForm}>
      <Form.Group className="mb-3" controlId="formBasicPhotoProfil">
        <Form.Label style={styleText}><b>Photo</b></Form.Label>
        <Form.Control 
        className='form-photo-profil' 
        style={styleLabel} 
        type="file" 
        ref={photo_profilField}
        placeholder="img_submit.gif" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicProdi">
        <Form.Label style={styleText}><b>Prodi</b></Form.Label>
        <Form.Group className="form-prodi" style={{marginLeft:"36vh", marginTop:"-1vh"}} >
              <select
                className="form-select"
                ref={prodiField}
              >
                <option hidden>Pilih Salah Satu</option>
                <option value="Manajemen Informatika">D3 - Manajemen Informatika</option>
                <option value="Sistem Informasi">S1 - Sistem Informasi</option>
                <option value="Teknik Informatika">S1 - Teknik Informatika</option>
              </select>
            </Form.Group>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTahun">
        <Form.Label style={styleText}><b>Tahun Masuk</b></Form.Label>
        <Form.Control 
        className='form-tahun' 
        style={styleLabel} 
        type="text" 
        ref={tahun_masukField}
        placeholder="2019" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTransfer">
        <Form.Label style={styleText}><b>Bukti Pembayaran</b></Form.Label>
        <Form.Control 
        className='form-transfer' 
        style={styleLabel} 
        type="file" 
        ref={photo_transferField}
        placeholder="img_submit.gif" />
      </Form.Group>

      <Button onClick={(e) => onCreate(e, false)}  style={colourButton} variant="primary" type="submit">
      <b>Submit</b>
      </Button>
      <div className='qrcode'>
          {imageUrl ? (
            <a href={imageUrl} download>
            <img src={imageUrl} alt="img" style={{marginTop:"-500px", width:"200px",marginLeft:"100vh"}}/>
          </a>) : null}
      </div>
      
    </Form>
    </Container>
    </SidebarMahasiswa>
  ) : (
    <Navigate to="/login" replace />);;
}

export default Pendaftaran;