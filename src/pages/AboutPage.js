import React from 'react'
import CardCarousel from '../components/CardCarouselLayout';
import DisplayProfile from '../assets/images/displaypic.png';
import AboutSideNav from '../components/AboutSideNav';
import {Image, Row, Col} from 'react-bootstrap';

function AboutPage(props){
    return(
        <div>

                <Row>
                    <Col>
                        <AboutSideNav/>
                        {/* <Image src={DisplayProfile}/> */}
                    </Col>
                    <Col>
                        asd
                    </Col>
                </Row>
        </div>
    );
}

export default AboutPage;