import React from "react";
import {
    Card, Button
} from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import ReactHtmlParser from "react-html-parser";


function ProjectCard(props) {
    const containerStyle = {
        marginBottom: "10px"
    };


    return (
        <Grid item md={4} xs={12} sm={6}>
            <Card >

                <Card.Img variant="top" src={props.card.img} className="projectcard-image" />
                <Card.Body>
                    <Card.Title>{props.card.title}</Card.Title>
                    <div className="projectcard-description" style={containerStyle}>
                        <Card.Text>
                            {ReactHtmlParser(props.card.shortDescription)}
                        </Card.Text>
                    </div>
                    <div style={containerStyle}>
                        <div>
                            Category
                        </div>
                        <div className="chip-container">
                            {
                                props.card.category.map((_category, i) => (
                                    <div key={i} className="chip">
                                        <span>
                                            {_category}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                    <div style={containerStyle}>
                        <div>
                            Programming
                        </div>
                        <div className="chip-container">
                            {
                                props.card.language.map((_language, i) => (
                                    <div key={i} className="chip">
                                        <span>
                                            {_language}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                    <div style={{
                        float: "right"
                    }}>
                        <Button variant="dark" onClick={() => props.showInfo(props.card.id)} >View More</Button>
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