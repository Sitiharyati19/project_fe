import { Card, Row, Col } from 'react-bootstrap';
import itemcard from '../../images/Siti.jpeg';
import '../../css/absesnsi.css';

function AbsensiMahasiswa() {
    const cardContent = {
        display : "flex",
        backgroundColor : "#e8eaf6",
        width: "300px",
        height: "150px",
        marginLeft: "20px",
        marginRight: "100px",
        marginTop: "20px",
        borderRadius: '8px',
        border: '3px solid #9fa8da',
    }

    const cardTitle = {
        fontSize: "15px",
        fontWeight: 'bold',
        color: 'black',
        marginLeft: "20px",
        marginTop: "10px"
    }

    const Cardcontent1 = {
        width: '90px',
        height: '130px',
        marginLeft: "20px",
        marginTop: "10px"
    }


    return (
        <>
                <div className='container'style={{ border: '1px solid #9fa8da',height:"93vh", marginLeft:"50px"}}>
                    <div className='column1'>
                    <Col xs={1} md={3}>
                        <Card style={cardContent}>
                            <Card.Body>
                                <Row>
                                    <div className='left'>
                                        <Col xs={6}>
                                            <Card.Img style={Cardcontent1} variant="top" src={itemcard} />
                                        </Col>
                                    </div>
                                    <div className='right'>
                                        <Col xs={6}>
                                            <Card.Title style={{ fontWeight: 'bold', marginLeft: '2vh', marginTop: '8px' }}>SITI HARYATI</Card.Title>
                                            <Card.Text style={{ color: 'black', marginLeft: '2vh' }}>19560008</Card.Text>
                                            <Card.Text style={{ fontWeight: '400', marginLeft: '2vh', fontSize: '14px', color: "black"}}>SISTEM INFORMASI</Card.Text>
                                            <Card.Text style={{ fontWeight: '400', marginLeft: '2vh', fontSize: '14px', color: "black"}}>2019</Card.Text>
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
                                            <Card.Img style={Cardcontent1} variant="top" src={itemcard} />
                                        </Col>
                                    </div>
                                    <div className='right'>
                                        <Col xs={6}>
                                            <Card.Title style={{ fontWeight: 'bold', marginLeft: '2vh', marginTop: '8px' }}>SITI HARYATI</Card.Title>
                                            <Card.Text style={{ color: 'black', marginLeft: '2vh' }}>19560008</Card.Text>
                                            <Card.Text style={{ fontWeight: '400', marginLeft: '2vh', fontSize: '14px', color: "black"}}>SISTEM INFORMASI</Card.Text>
                                            <Card.Text style={{ fontWeight: '400', marginLeft: '2vh', fontSize: '14px', color: "black"}}>2019</Card.Text>
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
                                            <Card.Img style={Cardcontent1} variant="top" src={itemcard} />
                                        </Col>
                                    </div>
                                    <div className='right'>
                                        <Col xs={6}>
                                            <Card.Title style={{ fontWeight: 'bold', marginLeft: '2vh', marginTop: '8px' }}>SITI HARYATI</Card.Title>
                                            <Card.Text style={{ color: 'black', marginLeft: '2vh' }}>19560008</Card.Text>
                                            <Card.Text style={{ fontWeight: '400', marginLeft: '2vh', fontSize: '14px', color: "black"}}>SISTEM INFORMASI</Card.Text>
                                            <Card.Text style={{ fontWeight: '400', marginLeft: '2vh', fontSize: '14px', color: "black"}}>2019</Card.Text>
                                        </Col>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    </div>
                </div>
        </>
    )
}

export default AbsensiMahasiswa;