import React from "react";
import {
    Card, Button 
} from "react-bootstrap";
import Grid from "@material-ui/core/Grid";

function ProjectCard(props) {
    return (
        <Grid item md={4} xs={12} sm={3}>
            <Card>
                <Card.Img variant="top" src={props.card.img} />
                <Card.Body>
                    <Card.Title>{props.card.title}</Card.Title>
                    <Card.Text style={{
                        height: "100px" 
                    }}>
                        {props.card.shortDescription}
                    </Card.Text>
                    <div style={{
                        float: "right" 
                    }}>
                        <Button variant="dark" onClick={() => props.showInfo(props.card.id)} >Go somewhere</Button>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{props.card.date}</small>
                </Card.Footer>
            </Card>
        </Grid >
    );
}

export default ProjectCard;