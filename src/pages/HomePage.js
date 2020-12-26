import React from 'react'
import HomeLanding from '../components/HomeLayout/HomeLanding';

import { Row, Col, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import FacebookLogo from '../assets/images/facebook-black.png'
import InstagramLogo from '../assets/images/instagram-black.png'
import LinkedinLogo from '../assets/images/linkedin-black.png'
import CodingBackground from '../assets/images/coding-blur.png'
import ProfileBackground from '../assets/images/profile-blur.png'
import Logo from '../assets/images/logo.png'

import ProfileImg from '../assets/images/user.png'
import ProjectImg from '../assets/images/layers.png'


const leftStyles = {
    backgroundImage: `url(${ProfileBackground})`,
    
};
const rightStyles = {
    backgroundImage: `url(${CodingBackground})`
};

function HomePage(props){
    return(
        <div id="landing-content">
            <Row className="m-intro">
                <Col>
                    <Image src={Logo} className="intro-img"/>
                            <span className="intro-content">
                                <h1>Hello, I am Hui Jie! </h1><br/> 
                                <h3>Frontend &bull; Backend &bull; Developer</h3>
                            </span>
                        <ul className="m-socialmedia-nav">
                            <li><Image src={LinkedinLogo} width="50px"/></li>
                            <li><Image src={InstagramLogo} width="50px"/></li>
                            <li><Image src={FacebookLogo} width="50px"/></li>
                        </ul>       
                </Col>
            </Row>

                    <Image src={Logo} className="intro-img w-intro"/>
                        <span className="intro-content w-intro">
                            <h1>Hello, I am Hui Jie! </h1><br/> 
                            <h3>Frontend &bull; Backend &bull; Developer</h3>
                        </span>
                    <ul className="socialmedia-nav w-intro">
                        <li><Image src={LinkedinLogo} width="50px"/></li>
                        <li><Image src={InstagramLogo} width="50px"/></li>
                        <li><Image src={FacebookLogo} width="50px"/></li>
                    </ul>       
  

            <Row noGutters>
                <Col md={6} className="left-landing center" style={leftStyles}>
                    <Link to="/about">
                        <div className="layer">
                            <div className="layer-content">
                                <Image src={ProfileImg} className="intro-img"/>
                                <h3>View my profile</h3>
                            </div>
                        </div>
                    </Link>
                </Col>
           

             
                <Col md={6} className="right-landing" style={rightStyles}> 
                    <Link to="/project">
                        <div className="layer">
                            <div className="layer-content">
                                <Image src={ProjectImg} className="intro-img"/>
                                <h3>View my project</h3>
                            </div>
                        </div>
                        </Link>
                </Col>
               
            </Row>

           
        
           {/* <HomeLanding/> */}
   
          
         
  

        </div>
    );
}

export default HomePage;