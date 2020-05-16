import React from 'react'
import Image from 'react-bootstrap/Image' 
import Container from 'react-bootstrap/Container'
import styles from './AboutPage.module.css'
import frontDoorImage from '../assets/front.jpg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AboutPage(props) {
    return(
        <Container fluid>
            <Row>
                <Col xs={12} md={6} lg={4} >
                    <Image src={frontDoorImage} className={styles.image}  /*onClick={() => console.log("u clicked")}*/ />
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Image src={frontDoorImage} className={styles.image} />
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Image src={frontDoorImage} className={styles.image} />
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Image src={frontDoorImage} className={styles.image}/>
                </Col>


            </Row>
            
        </Container>
    );

}

export default AboutPage;