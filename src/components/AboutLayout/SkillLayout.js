import React, { useState } from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import data from '../../assets/data/data.json';



function SkillLayout()
{
    return(       
        <Row noGutters>
            <Col style={{background:"#FF0000"}}>
                <div id="skill-container" className="about-container">
                    <h1 style={{textAlign: 'center'}}>
                        Skills
                    </h1>
                    <div id="skill-list-container">
                        <ul id="skill-list">
                            {
                                data.education.map((element, i) => {
                                    return(
                                        <li>
                                        <Card>
                                            {element.school}
                                        </Card>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>    
            </Col>
        </Row>
    
    );
}

export default SkillLayout;