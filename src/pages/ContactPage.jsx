import React from 'react'
import { Container, Row, Col, Form, Button, Image} from 'react-bootstrap';
import './ContactPage.css'
import frontDoorImage from '../assets/front.jpg'

function ContactPage(props) {
    return(
        <Container>
            <Row className="pt-4">
                <Col xs={12} sm={12} lg={6}>
                    <Row>
                            <div className="map-info">
                                <i className="fa fa-address-card" aria-hidden="true" />Find us at the office
                                <p>Mochinoki Building 1F,</p>
                                <p>Higashirinkan, Minami-Ku,</p>
                                <p>Sagamihara city,</p>
                                <p>Kanagawa, Japan</p>
                            </div>
                            <Image src={frontDoorImage}   className="map-image"/>
                        
                        
                    </Row>
                    <Row className="pt-3">
                        <div className="phone-info">
                            <i className="fa fa-phone" aria-hidden="true" />Give us a ring
                            <p>(+81) 42-747-7118</p>
                        </div>
                        
                    </Row>
                </Col>
                <Col xs={12} sm={12} lg={6}>
                    <Form className="pb-3">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control placeholder="Enter your email" />
                         </Form.Group>

                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Information Request</Form.Label>
                                <Form.Control as="textarea" rows="5" />
                        </Form.Group>
                        <Button variant="primary" className="colorButton" type="submit">
                            Send
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );

}

export default ContactPage;