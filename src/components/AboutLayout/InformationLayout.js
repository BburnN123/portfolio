import React, { useState } from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import data from '../../assets/data/data.json';



const InfoTab = () =>
{
    return(
        <div>
            I am looking for opportunity and challenges to utilize my technical skills in maintaining as well as enhancing the overall application features.
            Constantly seeking and striving for improvement to hone my skills and knowledge
        </div>
    )

}

const EducationTab = () =>
{
    return(
        <div>
            {/* <ul id="timeline-nav">
                {data.education.map((element, i) => {
                    return(
                        <li>
                            <div className="timeline-container">
                                <Card>
                                    {element.time}
                                </Card>
                            </div>
                        </li>
                    )
                })}
            </ul> */}
        </div>
    )
}

const AchievementTab = () =>
{
    return(
        <div>
            AchievementTab
        </div>
    )
}

function InformationLayout()
{
    const [TabPage, setTabPage] = useState(EducationTab);
    const [PageIndex, setPageIndex] = useState(1);
    return(
        <Row>
            <Col md={6} >
            {/* <Image src={DisplayProfile} /> */}
            </Col>
            <Col md={6} >
            <div id="info-nav-container">
                <nav id="info-nav">
                    <ul>
                        <li onClick = {()=> {setTabPage(InfoTab);setPageIndex(0);}} className={(PageIndex === 0) ? "active": ""}>
                            <a>Information</a>
                        </li>
                        <li onClick = {()=> {setTabPage(EducationTab);setPageIndex(1);}} className={(PageIndex === 1) ? "active": ""}>
                            <a>Education</a>
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
    );
}

export default InformationLayout;