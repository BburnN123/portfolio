import React from 'react'
import CardCarousel from '../components/CardCarouselLayout';
import InformationLayout from '../components/AboutLayout/InformationLayout';
import SkillLayout from '../components/AboutLayout/SkillLayout';
import SoftwareLayout from '../components/AboutLayout/SoftwareLayout';
import {Image, Row, Col, Container} from 'react-bootstrap';
import ProjectImg from '../assets/images/layers.png'
import {Link} from 'react-router-dom';

import CodingBackground from '../assets/images/coding-blur.png'

const rightStyles = {
    backgroundImage: `url(${CodingBackground}) `,
};

function AboutPage(props){
    return(
        <div>
            <Container fluid>
                <InformationLayout />      
            </Container>
            <Container fluid style={{padding:"0"}}>
                <SkillLayout />              
            </Container>
            <Container fluid style={{padding:"0"}}>
                <SoftwareLayout/>              
            </Container>
            <Container fluid>
                <Row>
                    <Col className="right-landing" style={rightStyles}> 
                        <Link to="/project">
                            <div className="layer">
                                <div className="layer-content" style={{textAlign:"center"}}>
                                    <Image src={ProjectImg} className="intro-img"/>
                                    <h3>View my project</h3>
                                </div>
                            </div>
                            </Link>
                    </Col>
                </Row>             
            </Container>
        </div>
    
    );
}

export default AboutPage;