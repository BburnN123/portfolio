import React from "react";
import {
    Card 
} from "react-bootstrap";
import CardFront from "./CardFront";
import CardBack from "./CardBack";


function CardInfo(){
    return(
        <Card className="card-container">
            <CardBack />
            <CardFront/>
       
        </Card>
      
    );
}

export default CardInfo;