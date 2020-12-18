import React from 'react';
import {Container, Col, Row} from 'react-bootstrap'
import data from '../assets/data/data.json';
import PortFolioHeader from './PortFolioInfoLayout/PortFolioHeader'
import PortFolioDescription from './PortFolioInfoLayout/PortFolioDescription'
import Header from '../components/Header';


class PortFolioInfo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            id : props.id
        }
    }
    render(){
        const id = this.state.id;
        const cardItem = data.cards[id];
       
        return(
            <Container>
                <Header title={cardItem.title}/>
                <PortFolioHeader image={cardItem.img}/>
                <Container className="container-description">
                    <Row>
                        <Col className="col-description">
                            <PortFolioDescription />
                        </Col>
                    </Row>
                </Container>
              
            </Container>     
        );
    }

}

export default PortFolioInfo;
