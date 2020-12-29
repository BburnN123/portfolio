import React from 'react'
import CardCarousel from '../components/CardCarouselLayout';
import InformationLayout from '../components/AboutLayout/InformationLayout';
import SkillLayout from '../components/AboutLayout/SkillLayout';
import DisplayProfile from '../assets/images/displaypic.png';
import {Image, Row, Col, Container, Tabs, Tab} from 'react-bootstrap';
import ProfileBackground from '../assets/images/profile-blur.png'

function AboutPage(props){
    return(
        <div>
            <Container>
                    <InformationLayout />      
                </Container>
            <Container>
                <SkillLayout />              
            </Container>
        </div>
    
    );
}

export default AboutPage;