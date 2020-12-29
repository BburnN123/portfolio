import React, { useState } from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import data from '../../assets/data/data.json';



function SoftwareLayout()
{
    return(       
        <Row noGutters>
            <Col>
                <div id="software-container" className="about-container">
                    <h1 style={{textAlign: 'center'}}>
                        Knowledge
                    </h1>
                    <div id="software-list-container">
                        <ul id="software-list">
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

export default SoftwareLayout;