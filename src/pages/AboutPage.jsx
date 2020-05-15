import React from 'react'
import Image from 'react-bootstrap/Image' 
import Container from 'react-bootstrap/Container'
import styles from './AboutPage.module.css'
import frontDoorImage from '../assets/front.jpg'

function AboutPage(props) {
    return(
        <Container className={styles.content}>
            <Image src={frontDoorImage}   className={styles.image}/>
            <Image src={frontDoorImage}   className={styles.image}/>
            <Image src={frontDoorImage}   className={styles.image}/>
            <Image src={frontDoorImage}   className={styles.image}/>
        </Container>
    );

}

export default AboutPage;