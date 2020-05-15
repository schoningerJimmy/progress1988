import React from 'react'
import { Jumbotron, Container, Image, Row, Col } from 'react-bootstrap';
import './HomePage.css'
import imageHome from '../assets/coverProgress.jpg'
import profilePic from '../assets/profile.jpg'

function HomePage(props) {
    return(
        <Container>
            <Image className="pt-2" src={imageHome} fluid />
            <Jumbotron className="mt-3 home-description">
                <h2 className="pb-2">Welcome to progress Jewerly shop </h2>
                <p> The shop was founded by Junya Fujisaki in 1994.
                    It is run by a jewerly expert, "Junya Fujisaki" and two experienced craft men, " Tamotsu Fujisaki" and "Fumihiro Onoda".

                    Nowadays, It is a premier source for diamond and gold jewellery, with over 27 years of manufacturing experience and an impeccable customer service experience. 
                    We would like to handle any cases about jewerly to answer your request, concerns as much as we can.
                    If you have any questions, please be free to contact us by using the contact form. 

                </p>
            </Jumbotron>
            <Row className="show-grid text-center mt-3">
                <Col xs={12} sm={6} lg={4} className="person-wrapper">
                    <Image src={profilePic} roundedCircle  className="profile-home-pic"/>
                    <h3>Fujisaki Junya</h3>
                    <p>Junya Fujisaki started to this company after working at his father's company "Fujisaki Shouten" which was founded in 1985.</p>
                </Col>
                <Col xs={12} sm={6} lg={4} className="person-wrapper">
                    <Image src={profilePic} roundedCircle  className="profile-home-pic"/>
                    <h3>Fujisaki Tamotsu</h3>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                </Col>
                <Col xs={12} sm={6} lg={4} className="person-wrapper">
                    <Image src={profilePic} roundedCircle  className="profile-home-pic"/>
                    <h3>Fumihiro Onoda</h3>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                </Col>
            </Row>
        </Container>
    );

}

export default HomePage;