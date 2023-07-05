import { Card, Row, Col } from 'react-bootstrap';
import CONTENT1 from '../../images/person-check.svg';
import CONTENT2 from '../../images/people.svg';
import CONTENT3 from '../../images/alumni.svg';
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate, Navigate, } from "react-router-dom";
import axios from "axios";
// import '../../css/card.css';
function Content() {
    const [queue, setQueue] = useState([]);
    const [regist, setRegist] = useState([]);

    const cardContent = {
        backgroundColor : "#e8eaf6",
        width: "320px",
        height: "130px",
        marginLeft: "50px",
        marginRight: "30px",
        marginTop: "20px",
        borderRadius: '8px',
        border: '3px solid #9fa8da',
    }

    const cardTitle = {
        fontSize: "13px",
        fontWeight: 'bold',
        color: 'white',
    }

    const Cardcontent1 = {
        width: '80px',
        height: "90px",
        marginLeft: "20px",
        marginTop: "20px"
    }

    useEffect(() => {
        const queueData = async () => {
            const token = localStorage.getItem("token");
            const currentQueue = await axios.get('http://localhost:3000/api/current-registrations', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(currentQueue.data.result[0]);
            const queues = currentQueue.data.result[0]

            setQueue(queues)
        }
        const registData = async () => {
            const token = localStorage.getItem("token");
            const currentRegist = await axios.get('http://localhost:3000/api/mahasiswa-current', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(currentRegist.data.result[0]);
            const regist = currentRegist.data.result[0]

            setRegist(regist)
        }

        queueData();
        registData();
    });

    return (
        <>
                <div className='container' style={{marginLeft:"50px"}}>
                    <Col xs={1} md={3}>
                        <Card style={cardContent}>
                            <Card.Body>
                                <Row>
                                <div className='left'>
                                    <Col xs={6}>
                                        <Card.Img style={Cardcontent1} variant="top" src={CONTENT1} />
                                    </Col>
                                </div>
                                <div className='right'>
                                    <Col xs={6}>
                                        <Card.Title style={{ fontWeight: 'bold',  marginLeft: '2vh', marginTop: '30px' }}>Mahasiswa</Card.Title>
                                        <Card.Text style={{ color: 'black',  marginLeft: '2vh' }}>{regist.count}</Card.Text>
                                    </Col>
                                </div>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={1} md={3}>
                        <Card style={cardContent}>
                            <Card.Body>
                                <Row>
                                <div className='left'>
                                    <Col xs={6}>
                                        <Card.Img style={Cardcontent1} variant="top" src={CONTENT1} />
                                    </Col>
                                </div>
                                <div className='right'>
                                    <Col xs={6}>
                                        <Card.Title style={{ fontWeight: 'bold',  marginLeft: '2vh', marginTop: '30px' }}>Pendaftaran Wisuda</Card.Title>
                                        <Card.Text style={{ color: 'black',  marginLeft: '2vh' }}>{queue.count}</Card.Text>
                                    </Col>
                                </div>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
        </>
    )
}

export default Content;