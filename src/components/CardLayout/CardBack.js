import React, {useState} from 'react';
import { Card,Button } from 'react-bootstrap';

function CardBack(props){
    return(
        <Card className="card-side card-back">
            <Card.Body>
            <Card.Title>  
                {props.card.id} 
            </Card.Title>
            <Card.Text>
                This is the back
            </Card.Text>
            <Button variant="primary" onClick={()=> props.showInfo(props.card.id)}>View Project</Button>            
            </Card.Body>
        </Card>
    );
}

export default CardBack;