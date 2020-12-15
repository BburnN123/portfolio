import React from 'react';
import { Card } from 'react-bootstrap';
import CardFront from './CardFront';
import CardBack from './CardBack';


function CardInfo(props){
    return(
        <Card className="card-container">
            <CardBack card={props.card} showInfo={props.showInfo}/>
            <CardFront card={props.card}/>
         </Card>
      
    );
}

export default CardInfo;