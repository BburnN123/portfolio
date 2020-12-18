import React from 'react';
import { Card } from 'react-bootstrap';


function CardFront(props){
    return(
        <Card className="card-side card-front">
            <Card.Img variant="top" src={props.card.img} />
        </Card>
    );
}

export default CardFront;