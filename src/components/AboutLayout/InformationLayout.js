import React, { useState } from 'react';
import {Row, Col, Card, Image, Navbar} from 'react-bootstrap';
import data from '../../assets/data/data.json';
import DisplayProfile from '../../assets/images/displaypic.png';



const InfoTab = () =>
{
    return(
        <div className="tab-content">
            I am looking for opportunity and challenges to utilize my technical skills in maintaining as well as enhancing the overall application features.
            Constantly seeking and striving for improvement to hone my skills and knowledge
        </div>
    )

}

const TimelineTab = () =>
{
  
    return(
        <div id="timeline" className="tab-content">
                <ul id="timeline-nav">
                {
                    data.education.map((element, i) => {
                        return(
                            <li key={i}>
                                <div className="timeline-container">

                                    <Card>
                                        <span>{element.school}</span>
                                        <span>{element.description}</span>                               
                                    </Card>

                                </div>
                            </li>
                        )
                })} 
                </ul>
        </div>
    )
}

const AchievementTab = () =>
{
    return(
        <div className="tab-content">
            AchievementTab
        </div>
    )
}

function InformationLayout()
{
    const [TabPage, setTabPage] = useState(TimelineTab);
    const [PageIndex, setPageIndex] = useState(1);

    return(
        <div>

            <Row className="justify-content-center about-intro">
                <Col md={6} className="justify-content-center about-intro-col" style={{display:"flex"}}>
                    <Image src={DisplayProfile}  width="80%" height="80%" roundedCircle  />
                </Col>
                <Col md={6} className="about-intro-col">
                <h1 style={{textAlign: 'center', padding:"20px"}}>
                    About Me
                </h1>

                    <div id="info-nav-container">
                        <nav id="info-nav">
                            <ul>
                                <li onClick = {()=> {setTabPage(InfoTab);setPageIndex(0);}} className={(PageIndex === 0) ? "active": ""}>
                                    <a>Information</a>
                                </li>
                                <li onClick = {()=> {setTabPage(TimelineTab);setPageIndex(1);}} className={(PageIndex === 1) ? "active": ""}>
                                    <a>Timeline</a>
                                </li>
                                <li onClick = {()=>{setTabPage(AchievementTab);setPageIndex(2);}} className={(PageIndex === 2) ? "active": ""}>
                                    <a>Achievement</a>
                                </li>
                                <li className="slide"></li>
                            </ul>
                        </nav>
                    </div>             
        
                {TabPage}
                </Col>
            </Row>
                    
        </div>
    );
}

export default InformationLayout;